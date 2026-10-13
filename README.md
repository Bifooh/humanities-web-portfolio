# Renaissance Humanities ePortfolio

A static React + TypeScript + Vite portfolio for a BYU-Idaho Humanities course. The site uses anchor navigation instead of client-side routing, so it works cleanly on GitHub Pages.

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

- **Cultural Overview:** the current five-paragraph essay lives in `src/sections/CulturalOverview.tsx`. Update the `paragraphs` and `references` arrays when you revise it.
- **Visual Art:** edit the `artworks` array in `src/data/artworks.ts`. Each item contains the title, artist, date, medium, location, image URL, alt text, short summary, full analysis, citations, and credit. The website shows the summary first and opens the full analysis in an image-led modal.
- **Artwork images:** update each `image` field in `src/data/artworks.ts`. Local files can be placed in `public/images/` and referenced as `/images/your-file.jpg`.
- **Personal Connections:** add or edit entries in `src/data/essays.ts`. Each essay is an object with a title, topic, excerpt, paragraphs, and optional references or image.
- **Sources:** edit the groups in `src/data/sources.ts`.

## GitHub Pages

The included workflow at `.github/workflows/deploy.yml` builds and deploys the site whenever `main` is updated. In the repository’s GitHub settings, set Pages → Build and deployment → Source to **GitHub Actions**. The Vite `base` is automatically set to `/humanities-web-portfolio/` in GitHub Actions and `/` during local development.
