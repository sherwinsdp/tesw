// Adapted from Kiro's event taxonomy for the approved registration flow.
// This queues preview events in memory only. It loads no GA4/GTM script,
// sends no network request and accepts no arbitrary user or URL parameters.
export function createRegistrationAnalytics(push) {
  let viewed = false;
  let started = false;
  const acknowledged = new Set();
  const sources = new Set([
    "hero",
    "header",
    "pricing",
    "mobile_navigation",
    "sticky",
  ]);
  const days = new Set(["Senin", "Selasa", "Rabu", "Kamis", "Jumat"]);
  const emit = (event, params = {}) => {
    try {
      push({
        event,
        environment: "preview",
        lead_type: "registration",
        ...params,
      });
    } catch {
      /* Measurement must never interrupt the registration experience. */
    }
  };
  return {
    registrationCta(section) {
      if (!sources.has(section)) return;
      if (section === "hero") emit("hero_cta_click", { section: "hero" });
      emit("registration_cta_click", { section });
    },
    formView() {
      if (viewed) return;
      viewed = true;
      emit("form_view", { section: "registration_form" });
    },
    formStart() {
      if (started) return;
      started = true;
      emit("form_start", { form_id: "signup-form" });
    },
    menuDayChanged(day) {
      if (days.has(day)) emit("menu_day_changed", { day });
    },
    faqExpand(index) {
      if (Number.isInteger(index) && index >= 1 && index <= 6)
        emit("faq_expand", { faq_id: `faq-${index}` });
    },
    persistedRegistration(result) {
      if (
        !result ||
        result.success !== true ||
        result.persisted !== true ||
        result.storage !== "local" ||
        typeof result.registrationId !== "string" ||
        !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
          result.registrationId,
        )
      )
        return;
      const id = result.registrationId.toLowerCase();
      if (acknowledged.has(id)) return;
      acknowledged.add(id);
      emit("generate_lead", { form_id: "signup-form" });
    },
  };
}
