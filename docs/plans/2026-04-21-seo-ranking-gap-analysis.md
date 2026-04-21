# INSEAT SEO Ranking Gap Analysis

Date: 2026-04-21
Site: https://inseat.achievengine.com/
Target query: `inseat`

## Current Status

INSEAT is not invisible. Google Search Console shows the site is receiving impressions and clicks for `inseat`, but it is not consistently ranking first yet.

Observed in GSC:

- Performance: 3 clicks, 102 impressions, 2.9% CTR, average position 6.
- Top query: `inseat` with 3 clicks and 55 impressions.
- Indexed pages: 3.
- Not indexed pages: 11.
- Page indexing issues:
  - Redirect error: 3 pages.
  - Discovered - currently not indexed: 8 pages.

Observed in Google search:

- Google still shows older indexed SEO copy for the homepage in `site:inseat.achievengine.com`.
- Search results for `inseat` are dominated by older existing entities such as InSeat/Relaxor and INSEAD.
- INSEAT Google Business Profile is visible, but the organic website result is not yet dominant.

Observed in Semrush:

- Organic keywords: 0.
- Organic traffic: 0.
- AI visibility: 0.
- Referring domains: 79.
- Backlinks: 133.

Semrush is lagging behind GSC and should not be treated as the source of truth for early indexing. GSC is the direct Google source.

## Technical Fixes Completed Locally

Canonical consistency fixes:

- Updated navbar links from non-trailing-slash URLs to canonical trailing-slash URLs.
- Updated internal React links for features, integrations, integration detail pages, and blog pages.
- Updated waitlist redirect from `/features` to `/features/`.
- Updated blog canonical URLs and structured-data URLs to trailing-slash format.
- Updated sitemap `lastmod` values from `2026-03-08` to `2026-04-21`.

Verification:

- `npm run build` passed.
- Static prerender completed for homepage, features, pricing, integrations, integration details, blog, table management, and reservations.
- SEO injection completed for all key pages.

## Why We Are Not First Yet

The main reason is not one single missing setting. It is a combination of:

- Google has not refreshed the latest homepage title/description yet.
- Most key pages are not indexed yet.
- Google discovered redirecting non-canonical URLs before the trailing-slash cleanup.
- The exact keyword `inseat` already has older competing entities with stronger history.
- INSEAT needs stronger third-party entity confirmation from trusted profiles, directories, and mentions.

## Next Required Actions

Deploy the local SEO fixes.

After deployment:

1. Open Google Search Console Page Indexing.
2. Validate fix for `Redirect error`.
3. Validate fix for `Discovered - currently not indexed`.
4. URL Inspect and request indexing for:
   - `https://inseat.achievengine.com/`
   - `https://inseat.achievengine.com/features/`
   - `https://inseat.achievengine.com/pricing/`
   - `https://inseat.achievengine.com/integrations/`
   - `https://inseat.achievengine.com/table-management/`
   - `https://inseat.achievengine.com/reservations/`
   - `https://inseat.achievengine.com/blog/`

Complete entity and authority work:

- Finish and verify Google Business Profile.
- Add website, description, services, logo, product images, and socials to GBP.
- Complete Product Hunt launch page for INSEAT.
- Create or complete Crunchbase company profile for INSEAT.
- Create Wellfound/AngelList company profile for INSEAT.
- Submit INSEAT to SaaSHub and AlternativeTo.
- Add a public Achievengine page/post announcing INSEAT and linking to `https://inseat.achievengine.com/`.
- Ask pilots, partners, and customers to publish short pages mentioning that they use INSEAT and linking to the homepage.

Do not create Wikidata yet. Wikidata needs independent third-party sources first, otherwise it can be rejected or removed.

## Notes

Google Ads can help visibility and traffic, but it does not directly improve organic rankings.

Connecting Google services inside Semrush improves Semrush reporting only. It does not directly make Google rank the site higher.

Ranking first for `inseat` is possible, but not instant. The fastest practical path is: deploy technical fixes, force recrawl through GSC, then build third-party entity confirmation around the exact INSEAT brand.
