# Pranjal Kattel's portfolio

Selected projects, experience, and contact details.

Live site: [llpranjal.github.io/Personal-Portfolio](https://llpranjal.github.io/Personal-Portfolio/)

## How it's organized

Each featured project shows the result recorded in its own README as a small bar chart, along with the limits of that measurement. The figures are copied from those READMEs, so update `src/data.ts` when a README changes.

- `src/data.ts`: all site content
- `src/App.tsx`: page layout and the result charts
- `src/index.css`: styles, including light and dark themes

## Stack

React 18, TypeScript, and Vite, with plain CSS and Instrument Sans from Google Fonts. The site deploys to GitHub Pages through `.github/workflows/deploy.yml` on every push to `main`.

## Local development

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev`: start the development server
- `npm run build`: create a production build in `dist`
- `npm run preview`: serve the production build
- `npm run lint`: run ESLint
