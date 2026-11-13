import { test } from "node:test";
import assert from "node:assert/strict";
import {
  registrationSchema,
  registrationErrors,
} from "../src/lib/registration-schema.mjs";

test("Shared Zod contract accepts registration only and strips order fields", () => {
  const parsed = registrationSchema.parse({
    customerName: "  Nama   Pengujian  ",
    instagramUsername: " @uji_schema ",
    consent: true,
    packageId: "trial",
    address: "Not collected",
  });
  assert.deepEqual(parsed, {
    customerName: "Nama Pengujian",
    instagramUsername: "@uji_schema",
    consent: true,
  });
});
test("Shared validation rejects missing consent, bad Instagram and unsafe names", () => {
  const errors = registrationErrors({
    customerName: "<script>",
    instagramUsername: "not a username",
    consent: false,
  });
  assert.deepEqual(Object.keys(errors).sort(), [
    "consent",
    "customerName",
    "instagramUsername",
  ]);
  assert.ok(
    registrationErrors({
      customerName: "A",
      instagramUsername: "@valid",
      consent: true,
    }).customerName,
  );
});
test("Registration does not require the former catering-order fields", () => {
  assert.deepEqual(
    registrationErrors({
      customerName: "Nama Pengujian",
      instagramUsername: "@valid",
      consent: true,
    }),
    {},
  );
  assert.equal(
    registrationSchema.safeParse({
      customerName: "Nama",
      instagramUsername: "@" + "x".repeat(31),
      consent: true,
    }).success,
    false,
  );
});
