# Personal Portfolio

My portfolio site, built with React, TypeScript, Vite, and Tailwind CSS.
It includes projects, experience, skills, interests, and contact links.
Framer Motion and Lenis provide the scroll animations.

[View the site](https://llpranjal.github.io/Personal-Portfolio/)

## Run locally

```bash
npm ci
npm run dev
```

Open `http://localhost:5173`.

- `npm run build`: production build.
- `npm run preview`: preview the build.
- `npm run lint`: ESLint checks.

## Editing

Content lives in `src/data/portfolio.ts`. Section components live in
`src/components`, and shared types live in `src/types.ts`.
The existing GitHub Actions workflow builds and deploys pushes to `main` to
GitHub Pages.
