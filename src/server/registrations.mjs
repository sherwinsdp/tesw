import { mkdir, open, readFile, link, unlink } from "node:fs/promises";
import { randomUUID, createHash } from "node:crypto";
import path from "node:path";

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
export const CONSENT_VERSION = "makanhati-registration-local-2026-11-13-v2";

function send(res, status, body) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  res.end(JSON.stringify(body));
}

export function createRegistrationHandler({
  dataDirectory,
  validateRegistration,
}) {
  const limits = new Map();
  return async function register(req, res) {
    if (req.method !== "POST") {
      res.setHeader("Allow", "POST");
      send(res, 405, {
        success: false,
        error: "Gunakan POST untuk pendaftaran.",
      });
      return;
    }
    const origin = req.headers.origin;
    if (
      req.headers["sec-fetch-site"] === "cross-site" ||
      (origin && origin !== `http://${req.headers.host}`)
    ) {
      send(res, 403, {
        success: false,
        error: "Asal permintaan tidak diizinkan.",
      });
      return;
    }
    if (!/^application\/json(?:;|$)/i.test(req.headers["content-type"] || "")) {
      send(res, 415, { success: false, error: "Gunakan format JSON." });
      return;
    }
    const key = req.headers["idempotency-key"];
    if (typeof key !== "string" || !UUID.test(key)) {
      send(res, 400, {
        success: false,
        error: "ID permintaan tidak valid. Muat ulang halaman.",
      });
      return;
    }
    try {
      let bytes = 0;
      const chunks = [];
      for await (const chunk of req) {
        bytes += chunk.length;
        if (bytes <= 8192) chunks.push(chunk);
      }
      if (bytes > 8192) {
        send(res, 413, {
          success: false,
          error: "Data pendaftaran terlalu besar.",
        });
        return;
      }
      let input;
      try {
        input = JSON.parse(Buffer.concat(chunks).toString("utf8"));
      } catch {
        send(res, 400, { success: false, error: "Format data tidak valid." });
        return;
      }
      if (!input || typeof input !== "object" || Array.isArray(input)) {
        send(res, 400, { success: false, error: "Format data tidak valid." });
        return;
      }
      const customerName =
        typeof input.customerName === "string"
          ? input.customerName.trim().replace(/\s+/g, " ")
          : "";
      const instagramUsername =
        typeof input.instagramUsername === "string"
          ? input.instagramUsername.trim()
          : "";
      const errors = validateRegistration ? validateRegistration(input) : {};
      if (
        customerName.length < 2 ||
        customerName.length > 100 ||
        /[\x00-\x1f<>]/.test(customerName)
      )
        errors.customerName =
          "Isi nama lengkap 2–100 karakter tanpa tanda < atau >.";
      if (!/^@[a-zA-Z0-9._]{1,30}$/.test(instagramUsername))
        errors.instagramUsername =
          "Gunakan format @username Instagram, maksimal 30 karakter setelah @.";
      if (input.consent !== true)
        errors.consent = "Setujui kebijakan privasi sebelum mendaftar.";
      if (Object.keys(errors).length) {
        send(res, 422, {
          success: false,
          error: "Periksa kembali data pendaftaran.",
          errors,
        });
        return;
      }
      if (input.website) {
        send(res, 422, {
          success: false,
          error: "Permintaan tidak dapat diproses.",
        });
        return;
      }

      // Package/price fields from stale clients are intentionally not collected.
      const normalized = {
        customerName,
        instagramUsername,
        consent: true,
        consentVersion: CONSENT_VERSION,
      };
      const fingerprint = createHash("sha256")
        .update(JSON.stringify(normalized))
        .digest("hex");
      const target = path.join(dataDirectory, `${key.toLowerCase()}.json`);
      async function existingRecord() {
        try {
          return JSON.parse(await readFile(target, "utf8"));
        } catch (error) {
          if (error.code === "ENOENT") return null;
          throw error;
        }
      }
      function acknowledge(record, status) {
        if (record.fingerprint !== fingerprint) {
          send(res, 409, {
            success: false,
            error:
              "ID permintaan ini sudah dipakai untuk data berbeda. Muat ulang form.",
          });
          return;
        }
        if (
          !UUID.test(record.id) ||
          record.mode !== "local-test" ||
          record.kind !== "registration"
        )
          throw new Error("Invalid persisted record");
        send(res, status, {
          success: true,
          persisted: true,
          storage: "local",
          registrationId: record.id,
        });
      }
      const prior = await existingRecord();
      if (prior) {
        acknowledge(prior, 200);
        return;
      }
      const ip = req.socket.remoteAddress || "local";
      const now = Date.now();
      for (const [address, limit] of limits)
        if (now - limit.start > 60000) limits.delete(address);
      const limit = limits.get(ip) || { start: now, count: 0 };
      if (++limit.count > 30) {
        send(res, 429, {
          success: false,
          error: "Terlalu banyak percobaan. Tunggu satu menit lalu coba lagi.",
        });
        return;
      }
      limits.set(ip, limit);
      const record = {
        id: randomUUID(),
        kind: "registration",
        mode: "local-test",
        status: "registration_received",
        createdAt: new Date().toISOString(),
        ...normalized,
        consentAt: new Date().toISOString(),
        fingerprint,
      };
      await mkdir(dataDirectory, { recursive: true });
      const temporary = path.join(
        dataDirectory,
        `.pending-${randomUUID()}.json`,
      );
      let handle;
      try {
        handle = await open(temporary, "wx", 0o600);
        await handle.writeFile(JSON.stringify(record, null, 2), "utf8");
        await handle.sync();
        await handle.close();
        handle = null;
        try {
          // Atomic exclusive publication: concurrent retries cannot replace a record.
          await link(temporary, target);
        } catch (error) {
          if (error.code !== "EEXIST") throw error;
          acknowledge(await existingRecord(), 200);
          return;
        }
        const persisted = await existingRecord();
        acknowledge(persisted, 201);
      } finally {
        if (handle) await handle.close().catch(() => {});
        await unlink(temporary).catch(() => {});
      }
    } catch {
      // Keep contact details and payloads out of console logs and HTTP errors.
      send(res, 503, {
        success: false,
        persisted: false,
        error:
          "Belum dapat menyimpan pendaftaran. Data isian tetap ada. Silakan coba lagi.",
      });
    }
  };
}
