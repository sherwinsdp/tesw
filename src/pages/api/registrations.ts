import type { NextApiRequest, NextApiResponse } from "next";
import path from "node:path";
import { createRegistrationHandler } from "@/server/registrations.mjs";
import { registrationErrors } from "@/lib/registration-schema.mjs";

// Keep the proven raw-stream validation and atomic local persistence.
// Vercel's ephemeral filesystem is deliberately not treated as a database.
const handler = createRegistrationHandler({
  dataDirectory:
    process.env.MAKANHATI_DATA_DIR ||
    path.join(process.cwd(), "data", "registrations"),
  validateRegistration: registrationErrors,
});
export const config = { api: { bodyParser: false } };

export default async function registrations(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res
      .status(405)
      .json({
        success: false,
        persisted: false,
        error: "Gunakan POST untuk pendaftaran.",
      });
    return;
  }
  if (process.env.VERCEL || process.env.REGISTRATION_STORAGE === "disabled") {
    res
      .status(503)
      .json({
        success: false,
        persisted: false,
        error:
          "Pendaftaran online belum diaktifkan. Data belum tersimpan. Silakan coba lagi nanti.",
      });
    return;
  }
  await handler(req, res);
}
