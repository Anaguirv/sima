# Repository Guidelines

## Project Structure & Module Organization
- `src/pages/` holds route entry points (e.g., `src/pages/index.astro`).
- `src/components/` contains reusable UI building blocks (mostly `.astro`).
- `src/layouts/` provides shared layout shells like `Site.astro`.
- `src/content/` stores Markdown content (services, articles, etc.).
- `src/data/` contains JSON data used by pages/components.
- `src/styles/` holds global styles; Tailwind config lives in `tailwind.config.js`.
- Static assets are in `public/` (served as-is) and `src/assets/` (imported).

## Build, Test, and Development Commands
- `npm install`: install dependencies.
- `npm run dev`: run Astro dev server at `http://localhost:4321`.
- `npm run build`: generate production build in `dist/`.
- `npm run preview`: serve the production build locally.
- `npm run astro check`: type-check and validate Astro files (manual, via Astro CLI).

## Coding Style & Naming Conventions
- Indentation: 2 spaces in `.astro`, `.js`, and `.json` files.
- Components use PascalCase filenames (e.g., `TestimonialsSection.astro`).
- Content files are kebab-case (e.g., `inspeccion-senaletica-riesgos.md`).
- Prefer Tailwind utility classes for styling; keep custom CSS in `src/styles/` when needed.
- Use `@/` import alias for `src/` when it improves clarity.

## Testing Guidelines
- No automated test suite is configured.
- Validate changes by running `npm run dev` and smoke-check key pages.
- For build regressions, run `npm run build` and `npm run preview`.

## Commit & Pull Request Guidelines
- History shows short, descriptive messages (often Spanish) with optional prefixes like `mod:`, `add`, `fix:`.
- Keep commits focused; mention the area touched (e.g., `mod: hero responsive`).
- PRs should include a summary, screenshots for UI changes, and reference related issues or client feedback.

## Configuration Tips
- Update content in `src/content/` and `src/data/` before editing component logic.
- When adding new sections, wire them in `src/pages/index.astro` and reuse existing layouts.
