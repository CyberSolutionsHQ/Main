/* main.js - shared header/footer + theming helpers */

// Respect saved theme before anything renders
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
}

const brand = {
  name: "Cyber Solutions LLC",
  tagline: "Repair • Build • Design",
  phone: "+12287315948",
  phoneNice: "(228) 731-5948",
  email: "Thomas.cook@cybersolutionshq.com",
  location: "Biloxi / Gulfport, Mississippi",
  facebook: "https://www.facebook.com/share/1HwvWnsxHX/"
};

function setActiveNav(linkEls) {
  const current = window.location.pathname.split("/").pop() || "index.html";
  linkEls.forEach((link) => {
    const target = link.getAttribute("href");
    if (!target) return;
    const isActive = current === target || (current === "" && target === "index.html");
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function renderHeader() {
  const slot = document.querySelector('[data-slot="site-header"]');
  if (!slot) return;

  slot.innerHTML = `
    <nav class="nav">
      <a class="nav-brand" href="index.html" aria-label="${brand.name} home">
        <img src="assets/logo/logo.png" alt="${brand.name} logo" width="48" height="48">
        <div>
          <div class="nav-title">${brand.name}</div>
          <div class="nav-subtitle">${brand.tagline}</div>
        </div>
      </a>
      <div class="nav-links">
        <a data-nav href="services.html">Services</a>
        <a data-nav href="pricing.html">Pricing</a>
        <a data-nav href="portfolio.html">Portfolio</a>
        <a data-nav href="faq.html">FAQ</a>
        <a data-nav href="about.html">About</a>
      </div>
      <div class="nav-actions">
        <a class="btn" href="tel:${brand.phone}">Call</a>
        <a class="btn btn-primary" href="contact.html">Get a Quote</a>
        <button class="btn btn-ghost" id="themeBtn" type="button" aria-label="Toggle theme">🌙</button>
      </div>
    </nav>
  `;

  const links = slot.querySelectorAll("[data-nav]");
  setActiveNav(links);
}

function renderFooter() {
  const slot = document.querySelector('[data-slot="site-footer"]');
  if (!slot) return;

  slot.innerHTML = `
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="nav-brand">
          <img src="assets/logo/logo.png" alt="${brand.name} logo" width="44" height="44">
          <div>
            <div class="nav-title">${brand.name}</div>
            <div class="nav-subtitle">${brand.tagline}</div>
          </div>
        </div>
        <p class="muted">High-tech repairs, custom PCs, and digital builds for the Gulf Coast and beyond.</p>
      </div>
      <div class="footer-col">
        <h3>Services</h3>
        <ul>
          <li><a href="services.html#repair">Device Repair</a></li>
          <li><a href="services.html#builds">Custom PC Builds</a></li>
          <li><a href="services.html#web">Web & Automation</a></li>
          <li><a href="pricing.html">Pricing</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h3>Contact</h3>
        <ul>
          <li><a href="tel:${brand.phone}">${brand.phoneNice}</a></li>
          <li><a href="mailto:${brand.email}">${brand.email}</a></li>
          <li>${brand.location}</li>
          <li><a href="${brand.facebook}" target="_blank" rel="noreferrer">Facebook</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} ${brand.name}</span>
      <a class="btn" href="contact.html">Schedule a Call</a>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
});
