import { test } from "node:test";
import assert from "node:assert/strict";
import http from "node:http";
import { mkdir, mkdtemp, readFile, readdir, writeFile } from "node:fs/promises";
import { randomUUID } from "node:crypto";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { createRegistrationHandler } from "../src/server/registrations.mjs";
import { registrationErrors } from "../src/lib/registration-schema.mjs";

const base = fileURLToPath(new URL("../data/test-runs/", import.meta.url));
await mkdir(base, { recursive: true });
const root = await mkdtemp(path.join(base, "run-"));
const dataDirectory = path.join(root, "records");
const handler = createRegistrationHandler({
  dataDirectory,
  validateRegistration: registrationErrors,
});
const app = http.createServer((req, res) => handler(req, res));
await new Promise((resolve) => app.listen(0, "127.0.0.1", resolve));
const url = `http://127.0.0.1:${app.address().port}/api/registrations`;
const payload = {
  customerName: "Pengujian MakanHati",
  instagramUsername: "@makanhati_test",
  consent: true,
  website: "",
};
const post = (body = payload, key = randomUUID(), headers = {}) =>
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Idempotency-Key": key,
      ...headers,
    },
    body: JSON.stringify(body),
  });

try {
  await test("Registration is persisted without package or price fields, even from a stale client", async () => {
    const key = randomUUID();
    const r = await post(
      { ...payload, packageId: "dual-weekly", package: { price: 1 }, price: 1 },
      key,
    );
    assert.equal(r.status, 201);
    const result = await r.json();
    assert.equal(result.success, true);
    assert.equal(result.persisted, true);
    assert.equal(result.storage, "local");
    const saved = JSON.parse(
      await readFile(path.join(dataDirectory, `${key}.json`), "utf8"),
    );
    assert.equal(saved.id, result.registrationId);
    assert.equal(saved.customerName, payload.customerName);
    assert.equal("package" in saved, false);
    assert.equal("packageId" in saved, false);
    assert.equal("price" in saved, false);
    assert.equal(saved.kind, "registration");
    assert.equal(saved.status, "registration_received");
    assert.ok(saved.consentAt);
    assert.equal(saved.mode, "local-test");
  });
  await test("Invalid name, Instagram, and missing consent do not write a record", async () => {
    const before = (await readdir(dataDirectory)).length;
    for (const p of [
      { ...payload, customerName: "A" },
      { ...payload, instagramUsername: "bad user" },
      { ...payload, consent: false },
    ]) {
      const r = await post(p);
      assert.equal(r.status, 422);
      assert.equal((await r.json()).success, false);
    }
    assert.equal((await readdir(dataDirectory)).length, before);
  });
  await test("Concurrent retries return one request ID and publish exactly one file", async () => {
    const key = randomUUID();
    const before = (await readdir(dataDirectory)).length;
    const results = await Promise.all(
      Array.from({ length: 8 }, () =>
        post(payload, key).then(async (r) => ({
          status: r.status,
          body: await r.json(),
        })),
      ),
    );
    for (const r of results) {
      assert.ok([200, 201].includes(r.status));
      assert.equal(r.body.success, true);
    }
    assert.equal(new Set(results.map((r) => r.body.registrationId)).size, 1);
    assert.equal((await readdir(dataDirectory)).length, before + 1);
    const changed = await post(
      { ...payload, customerName: "Nama berbeda" },
      key,
    );
    assert.equal(changed.status, 409);
  });
  await test("A registration needs only name, Instagram and consent", async () => {
    const r = await post(payload);
    assert.equal(r.status, 201);
  });
  await test("Cross-origin requests and public GET are rejected", async () => {
    const r = await post(payload, randomUUID(), {
      Origin: "https://example.com",
    });
    assert.equal(r.status, 403);
    assert.equal((await fetch(url)).status, 405);
  });
  await test("A storage failure never returns success or persisted=true", async () => {
    const blocked = path.join(root, "not-a-directory");
    await writeFile(blocked, "fixture");
    const brokenHandler = createRegistrationHandler({
      dataDirectory: blocked,
      validateRegistration: registrationErrors,
    });
    const broken = http.createServer((req, res) => brokenHandler(req, res));
    await new Promise((resolve) => broken.listen(0, "127.0.0.1", resolve));
    try {
      const r = await fetch(
        `http://127.0.0.1:${broken.address().port}/api/registrations`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Idempotency-Key": randomUUID(),
          },
          body: JSON.stringify(payload),
        },
      );
      assert.equal(r.status, 503);
      const result = await r.json();
      assert.equal(result.success, false);
      assert.notEqual(result.persisted, true);
    } finally {
      await new Promise((resolve) => broken.close(resolve));
    }
  });
} finally {
  await new Promise((resolve) => app.close(resolve));
}
