# INSEAT SEO, GSC, And Social Execution Log

Date: 2026-04-15
Owner: Codex + user
Primary site: `https://inseat.achievengine.com/`
Primary X account: `https://x.com/inseat_hq`

## Objective

Improve INSEAT's discoverability for branded search, clean up weak or misleading entity signals, get Google Search Console configured correctly, and establish official social/entity profiles that support brand recognition in search.

## What Triggered This Work

The branded query `inseat` was not returning INSEAT prominently. Search results were dominated by unrelated brands such as INSEAD and unrelated product pages. The goal became:

- strengthen on-site entity signals
- verify and use Google Search Console correctly
- remove confusing or false social/entity references
- deploy the improved metadata
- request indexing for important pages
- create official social profiles to support entity recognition

## Key Decisions

- Use a URL-prefix Google Search Console property for `https://inseat.achievengine.com/` instead of a DNS-only domain property.
- Remove unverified social links instead of leaving placeholders.
- Use stronger structured data for `Organization`, `WebSite`, and `SoftwareApplication`.
- Keep brand name consistently as `INSEAT`.
- Treat off-site entity building as required work, not optional polish.

## Website Changes Made

### Hero CTA

- Updated the homepage "Book a 15-Min Strategy Call" button to open:
  - `https://calendly.com/abenezer-t-achievengine/30min`

### SEO Metadata And Structured Data

Files updated during the SEO pass:

- `scripts/inject-seo.mjs`
- `src/components/SEOHead.tsx`
- `src/pages/LandingPage.tsx`
- `src/components/Footer.tsx`
- `src/components/Hero.tsx`

Changes made:

- strengthened homepage title and description around restaurant operations software
- normalized site name to `INSEAT`
- added stronger Open Graph metadata including `og:site_name` and `og:image`
- added canonical handling
- added Google site verification meta tag
- added or improved JSON-LD for:
  - `Organization`
  - `WebSite`
  - `SoftwareApplication`
- removed fake or unverified social references from structured data and footer links
- removed weak claims that were not clearly verified

### Brand/Entity Cleanup

Unverified references such as placeholder X, LinkedIn, and Facebook URLs were removed because incorrect `sameAs` signals can confuse Google's entity understanding.

## Deployment Work

The repo's `./deploy.sh` was blocked on the server because of untracked files:

- `.env.production`
- `src/config/api.ts`

Because `git pull` could not proceed safely, deployment was handled by building locally and syncing the built output directly to the live web root.

Deployment details:

- built the site locally
- synced `dist/` to the live server path:
  - `/var/www/inseat-portfolio/`
- corrected file permissions after deploy so crawlers could fetch non-HTML assets correctly

## Production Verification

Verified live:

- homepage title updated
- single description tag present
- Google site verification present
- canonical present
- `og:site_name` present
- `og:image` present
- JSON-LD present
- wrong social references removed
- Calendly CTA present

Also verified:

- `robots.txt` returned proper plain text after permission fix
- `sitemap.xml` returned proper XML

## Google Search Console Work

### Property Strategy

Confirmed:

- Domain properties require DNS verification.
- URL-prefix properties can be verified with HTML/meta/GA/GTM methods.

The property used was:

- `https://inseat.achievengine.com/`

### Sitemap Status

After fixing crawlability and permissions:

- sitemap path: `/sitemap.xml`
- status: `Success`
- discovered pages: `13`

### URL Inspection And Indexing Requests

Inspected or checked key pages, including:

- `/`
- `/features`
- `/pricing`
- `/integrations`
- `/table-management`
- `/reservations`

Request indexing was submitted for pages that were not yet clearly indexed or where live testing was required.

Observations:

- some pages were already on Google
- some pages were available to Google but not yet indexed
- indexing requests were accepted, but Google does not guarantee immediate ranking changes

## Search Ranking Findings

Observed branded search behavior:

- exact `inseat` did not consistently show INSEAT high in results
- unrelated entities, especially `INSEAD`, dominated
- `inseat restaurant` produced better but still weak visibility

Conclusion:

- on-page SEO alone is not enough to win the branded query
- off-site entity confirmation and brand mentions are required

## Social And Entity Plan

### X

Official X account worked on:

- `@Inseat0`
- later changed to `@inseat_hq`

Changes completed with Playwright:

- confirmed account login
- confirmed bio was already live
- normalized display name to `INSEAT`
- normalized location to `Sharjah, UAE`
- kept website as `https://inseat.achievengine.com`
- changed professional category from `Hotel Services Company` to `Science & Technology`
- changed handle from `@Inseat0` to `@inseat_hq`

Current X profile text:

`INSEAT is an all-in-one restaurant operating system for smoother service, smarter operations, and better guest experiences.`

### LinkedIn

Existing page identified:

- `https://www.linkedin.com/company/achievengine/`
- `https://www.linkedin.com/showcase/inseat/`

Decision:

- `achievengine` can support the parent company entity
- the pre-existing showcase page `linkedin.com/showcase/inseat/` is the better LinkedIn surface to treat as the main INSEAT page
- the newly created LinkedIn company page is redundant relative to the existing showcase page and should not be treated as the primary `sameAs` target unless you explicitly decide to consolidate there

Update completed later in this execution:

- dedicated LinkedIn Page created for INSEAT
- page admin URL created:
  - `https://www.linkedin.com/company/114394310/admin/dashboard/`
- public slug configured as:
  - `linkedin.com/company/inseat-achievengine`
- profile setup used:
  - name: `INSEAT`
  - website: `https://inseat.achievengine.com`
  - industry: `Software Development`
  - size: `2-10 employees`
  - type: `Privately held`
  - tagline: `All-in-one restaurant operating system for smoother service, smarter operations, and better guest experiences.`

Known limitation:

- LinkedIn logo upload did not complete in this browser/tool flow and still needs to be added manually or in a follow-up browser pass
- the pre-existing showcase page was revisited later and should be considered the primary LinkedIn target moving forward

### Product Hunt

Planned as a launch and authority signal.

Recommended positioning used in this work:

- tagline direction: all-in-one restaurant operating system
- goal: create a credible external reference Google can associate with the product

### Still Needed

Profiles still needed or still useful:

- Facebook Page
- other business/profile listings that allow product/company pages

### Instagram

Completed later in this execution:

- Instagram account created and verified:
  - `https://www.instagram.com/inseat_hq/`
- bio set to:
  - `All-in-one restaurant operating system for smoother service, smarter operations, and better guest experiences. inseat.achievengine.com`
- converted to professional business account
- category selected:
  - `Product/service`

Known limitation:

- Instagram web does not allow editing the website field directly in this flow, so the URL was placed in the bio instead

### Facebook

Attempted during this execution:

- Meta account signup started with `abenuteshome@gmail.com`
- email verification code completed successfully
- Meta escalated to human verification
- user completed the required selfie/appeal step

Current status:

- Facebook account is under review after appeal
- account is not usable until Meta completes review
- Facebook Page creation is blocked until that review clears

## Recommended Messaging Used

### X / Short Bio

`INSEAT is an all-in-one restaurant operating system for smoother service, smarter operations, and better guest experiences.`

### Brand Positioning

Core positioning direction used throughout the SEO work:

- all-in-one restaurant operating system
- restaurant operations software
- faster service
- smarter operations
- better guest experience

## What Still Needs To Be Done

### Immediate

- create official Facebook Page after Meta review clears
- publish a launch/pinned X post
- add real social URLs back into structured data only after those profiles are live

### Search And Authority

- request indexing again only where materially changed
- monitor GSC performance and indexing reports
- earn real mentions/links from:
  - Achievengine
  - pilot restaurants
  - launch platforms
  - partners
  - relevant directories

### Content

- add more pages/posts that reinforce the branded entity and restaurant software positioning
- publish launch/update posts on official channels pointing to the site

## Constraints And Risks

- Google ranking movement for a new or weakly established brand is not immediate
- incorrect social/entity links can hurt more than help
- generic or inaccurate business categories weaken entity clarity
- domain-level authority is still low relative to established competing entities

## Practical Next Step Queue

1. Finish official social accounts with consistent branding.
2. Submit Product Hunt and other reputable listings.
3. Monitor GSC performance for branded queries and indexed pages.

Update on 2026-04-16:

- X post is now live and pinned
- real social `sameAs` links are now live
- homepage organization schema now includes image and Sharjah address
- directory submission pack created for the remaining listing work
## Current Official Social Status

- X live:
  - `https://x.com/inseat_hq`
- Instagram live:
  - `https://www.instagram.com/inseat_hq/`
- LinkedIn live:
  - primary existing showcase page: `https://www.linkedin.com/showcase/inseat/`
  - additional created company page: `https://www.linkedin.com/company/inseat-achievengine/`
- Facebook:
  - blocked pending Meta account review

## Notes On Credentials And Automation

For safety, browser automation should continue from already authenticated sessions where possible. Raw passwords should not be stored in project documentation.

## 2026-04-16 Ranking Alignment

### Objective

Rank INSEAT as high as possible for branded search, especially `inseat`, and increase the likelihood that Google recognizes INSEAT as a distinct entity with richer brand results over time.

### What We Want

- INSEAT to rank on the first page, ideally first, for `inseat`
- Google to associate the official site and official social profiles with INSEAT
- stronger brand/entity recognition so richer Google result features become possible later

### What We Cannot Force

We cannot directly force:

- a number one ranking
- a right-side knowledge panel
- instant replacement of INSEAD in Google results

Those outcomes depend on Google's confidence in the entity and on relative authority signals. What we can control is the strength and consistency of the signals we send.

### Current Official Brand Surfaces

- Website:
  - `https://inseat.achievengine.com/`
- X:
  - `https://x.com/inseat_hq`
- Instagram:
  - `https://www.instagram.com/inseat_hq/`
- LinkedIn:
  - primary page to use: `https://www.linkedin.com/showcase/inseat/`

### Current Blocking Issues

- INSEAD still dominates the branded query because it is a far stronger global entity
- Google still has limited third-party evidence connecting `INSEAT` to the restaurant software brand
- Facebook Page creation is blocked until Meta clears the account review
- LinkedIn showcase page needs a final manual confirmation pass to make sure the best description/tagline/logo are fully published

### What We Already Finished

- added top-level `image` and approved Sharjah business address to the live organization schema
- verified live homepage schema now includes:
  - `image: https://inseat.achievengine.com/og-image.png`
  - `Shams Business Center, Al Messaned, Media City Free Zone, Sharjah, Sharjah, AE`
- created a reusable directory submission pack for Product Hunt, Crunchbase, SaaSHub, AlternativeTo, and similar listings:
  - `docs/plans/2026-04-16-directory-submission-pack.md`
- core technical SEO and structured data
- sitemap/robots fixes
- GSC verification and indexing requests
- X handle changed to `@inseat_hq`
- real official social URLs re-added to live homepage structured data as `sameAs`:
  - `https://x.com/inseat_hq`
  - `https://www.instagram.com/inseat_hq/`
  - `https://www.linkedin.com/showcase/inseat/`
- site rebuilt and deployed after the `sameAs` update
- first official X launch post published from `@inseat_hq`
- Instagram account created and converted to business
- LinkedIn showcase page identified as the primary LinkedIn brand surface

### What Still Remains

#### 1. Publish Official Brand Posts

Minimum required:

- one pinned launch post on X
- one intro post on LinkedIn
- one intro post on Instagram

Each should:

- describe INSEAT the same way
- link to `https://inseat.achievengine.com/`
- reinforce the brand/entity association

Status:

- X intro post is live
- X post is pinned
- LinkedIn and Instagram intro posts still need to be published

#### 2. Build Third-Party Authority

This is the biggest remaining gap.

Priority actions:

- launch on Product Hunt
- create/claim Crunchbase
- create/claim Capterra or equivalent software directory listing
- get partner mentions with links from Achievengine, pilot restaurants, and other relevant partners
- get contextual mentions on trusted sites, not random backlink spam

#### 3. Strengthen The LinkedIn Surface

Use the existing showcase page as primary:

- `https://www.linkedin.com/showcase/inseat/`

Complete:

- logo
- final tagline
- final description/About
- first post

Do not split effort across multiple LinkedIn pages unless there is a clear consolidation decision.

#### 4. Complete Instagram Properly

Already live:

- `https://www.instagram.com/inseat_hq/`

Still needed:

- add branded profile image if not final
- add first branded post
- set dedicated website field from mobile if needed

#### 5. Complete Facebook When Meta Review Clears

When available:

- create the official Facebook Page
- use the same brand description
- add the site URL
- add the Facebook URL into site `sameAs`

#### 6. Run The GSC Monitoring Loop

Track weekly:

- branded query impressions
- homepage performance
- key page indexing
- sitemap health

Priority branded searches to watch:

- `inseat`
- `inseat restaurant`
- `inseat achievengine`
- `inseat qr ordering`

#### 7. Add Supporting Content

Publish or improve pages/content around:

- restaurant operations software
- QR ordering
- table management
- reservations
- guest experience
- loyalty
- payments and operations

Also add one brand-focused page or article clearly explaining what INSEAT is.

### Highest-Leverage Next Actions

If the goal is fastest ranking movement from where we are now, the order is:

1. pin the live X launch post and publish matching intro posts on LinkedIn and Instagram
2. complete Product Hunt and at least one additional high-trust directory
3. get branded partner mentions with direct links
4. request indexing again for the homepage and key pages after the live social/entity updates
5. monitor GSC impressions and indexing for branded queries

### Practical Definition Of Success

Short-term success:

- Google starts associating INSEAT with the official site and social profiles more consistently
- branded impressions rise in GSC

Medium-term success:

- INSEAT appears more reliably on page one for `inseat`
- irrelevant `inseat` results lose relative prominence

Long-term success:

- INSEAT becomes the strongest software/entity result for the branded query
- Google has enough confidence to show richer brand/entity features

### Alignment Summary

The technical SEO foundation is mostly done. The remaining work is not mainly code. It is entity consolidation, publishing, third-party corroboration, and authority building. That is the work that gives INSEAT a real chance to outrank weaker unrelated `inseat` results and eventually earn richer Google brand treatment.
