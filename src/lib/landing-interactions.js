import { createRegistrationAnalytics } from "./analytics.js";
import menuData from "../data/menu.json";

export function initializeLandingPage({
  validateRegistration,
  resetRegistration,
}) {
  let active = true;
  const cleanups = [];
  const on = (target, event, listener, options) => {
    target.addEventListener(event, listener, options);
    cleanups.push(() => target.removeEventListener(event, listener, options));
  };

  const analytics = createRegistrationAnalytics((event) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(event);
  });
  const $ = (selector) => document.querySelector(selector);
  const form = $("#signup-form");
  const submit = $("#signup-submit");
  const submitContent = submit.innerHTML;
  const status = $("#form-status");
  const success = $("#signup-success");
  const signupSection = $("#pesan");
  const dayNames = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];
  const previous = $("#previous-day");
  const next = $("#next-day");
  let menu = [];
  let day = 0;
  let changingDay = false;
  let submitting = false;
  let validating = false;
  let pendingSubmission = null;

  const mobileMenu = $("#mobile-nav");
  const menuToggle = $(".menu-toggle");
  on(menuToggle, "click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    mobileMenu.hidden = expanded;
  });
  on(mobileMenu, "click", (event) => {
    if (event.target.closest("a")) {
      menuToggle.setAttribute("aria-expanded", "false");
      mobileMenu.hidden = true;
    }
  });
  on(document, "keydown", (event) => {
    if (event.key === "Escape" && !mobileMenu.hidden) {
      mobileMenu.hidden = true;
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.focus();
    }
  });

  // Hide the bottom CTA in the hero and while it could cover the form or keyboard.
  const sticky = $("#mobile-sticky");
  const heroSection = $("#hero");
  const updateSticky = () => {
    const heroBox = heroSection.getBoundingClientRect();
    const headerBottom = $(".site-header").getBoundingClientRect().bottom;
    const box = signupSection.getBoundingClientRect();
    const footerBox = $(".site-footer").getBoundingClientRect();
    const heroVisible =
      matchMedia("(max-width:760px)").matches &&
      heroBox.top < innerHeight &&
      heroBox.bottom > headerBottom;
    const visible = box.top < innerHeight && box.bottom > 0;
    const footerVisible = footerBox.top < innerHeight && footerBox.bottom > 0;
    sticky.classList.toggle(
      "is-hidden",
      heroVisible ||
        visible ||
        footerVisible ||
        form.contains(document.activeElement),
    );
  };
  const stickyObserver = new IntersectionObserver(updateSticky, {
    threshold: [0, 0.01, 1],
  });
  stickyObserver.observe(signupSection);
  stickyObserver.observe(heroSection);
  stickyObserver.observe($(".site-footer"));
  on(window, "resize", updateSticky, { passive: true });
  on(window, "scroll", updateSticky, { passive: true });
  on(form, "focusin", updateSticky);
  on(form, "focusout", () => requestAnimationFrame(updateSticky));
  updateSticky();

  const formViewObserver = new IntersectionObserver(
    (entries) => {
      if (
        entries.some(
          (entry) => entry.isIntersecting && entry.intersectionRatio >= 0.3,
        )
      ) {
        analytics.formView();
        formViewObserver.disconnect();
      }
    },
    { threshold: 0.3 },
  );
  formViewObserver.observe(form);
  document.querySelectorAll(".faq-list details").forEach((item, index) => {
    on(item, "toggle", () => {
      if (item.open) analytics.faqExpand(index + 1);
    });
  });

  async function readJson(url) {
    const response = await fetch(url, { signal: AbortSignal.timeout(10000) });
    if (!response.ok) throw new Error("Data tidak dapat dimuat.");
    return response.json();
  }
  previous.disabled = true;
  next.disabled = true;
  const menuReady = Promise.resolve(menuData)
    .then((data) => {
      if (!active) return;
      if (!Array.isArray(data) || data.length !== 15)
        throw new Error("Data menu tidak lengkap.");
      menu = data;
      previous.disabled = next.disabled = false;
    })
    .catch(() => {
      if (!active) return;
      const notice = document.createElement("p");
      notice.className = "menu-photo-note";
      notice.setAttribute("role", "status");
      notice.textContent =
        "Menu hari lain belum dapat dimuat. Muat ulang halaman untuk mencoba kembali.";
      $(".day-control").after(notice);
    });

  function loadImage(src) {
    return new Promise((resolve, reject) => {
      const photo = new Image();
      const timer = setTimeout(
        () => reject(new Error("Foto belum dapat dimuat.")),
        15000,
      );
      photo.onload = () => {
        clearTimeout(timer);
        resolve();
      };
      photo.onerror = () => {
        clearTimeout(timer);
        reject(new Error("Foto belum dapat dimuat."));
      };
      photo.src = src;
    });
  }
  async function changeDay(direction) {
    await menuReady;
    if (!active || changingDay || menu.length !== 15) return;
    changingDay = true;
    previous.disabled = next.disabled = true;
    const targetDay = (day + direction + dayNames.length) % dayNames.length;
    const entries = ["gurih", "pedas", "creamy"].map((category) =>
      menu.find(
        (item) =>
          item.day === dayNames[targetDay] && item.category === category,
      ),
    );
    $("#menu-cards").setAttribute("aria-busy", "true");
    try {
      await Promise.all(entries.map((item) => loadImage(item.image)));
      // Commit all three meals together after every photo is ready.
      if (!active) return;
      document.querySelectorAll("#menu-cards > .menu-grid").forEach((panel) => {
        panel.hidden = panel.dataset.day !== dayNames[targetDay];
      });
      day = targetDay;
      $("#menu-day").textContent = dayNames[day];
      $("#menu-cards").setAttribute("aria-label", `Menu ${dayNames[day]}`);
      analytics.menuDayChanged(dayNames[day]);
      $("#menu-load-error")?.remove();
    } catch {
      if (!active) return;
      let error = $("#menu-load-error");
      if (!error) {
        error = document.createElement("p");
        error.id = "menu-load-error";
        error.className = "menu-photo-note";
        error.setAttribute("role", "status");
        $(".day-control").after(error);
      }
      error.textContent =
        "Foto menu belum dapat dimuat. Silakan coba panahnya lagi.";
    } finally {
      if (!active) return;
      changingDay = false;
      previous.disabled = next.disabled = false;
      $("#menu-cards").removeAttribute("aria-busy");
    }
  }
  on(previous, "click", () => changeDay(-1));
  on(next, "click", () => changeDay(1));
  on($(".day-control"), "keydown", (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      changeDay(event.key === "ArrowLeft" ? -1 : 1);
    }
  });

  // All registration CTAs lead to one form; no package choice is made here.
  document.querySelectorAll('a[href="#pesan"]').forEach((link) =>
    on(link, "click", (event) => {
      event.preventDefault();
      const section = link.closest(".hero-actions")
        ? "hero"
        : link.closest("#paket")
          ? "pricing"
          : link.closest(".desktop-nav")
            ? "header"
            : link.closest("#mobile-nav")
              ? "mobile_navigation"
              : "sticky";
      analytics.registrationCta(section);
      mobileMenu.hidden = true;
      menuToggle.setAttribute("aria-expanded", "false");
      signupSection.scrollIntoView({
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
        block: "start",
      });
      if (!form.hidden) $("#customerName").focus({ preventScroll: true });
      else success.focus({ preventScroll: true });
    }),
  );

  function fieldError(field, message) {
    const errors = {
      customerName: "name-error",
      instagramUsername: "instagram-error",
      consent: "consent-error",
    };
    $(`#${errors[field]}`).textContent = message;
    $(`#${field}`).setAttribute("aria-invalid", String(Boolean(message)));
  }
  function showFormError(message) {
    status.hidden = false;
    status.className = "form-status error";
    status.textContent = message;
  }
  on(form, "input", (event) => {
    analytics.formStart();
    if (
      ["customerName", "instagramUsername", "consent"].includes(event.target.id)
    )
      fieldError(event.target.id, "");
  });
  on(form, "submit", async (event) => {
    event.preventDefault();
    if (submitting || validating) return;
    const payload = {
      customerName: $("#customerName").value.trim().replace(/\s+/g, " "),
      instagramUsername: $("#instagramUsername").value.trim(),
      consent: $("#consent").checked,
      website: $("#website").value,
    };
    validating = true;
    let errors;
    try {
      errors = await validateRegistration(payload);
    } catch {
      if (active)
        showFormError(
          "Validasi belum dapat dijalankan. Muat ulang halaman lalu coba lagi.",
        );
      return;
    } finally {
      validating = false;
    }
    if (!active) return;
    for (const [field, message] of Object.entries(errors))
      fieldError(field, message);
    const firstError = Object.keys(errors).find((field) => errors[field]);
    if (firstError) {
      $(`#${firstError}`).focus();
      return;
    }
    const fingerprint = JSON.stringify(payload);
    if (!pendingSubmission || pendingSubmission.fingerprint !== fingerprint)
      pendingSubmission = { fingerprint, key: crypto.randomUUID() };
    submitting = true;
    submit.disabled = true;
    submit.textContent = "Menyimpan…";
    form.setAttribute("aria-busy", "true");
    status.hidden = true;
    try {
      const response = await fetch("/api/registrations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Idempotency-Key": pendingSubmission.key,
        },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(15000),
      });
      const result = await response.json();
      if (!active) return;
      if (
        !response.ok ||
        result.success !== true ||
        result.persisted !== true ||
        result.storage !== "local" ||
        typeof result.registrationId !== "string"
      ) {
        if (result.errors)
          for (const [field, message] of Object.entries(result.errors))
            if (field in errors) fieldError(field, message);
        throw new Error(
          result.error || "Pendaftaran belum tersimpan. Silakan coba lagi.",
        );
      }
      form.hidden = true;
      success.hidden = false;
      $("#registration-id").textContent =
        `ID pendaftaran: ${result.registrationId}`;
      analytics.persistedRegistration(result);
      success.focus({ preventScroll: true });
      pendingSubmission = null;
    } catch (error) {
      if (!active) return;
      showFormError(
        error.name === "TimeoutError" || error.name === "TypeError"
          ? "Koneksi terputus atau penyimpanan belum terkonfirmasi. Data isian tetap ada; coba lagi untuk memeriksa permintaan yang sama."
          : error.message,
      );
    } finally {
      if (!active) return;
      submitting = false;
      submit.disabled = false;
      submit.innerHTML = submitContent;
      form.removeAttribute("aria-busy");
    }
  });
  on($("#signup-again"), "click", () => {
    form.reset();
    resetRegistration();
    pendingSubmission = null;
    for (const field of ["customerName", "instagramUsername", "consent"])
      fieldError(field, "");
    status.hidden = true;
    success.hidden = true;
    form.hidden = false;
    $("#customerName").focus({ preventScroll: true });
  });

  return () => {
    active = false;
    stickyObserver.disconnect();
    formViewObserver.disconnect();
    cleanups.forEach((cleanup) => cleanup());
  };
}
