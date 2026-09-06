const CONTACT_EMAIL = "contact@j-compute.com";

const btn = document.querySelector("[data-copy-email]");
const email = document.querySelector("#email");
btn?.addEventListener("click", async () => {
  const value = email?.textContent?.trim() || CONTACT_EMAIL;
  try {
    await navigator.clipboard.writeText(value);
    btn.textContent = "Copied";
    setTimeout(() => { btn.textContent = "Copy"; }, 1500);
  } catch {
    btn.textContent = "Select email";
  }
});

// Build mailto with encodeURIComponent so spaces become %20 (not +).
// Gmail treats + from form-urlencoded mailto GET as literal plus signs.
const form = document.querySelector("#contact-form");
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const subject = document.querySelector("#contact-subject")?.value?.trim() || "";
  const body = document.querySelector("#contact-body")?.value?.trim() || "";
  if (!subject || !body) {
    form.reportValidity?.();
    return;
  }
  const href =
    `mailto:${CONTACT_EMAIL}` +
    `?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`;
  window.location.href = href;
});
