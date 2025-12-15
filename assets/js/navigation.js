/* navigation.js - lightweight nav behavior */

function navEnhance() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  // Add subtle border glow when scrolling
  const onScroll = () => {
    if (window.scrollY > 6) {
      header.style.borderBottomColor = "rgba(79,209,255,0.22)";
      header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.25)";
    } else {
      header.style.borderBottomColor = "rgba(255,255,255,0.08)";
      header.style.boxShadow = "none";
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

document.addEventListener("DOMContentLoaded", navEnhance);