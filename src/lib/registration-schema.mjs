import { z } from "zod";

// One registration contract, shared by React Hook Form and the API.
// No package, delivery, payment or order fields are collected.
export const registrationSchema = z.object({
  customerName: z
    .string()
    .transform((value) => value.trim().replace(/\s+/g, " "))
    .pipe(
      z
        .string()
        .min(2, "Isi nama lengkap 2–100 karakter.")
        .max(100, "Isi nama lengkap 2–100 karakter.")
        .regex(/^[^\x00-\x1f<>]+$/, "Isi nama lengkap tanpa tanda < atau >."),
    ),
  instagramUsername: z
    .string()
    .trim()
    .regex(
      /^@[a-zA-Z0-9._]{1,30}$/,
      "Gunakan format @username Instagram, maksimal 30 karakter setelah @.",
    ),
  consent: z
    .boolean()
    .refine(
      (value) => value === true,
      "Setujui kebijakan privasi sebelum mendaftar.",
    ),
});

export function registrationErrors(input) {
  const parsed = registrationSchema.safeParse(input);
  if (parsed.success) return {};
  const errors = {};
  for (const issue of parsed.error.issues) {
    const field = issue.path[0];
    if (
      ["customerName", "instagramUsername", "consent"].includes(field) &&
      !errors[field]
    )
      errors[field] = issue.message;
  }
  return errors;
}
