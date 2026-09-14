# Artisan Brew — React + Vite + Tailwind

A React rebuild of the Artisan Brew single-page coffee shop site, split into routed
pages and reusable components.

## Getting started

```bash
npm install
npm run dev       # start dev server
npm run build     # production build
```

## Structure

- `src/pages/` — Home, About, Contact, Orders, Login, Signup (one per route)
- `src/components/` — Header, Footer, Layout, Hero, ProductCard, CategoryFilter,
  ComboDeal, ReviewCard, and `components/orders/*` for the Orders page tabs
- `src/context/ToastContext.jsx` — global toast notification (replaces the old
  vanilla-JS toast singleton)
- `src/data/products.js` — menu items, categories, and testimonials data

## Routing

Uses `react-router-dom` with routes: `/`, `/about`, `/contact`, `/orders`,
`/login`, `/signup`. The old anchor-based "Our Menu" nav link now navigates
home and scrolls to the `#menu` section.

## Styling

Tailwind CSS is configured in `tailwind.config.js` with the same custom color
tokens, spacing, and typography scale as the original design (Material
Design–style color roles like `primary`, `on-surface`, `surface-container`,
etc.). Material Symbols and Plus Jakarta Sans are loaded via Google Fonts in
`src/index.css`.
