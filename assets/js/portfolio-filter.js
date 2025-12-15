/* portfolio-filter.js - filters portfolio cards by type */

function portfolioFilterInit() {
  const grid = document.querySelector("[data-portfolio]");
  if (!grid) return;

  const buttons = document.querySelectorAll("[data-filter]");
  const cards = grid.querySelectorAll("[data-type]");

  function setActive(btn) {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  }

  function applyFilter(type) {
    cards.forEach(card => {
      const match = type === "all" || card.dataset.type === type;
      card.style.display = match ? "" : "none";
    });
  }

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const type = btn.dataset.filter || "all";
      setActive(btn);
      applyFilter(type);
    });
  });

  // default
  applyFilter("all");
}

document.addEventListener("DOMContentLoaded", portfolioFilterInit);