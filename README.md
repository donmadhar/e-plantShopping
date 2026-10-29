# e-plantShopping — Paradise Nursery

React shopping cart application for the Skills Network Labs final project.

## Features
- Landing page with exact “Welcome To Paradise Nursery” heading and Get Started button
- Plant catalogue grouped into three categories, with six unique plants per category
- Product thumbnails, names, descriptions, and prices
- Redux Toolkit cart state with quantity updates and removal
- Dynamic cart item count, per-item subtotals, and total price
- About Us page and responsive layout
- GitHub Actions workflow for GitHub Pages deployment

## Run locally
```bash
npm install
npm run dev
```
Production build: `npm run build`.

## GitHub Pages
Push to the `main` branch of a public GitHub repository, then select **Settings → Pages → GitHub Actions**. The workflow builds and deploys the Vite `dist` folder. Plant photographs are loaded from Unsplash and require an internet connection.
