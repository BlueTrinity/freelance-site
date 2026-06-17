# Freelance IT Site

A bilingual (FR/EN) React + Vite portfolio and lead-generation site for an IT
freelancer. Single-page, no backend — the contact flow builds a pre-filled
`mailto:` brief.

## Run locally

```bash
npm install
npm run dev
```

## Build for hosting

```bash
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
```

## Customize

All copy lives in `src/App.jsx`:

- **`profile`** — `brand` and `email` (used in the header, contact card,
  footer, JSON-LD and the brief `mailto:`).
- **`content.fr` / `content.en`** — every translatable string, including
  `location`, `availability`, services, offers, FAQ and SEO metadata. Add a
  language by adding a key here and to `languageCodes`.

Visual design is driven by CSS custom properties at the top of
`src/styles.css` (the "Studio" theme: chalk paper, graphite ink, evergreen
accent). The favicon is `public/favicon.svg`.

## Deploy

Static output in `dist/` works on any static host:

- **GitHub Pages** — automated via `.github/workflows/deploy.yml` on push to
  `main`. `vite.config.js` uses `base: "./"` so relative asset paths work under
  a project subpath.
- **Vercel / Netlify** — build command `npm run build`, output/publish `dist`.

### Docker

A multi-stage `Dockerfile` builds the site and serves it with nginx
(`nginx.conf` adds gzip, long-lived caching for hashed assets, and security
headers):

```bash
docker build -t freelance-site .
docker run -p 8080:80 freelance-site
```
