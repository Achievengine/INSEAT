# INSEAT SEO Execution Status

Date: 2026-04-24
Site: https://inseat.achievengine.com/
Target query: `inseat`
Owner context: INSEAT / Achievengine

## Current Reality

INSEAT is not ranking on page 1 for the exact Google query `inseat` yet.

A Playwright check on Google Search with `q=inseat&pws=0&gl=us&hl=en` on 2026-04-24 showed page 1 is still dominated by:

- Relaxor / InSeat Solutions
- Liftchair.com InSeat product/category pages
- Amazon InSeat chair-control product pages
- INSEAD
- LinkedIn for the unrelated INSEAT Solutions entity

Our site did not appear on page 1 in that check.

This is not because one Google setting is missing. The main problems are:

- Google still has stronger history and entity confidence for older unrelated `InSeat` and `INSEAD` entities.
- GSC showed only a small number of INSEAT pages indexed before today's work.
- Several sitemap URLs were only `Discovered - currently not indexed`.
- Google's crawled copies of some pages were stale and showed older metadata from before the 2026-04-24 SEO deployment.
- Search Console and Google Business Profile help discovery and entity confirmation, but they do not guarantee ranking.

## Completed Engineering Work

Commit pushed:

- `009d553 improve INSEAT hospitality SEO signals`

Deployment completed:

- Server: `administrator@209.46.120.80`
- Path: `Desktop/Project/INSEAT`
- Command: `./deploy.sh`
- Deploy result: successful
- Live web root updated: `/var/www/inseat-portfolio`

Verification after deploy:

- Live homepage returned HTTP 200.
- Live title is `INSEAT — Hospitality Guest Experience & Operations Platform`.
- Live description uses hospitality-wide positioning.
- Live canonical is `https://inseat.achievengine.com/`.
- Live HTML includes the Sharjah address.
- Live HTML includes `https://x.com/inseat_hq`.
- Live sitemap `lastmod` values are `2026-04-24`.
- Local `npm run lint` passed.
- Local `npm run build` passed.

## Completed On-Site SEO Changes

The deployed SEO pass did the following:

- Repositioned INSEAT as a hospitality-wide guest experience and operations platform, not only a restaurant tool.
- Added stronger homepage title and meta description.
- Added/updated Organization, WebSite, SoftwareApplication, FAQ, Breadcrumb, and LocalBusiness/entity signals.
- Added the business address:
  `Shams Business Center, Al Messaned, Media City Free Zone, Sharjah, Sharjah, AE`
- Added verified social/entity links where available.
- Removed fake or unverified sameAs/social links.
- Updated canonical URLs and sitemap `lastmod`.
- Kept canonical trailing-slash URLs in sitemap.
- Fixed lint/type issues created during SEO edits.

## GSC Status Checked On 2026-04-24

Google Search Console account used:

- `abmlengineer@gmail.com`

Property:

- `https://inseat.achievengine.com/`

Overview observed before the final indexing pass:

- 4 total web search clicks.
- Homepage impressions up 219%.
- 3 indexed pages.
- 14 not indexed pages.
- HTTPS report: 2 HTTPS URLs, 0 non-HTTPS URLs.
- Breadcrumbs: 2 valid.
- FAQ: 2 valid.

Page indexing reasons observed:

- `Crawled - currently not indexed`: 1
- `Redirect error`: 3
- `Discovered - currently not indexed`: 10

Sitemap:

- `/sitemap.xml`
- Submitted again on 2026-04-24.
- Last read by Google on 2026-04-24.
- Status: Success.
- Discovered pages: 13.

## URL Inspection / Indexing Requests

Requested indexing successfully on 2026-04-24:

- `https://inseat.achievengine.com/`
- `https://inseat.achievengine.com/features/`
- `https://inseat.achievengine.com/pricing/`
- `https://inseat.achievengine.com/integrations/`
- `https://inseat.achievengine.com/table-management/`
- `https://inseat.achievengine.com/reservations/`
- `https://inseat.achievengine.com/blog/`
- `https://inseat.achievengine.com/integrations/stripe/`
- `https://inseat.achievengine.com/integrations/mpgs/`
- `https://inseat.achievengine.com/integrations/chapa/`
- `https://inseat.achievengine.com/integrations/telebirr/`

Already indexed when inspected:

- `https://inseat.achievengine.com/features/`
- `https://inseat.achievengine.com/pricing/`
- `https://inseat.achievengine.com/integrations/`

Not indexed when inspected, but indexing was requested:

- `https://inseat.achievengine.com/table-management/`
- `https://inseat.achievengine.com/reservations/`
- `https://inseat.achievengine.com/blog/`
- `https://inseat.achievengine.com/integrations/stripe/`
- `https://inseat.achievengine.com/integrations/mpgs/`
- `https://inseat.achievengine.com/integrations/chapa/`
- `https://inseat.achievengine.com/integrations/telebirr/`

Blocked by GSC daily quota:

- `https://inseat.achievengine.com/integrations/apple-pay/`
- `https://inseat.achievengine.com/integrations/delivery-apps/`

The quota error appeared on `apple-pay/`:

`Quota exceeded. Sorry, we couldn't process this request because you've exceeded your daily quota. Please try submitting this again tomorrow.`

## Why Ranking Has Not Changed Yet

Ranking will not change immediately after deploy or request indexing.

As of 2026-04-24:

- Google has accepted the sitemap and many indexing requests.
- Some pages are still not indexed.
- Some crawled copies are stale.
- The exact query `inseat` has established competing entities.
- Google still needs to recrawl, process, index, and then evaluate the site against those older entities.

The fastest realistic path is:

1. Get every sitemap URL indexed.
2. Make Google recrawl the updated metadata.
3. Strengthen entity consistency across socials, GBP, Product Hunt, directories, and parent-company mentions.
4. Publish/use third-party pages that explicitly mention and link to INSEAT.
5. Build branded searches and clicks for exact `INSEAT`.

## Remaining Work

Do tomorrow after the GSC quota resets:

- Request indexing for `https://inseat.achievengine.com/integrations/apple-pay/`.
- Request indexing for `https://inseat.achievengine.com/integrations/delivery-apps/`.
- Re-check Pages report for Indexed vs Not indexed counts.
- If redirect errors remain, inspect the affected URLs and confirm they point to canonical trailing-slash destinations.

Do within the next 7 days:

- Verify Google Business Profile if not already verified.
- Add website, logo, cover image, description, services, social links, and business address to GBP.
- Add the same canonical brand data to Product Hunt.
- Add or complete Crunchbase, Wellfound/AngelList, SaaSHub, AlternativeTo, and relevant hospitality/software directories.
- Publish an Achievengine page or blog post announcing INSEAT and linking to the homepage.
- Ask partners/customers/pilots to publish a short mention linking to `https://inseat.achievengine.com/`.
- Keep all public profiles using the same exact brand language and URL.

Do not do yet:

- Do not create Wikidata until INSEAT has independent third-party sources.
- Do not create duplicate Google Business Profiles.
- Do not add unverified social URLs into sameAs.
- Do not expect Google Ads to improve organic ranking directly.

## Canonical Brand Data

Brand:

- `INSEAT`

Description:

- `INSEAT is the all-in-one guest experience and operations platform for hospitality businesses, helping teams streamline service, simplify operations, and deliver better customer experiences across every touchpoint.`

Website:

- `https://inseat.achievengine.com/`

Address:

- `Shams Business Center, Al Messaned, Media City Free Zone, Sharjah, Sharjah, AE`

Social/entity URLs:

- X: `https://x.com/inseat_hq`
- Instagram: `https://www.instagram.com/inseat_hq/`
- LinkedIn showcase: `https://www.linkedin.com/showcase/inseat/`
- LinkedIn company page: `https://www.linkedin.com/company/inseat-achievengine/`

Public emails:

- `business.inseat@achievengine.com`
- `support@achievengine.com`

Public phone options:

- UAE/global: `+971 50 731 3961`
- Ethiopia: `+251 94 215 0275`

## Measurement Rules

Check daily for the next week:

- Google query: `inseat`
- Google query: `inseat achievengine`
- GSC Performance query: `inseat`
- GSC Pages: indexed/not indexed count
- GSC Sitemap: success and discovered pages

Success criteria:

- Homepage appears on page 1 for `inseat`.
- Homepage ranks top 3 for `inseat achievengine`.
- GSC shows all 13 sitemap URLs indexed or at least crawled with no technical blockers.
- Google shows current Apr 24 title/description instead of stale restaurant-only metadata.

