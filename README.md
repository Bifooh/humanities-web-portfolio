# Humanities ePortfolio

A static React + TypeScript + Vite portfolio for a BYU-Idaho Humanities course. Its hash navigation provides separate Home, Early Modern World, 19th Century, Personal Connections, and Sources views without server routing.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The production files are written to `dist/`.

## Where to add final content

- **Early Modern cultural overview:** edit `src/sections/CulturalOverview.tsx`. Cited images appear within the essay.
- **19th-century content:** `src/data/nineteenthCentury.json` contains the two cultural essays, seven artwork analyses, five music analyses, and references imported from the supplied Word document. To re-import after revising that document, run `node scripts/import-nineteenth-century.mjs "/absolute/path/to/document.docx"`.
- **Visual Art:** edit the `artworks` array in `src/data/artworks.ts`. Each item contains the title, artist, date, medium, location, image URL, alt text, short summary, full analysis, citations, and credit. The website shows the summary first and opens the full analysis in an image-led modal.
- **Images:** locally hosted images are in `public/images/`. Keep a visible caption and link to the image’s source page when adding one.
- **Personal Connections:** add or edit entries in `src/data/essays.ts`. Each essay is an object with a title, topic, excerpt, paragraphs, and optional references or image.
- **Sources:** edit the groups in `src/data/sources.ts`.

## GitHub Pages

The included workflow at `.github/workflows/deploy.yml` builds and deploys the site whenever `main` is updated. In the repository’s GitHub settings, set Pages → Build and deployment → Source to **GitHub Actions**. The Vite `base` is automatically set to `/humanities-web-portfolio/` in GitHub Actions and `/` during local development.
