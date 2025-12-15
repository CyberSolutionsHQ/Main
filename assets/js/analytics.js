/* analytics.js - optional analytics hook */

const ENABLE_ANALYTICS = false; // Set true and add an ID to enable
const ANALYTICS_ID = "";        // e.g. "G-XXXXXXX"

function initAnalytics() {
  if (!ENABLE_ANALYTICS || !ANALYTICS_ID) return;

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  gtag("js", new Date());
  gtag("config", ANALYTICS_ID);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`;
  document.head.appendChild(script);
}

document.addEventListener("DOMContentLoaded", initAnalytics);
