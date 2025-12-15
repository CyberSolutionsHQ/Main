/* theme-toggle.js - theme switching */

function themeInit() {
  const btn = document.getElementById("themeBtn");
  const root = document.documentElement;

  // Default theme
  const saved = localStorage.getItem("theme");
  if (saved) root.setAttribute("data-theme", saved);

  const updateIcon = () => {
    const t = root.getAttribute("data-theme") || "dark";
    if (btn) btn.textContent = (t === "dark") ? "🌙" : "☀️";
  };

  updateIcon();

  if (!btn) return;

  btn.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateIcon();
  });
}

document.addEventListener("DOMContentLoaded", themeInit);