# Jeff Context — SpellRealms WWW

Last updated: 2026-04-12

## What this is
Official franchise portal for the SpellRealms game universe.
Live at: **https://spellrealms.com**

## Stack
- Astro 5 + Tailwind v4
- Cloudflare Pages (`spellandria-www` project)
- Static output (SSR adapter present but output is static)

## Cloudflare
- Account ID: `31395a65bc8e08eb7d7aafd3bdf6aade`
- Project: `spellandria-www`
- Custom domains: `spellrealms.com`, `www.spellrealms.com`
- Pages project URL: `https://spellandria-www.pages.dev`

## GitHub
- Repo: `troyhitch/spellandria-www`
- Default branch: `main`
- Auto-deploy: NOT YET SET UP (currently manual wrangler deploy)

## Deploy command (from Mac Mini)
```bash
export PATH="/opt/homebrew/bin:$PATH"
export CLOUDFLARE_API_TOKEN="cfut_ec3gSqXz2A422ZtmHATpkn6zNQdOs6VHf3ocQLlV8ebd43d8"
export CLOUDFLARE_ACCOUNT_ID="31395a65bc8e08eb7d7aafd3bdf6aade"
cd ~/.openclaw/workspace/projects/spellcast/spellandria-astro
npm run build
npx wrangler@latest pages deploy dist --project-name=spellandria-www --branch=main --commit-dirty=true
```

## Assets
- Identity art (Drive): `/Projects/SpellRealms/_identity/`
- Local assets: `public/assets/`
  - `identity-thumbs/` — Duelcasters, Realms, Spires key art
  - `logo/` — SpellRealms wordmark (SPELLANDRIA_logo-thumb.png)
  - `generated/` — AI-generated promo imagery

## Logo note
Current logo (`SPELLANDRIA_logo-thumb.png`) is a raster PNG (1430×613).
Looks great large but muddy at small sizes. Nav is set to `h-14 max-w-[260px]` as workaround.
Troy needs to export a flat/simplified version from Affinity Designer for small-use.

## Open items
1. Logo: clean small-use export from Affinity
2. Shop: wire Shopify Storefront API into `SectionShop.astro`
3. News: add real content (Astro content collections, or headless CMS)
4. Auto-deploy: connect GitHub repo in Cloudflare Pages dashboard via OAuth
5. Lore: real SpellRealms world content for `SectionWorld.astro`

## Section map
| Component | Section | Status |
|-----------|---------|--------|
| `Nav.astro` | Navigation | done |
| `Hero.astro` | Hero / full-bleed | done |
| `SectionWorld.astro` | World & Lore | placeholder content |
| `SectionNews.astro` | News | placeholder content |
| `SectionCommunity.astro` | Community | placeholder content |
| `SectionShop.astro` | Shop | Shopify scaffold, not wired |
