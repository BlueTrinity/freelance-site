# Freelance IT Site

Professional React/Vite portfolio and lead-generation site for an IT freelancer.

## Run locally

```bash
npm install
npm run dev
```

## Build for hosting

```bash
npm run build
```

The production files will be generated in `dist/`.

## Deploy

This project is ready for common static hosts:

- Vercel: import the project, build command `npm run build`, output folder `dist`
- Netlify: build command `npm run build`, publish directory `dist`
- GitHub Pages: build with Vite and publish the `dist` folder

## Customize

Edit your business details in `src/App.jsx`:

- `brand`
- `email`
- `phone`
- `phoneHref`
- `location`

The hero image is stored at `public/assets/hero-workspace.png`.
