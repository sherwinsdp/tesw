import { test } from "node:test";
import assert from "node:assert/strict";
import { createRegistrationAnalytics } from "../src/lib/analytics.js";

const saved = {
  success: true,
  persisted: true,
  storage: "local",
  registrationId: "e8a7a200-5fe1-4392-a00d-a7452f3ce632",
};
test("A lead is never generated from an unconfirmed or non-local response", () => {
  const events = [];
  const a = createRegistrationAnalytics((e) => events.push(e));
  for (const response of [
    null,
    {},
    { success: true, requestId: "demo-id" },
    { ...saved, persisted: false },
    { ...saved, storage: "unknown" },
    { ...saved, success: false },
    { ...saved, registrationId: "not-an-id" },
  ])
    a.persistedRegistration(response);
  assert.deepEqual(events, []);
});
test("Confirmed retries produce exactly one lead without exporting its ID or contact data", () => {
  const events = [];
  const a = createRegistrationAnalytics((e) => events.push(e));
  a.persistedRegistration({
    ...saved,
    customerName: "Private Name",
    instagramUsername: "@private_person",
    campaign: "private@example.com",
  });
  a.persistedRegistration(saved);
  a.persistedRegistration({
    ...saved,
    registrationId: saved.registrationId.toUpperCase(),
  });
  assert.deepEqual(events, [
    {
      event: "generate_lead",
      environment: "preview",
      lead_type: "registration",
      form_id: "signup-form",
    },
  ]);
  a.persistedRegistration({
    ...saved,
    registrationId: "11111111-1111-4111-8111-111111111111",
  });
  assert.equal(events.length, 2);
});
test("Only fixed safe event parameters are accepted; pricing clicks never select a package", () => {
  const events = [];
  const a = createRegistrationAnalytics((e) => events.push(e));
  a.registrationCta("hero");
  a.registrationCta("pricing");
  a.menuDayChanged("Selasa");
  a.faqExpand(2);
  const validCount = events.length;
  a.registrationCta("private@example.com");
  a.menuDayChanged("@private_person");
  a.faqExpand("Private Name");
  assert.equal(events.length, validCount);
  assert.deepEqual(
    events.map((e) => e.event),
    [
      "hero_cta_click",
      "registration_cta_click",
      "registration_cta_click",
      "menu_day_changed",
      "faq_expand",
    ],
  );
  assert.ok(
    events.every(
      (e) =>
        !("package_type" in e) && !("meal_schedule" in e) && !("campaign" in e),
    ),
  );
});
test("Form view and start each emit once per page", () => {
  const events = [];
  const a = createRegistrationAnalytics((e) => events.push(e));
  a.formView();
  a.formView();
  a.formStart();
  a.formStart();
  assert.deepEqual(
    events.map((e) => e.event),
    ["form_view", "form_start"],
  );
  assert.equal(events[0].section, "registration_form");
});
test("An analytics failure cannot break registration or its confirmation", () => {
  const a = createRegistrationAnalytics(() => {
    throw new Error("Blocked analytics sink");
  });
  assert.doesNotThrow(() => {
    a.registrationCta("hero");
    a.formView();
    a.formStart();
    a.persistedRegistration(saved);
  });
});
