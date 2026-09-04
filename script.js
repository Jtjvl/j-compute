const btn = document.querySelector("[data-copy-email]");
const email = document.querySelector("#email");
btn?.addEventListener("click", async () => {
  const value = email?.textContent?.trim() || "contact@j-compute.example";
  try {
    await navigator.clipboard.writeText(value);
    btn.textContent = "Copied";
    setTimeout(() => { btn.textContent = "Copy"; }, 1500);
  } catch {
    btn.textContent = "Select email";
  }
});
