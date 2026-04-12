# spellandria-www

Official franchise portal for the Spellandria game universe. Built with Astro + Tailwind v4, deployed via Cloudflare Pages.

## Stack
- **Framework:** Astro 5
- **Styles:** Tailwind CSS v4
- **Deployment:** Cloudflare Pages (via `@astrojs/cloudflare` adapter)
- **Future:** Shopify Storefront API integration for the Shop section

## Dev setup

```bash
npm install
npm run dev
```

Open: `http://localhost:4321`

From Mac Mini (accessible over Tailscale at `100.120.163.45:4321`):
```bash
npm run dev -- --host
```

## Build + preview

```bash
npm run build
npm run preview
```

## Deploy to Cloudflare Pages

### First deploy (from Mac Mini):
```bash
npx wrangler pages project create spellandria-www
npx wrangler pages deploy dist
```

### Subsequent deploys:
```bash
npm run build && npx wrangler pages deploy dist
```

Or connect the GitHub repo to Cloudflare Pages for automatic branch deploys.

## Project structure

```
spellandria-astro/
├── public/
│   └── assets/
│       ├── generated/        # AI-generated promotional imagery
│       ├── identity-thumbs/  # Drive-sourced franchise identity art
│       └── logo/             # Spellandria wordmark
├── src/
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── SectionWorld.astro
│   │   ├── SectionNews.astro
│   │   ├── SectionCommunity.astro
│   │   └── SectionShop.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── wrangler.jsonc
└── package.json
```

## Sections
- **Hero** — full-bleed franchise key art, headline, CTAs
- **World** — lore panels, identity art cards, franchise titles
- **News** — featured story + article grid (CMS-ready)
- **Community** — Discord, events, creator programs
- **Shop** — Shopify integration placeholder; ready to wire up

## Shopify integration plan
1. Create a Shopify store and generate a Storefront API access token
2. Add `SHOPIFY_DOMAIN` and `SHOPIFY_STOREFRONT_TOKEN` to `.env`
3. Replace placeholder product tiles in `SectionShop.astro` with a real Storefront API fetch
4. Add product detail pages at `src/pages/shop/[handle].astro`

## News/CMS integration plan
Options (in order of complexity):
- Static: author news posts as Astro content collections (`src/content/news/*.md`)
- Headless CMS: Sanity, Contentful, or Hygraph — fetch at build time
- On-demand: Cloudflare KV or D1 for edge-rendered news (requires `output: 'server'`)

## Domain setup (Cloudflare)
1. Add `spellandria.com` to Cloudflare DNS
2. In Cloudflare Pages, set the custom domain on the `spellandria-www` project
3. Update `astro.config.mjs` `site` to `https://spellandria.com`
