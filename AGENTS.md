# Repository Guidelines

## Project Structure & Module Organization
- Static site lives in `cyber Solutions site/`. HTML pages in that root; shared styles in `assets/css/` (base, layout, components, page-specific folders); scripts in `assets/js/`; images/icons/logos in `assets/images/` and `assets/logo/`; favicons/manifests in `assets/icons/`.
- Legacy reference pages are in `cybersolutionshq.com/` for content inspiration only—do not deploy from there.

## Build, Test, and Development Commands
- Serve locally with any static server; example: `cd "cyber Solutions site" && python -m http.server 5500`.
- No build step; all assets are plain HTML/CSS/JS.
- Optional: run a link checker before shipping if available (e.g., `npx linkinator .`), but it is not required.

## Coding Style & Naming Conventions
- HTML: semantic tags where possible; keep `data-slot` hooks for header/footer injection. Prefer double quotes on attributes.
- CSS: existing variables in `assets/css/variables.css`; respect spacing and gradients already defined; avoid inline styles unless necessary for layout tweaks.
- JS: vanilla modules in `assets/js/`; keep functions small and event-driven; avoid external dependencies. Store config stubs (forms, analytics) near the top of their files.
- Assets: use `assets/logo/logo.svg` (vector) or `logo.png` for raster; favicons from `assets/icons/` as already referenced.

## Testing Guidelines
- No automated test suite. Do quick manual passes: header/footer render (from `main.js`), nav active states, theme toggle, contact form copy/endpoint, and manifest/icon links.
- When adding pages, confirm `loading="lazy"` and `decoding="async"` remain for images (handled in `performance.js`).

## Commit & Pull Request Guidelines
- Use clear, imperative commits (e.g., `Add pricing tiers to services`, `Fix manifest icon paths`); group related file changes.
- PRs should include: summary of changes, testing notes (e.g., “previewed locally via python server”), and any screenshots for visual updates. Link issues/tasks when applicable.

## Security & Configuration Tips
- If enabling the contact form, set `CONTACT_ENDPOINT` in `assets/js/form-handler.js` to your provider (e.g., Formspree) and keep secrets out of the repo.
- If enabling analytics, set `ENABLE_ANALYTICS` and `ANALYTICS_ID` in `assets/js/analytics.js`; avoid committing vendor snippets with keys.
