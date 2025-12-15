/* performance.js - small performance helpers */

(function () {
  // Reduce motion if user prefers it
  const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReduced) {
    // Disable heavy effects if needed
    const fx = document.getElementById("fx");
    if (fx) fx.style.display = "none";
  }

  // Lazy-load images if browser supports it
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("img").forEach((img) => {
      if (!img.hasAttribute("loading")) img.setAttribute("loading", "lazy");
      if (!img.hasAttribute("decoding")) img.setAttribute("decoding", "async");
    });
  });
})();