/* form-handler.js - lightweight form submission helper */

const CONTACT_ENDPOINT = ""; // e.g. "https://formspree.io/f/abc123"

function handleContactForm() {
  const form = document.querySelector("[data-contact-form]");
  const status = document.getElementById("formStatus");
  if (!form || !status) return;

  status.textContent = CONTACT_ENDPOINT
    ? "Ready to send."
    : "Tip: add a Formspree endpoint in assets/js/form-handler.js to enable sending.";

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!CONTACT_ENDPOINT) {
      form.reset();
      status.textContent = "Message noted locally. Email or call for fastest response.";
      return;
    }

    const data = Object.fromEntries(new FormData(form).entries());

    try {
      status.textContent = "Sending...";
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(data)
      });

      if (!res.ok) throw new Error(res.statusText);

      form.reset();
      status.textContent = "Message sent! We will reply shortly.";
    } catch (err) {
      console.error(err);
      status.textContent = "Could not send right now. Please email or call us.";
    }
  });
}

document.addEventListener("DOMContentLoaded", handleContactForm);
