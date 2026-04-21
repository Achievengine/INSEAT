# INSEAT Marketing Agent Handoff

Date: 2026-04-20
Owner: INSEAT / Achievengine
Primary site: `https://inseat.achievengine.com/`
Primary brand: `INSEAT`

## Purpose

This document gives the next marketing agent one place to act from. It records the platforms discussed or touched in the prior SEO/social/GSC/Ads work, the current state, safe credential handling, and the exact remaining actions needed to strengthen INSEAT's brand/entity footprint.

## Security And Credentials

Do not store plaintext passwords in this repo or in any public/shared marketing document.

Credential handling:

- Ask the owner for credentials directly or use the team password manager.
- Do not paste passwords into Markdown, Git, Slack, Notion, or task comments.
- If a platform was created with `abenuteshome@gmail.com`, use that mailbox for OTP/recovery unless the owner says otherwise.
- Google Search Console, Google Business Profile, and Google Ads flows were accessed through the logged-in Google account `abmlengineer@gmail.com`.
- If a login asks for a password and no password manager entry exists, ask the owner to reset the password instead of guessing.

Known emails/accounts referenced in the setup:

- Social/signup email requested by owner: `abenuteshome@gmail.com`
- Google account observed in GSC/GBP/Ads: `abmlengineer@gmail.com`
- Business email for public listings: `business.inseat@achievengine.com`
- Support email for public listings: `support@achievengine.com`

Phone numbers to use:

- Primary UAE/global number: `+971 50 731 3961`
- Ethiopia number requested for Google Ads call assets: `+251 94 215 0275`

Do not publish the private password in this file. If another agent needs it, the owner should provide it through a secure channel or reset the account password.

## Current Brand Positioning

Use this brand description going forward:

`INSEAT is the all-in-one guest experience and operations platform for hospitality businesses, helping teams streamline service, simplify operations, and deliver better customer experiences across every touchpoint.`

Short tagline:

`All-in-one guest experience and operations platform for hospitality businesses.`

Short ad-safe variant:

`Inseat Hospitality Platform`

Important positioning rule:

- Do not describe INSEAT as only a restaurant product at the brand/entity level.
- It is acceptable to use restaurant-specific copy on product pages or directories where the category demands it.
- Use hospitality-wide language for homepage, profile bios, ads, directory descriptions, and company/entity profiles.

## Canonical Public Data

- Website: `https://inseat.achievengine.com/`
- Parent company: `Achievengine`
- Founded: `2024`
- Headquarters: `Sharjah, United Arab Emirates`
- Address: `Shams Business Center, Al Messaned, Media City Free Zone, Sharjah, Sharjah, AE`
- Primary X: `https://x.com/inseat_hq`
- Primary Instagram: `https://www.instagram.com/inseat_hq/`
- Primary LinkedIn: `https://www.linkedin.com/showcase/inseat/`
- Additional LinkedIn company page created during setup: `https://www.linkedin.com/company/inseat-achievengine/`
- Facebook: not live yet; Meta account review blocked completion

## Approved Assets

Use these local assets when platforms request logos/images:

- Logo: `/home/ab/Desktop/work/INSEAT/public/logo.png`
- Open Graph image: `/home/ab/Desktop/work/INSEAT/public/og-image.png`
- Product mockup: `/home/ab/Desktop/work/INSEAT/public/MOCKUP-INSEAT.png`
- Hero WebP: `/home/ab/Desktop/work/INSEAT/public/restaurant.webp`

Use these live URLs where a platform accepts image URLs:

- Logo: `https://inseat.achievengine.com/logo.png`
- Open Graph image: `https://inseat.achievengine.com/og-image.png`

## Platforms Discussed Or Touched

### Google Search Console

Status: active.

Account context:

- Accessed through `abmlengineer@gmail.com`.
- URL-prefix property: `https://inseat.achievengine.com/`

Completed:

- URL-prefix property verified.
- Sitemap submitted.
- Sitemap previously showed `Success` with discovered pages.
- Key URLs inspected and indexing requested after canonical/sitemap fixes.
- Pages report was checked and showed `0` not indexed pages and `2` indexed pages at the time of review.

Next actions:

1. Open GSC for `https://inseat.achievengine.com/`.
2. Check `Pages` weekly.
3. Check `Performance` weekly for queries:
   - `inseat`
   - `inseat achievengine`
   - `inseat hospitality`
   - `inseat guest experience`
   - `inseat restaurant`
4. If new pages are deployed, inspect each canonical URL and request indexing.
5. Export query/page performance every Friday and compare branded impressions week over week.

### Google Business Profile

Status: setup started, not verified.

Account context:

- Accessed through `abmlengineer@gmail.com`.

Completed:

- Business name entered: `INSEAT`
- Category entered: `Software company`
- Country: `United Arab Emirates`
- Address entered: `Shams Business Center, Al Messaned, Media City Free Zone, Sharjah, Sharjah, United Arab Emirates`
- Website entered: `https://inseat.achievengine.com/`
- Phone entered during GBP flow: `+971 50 731 3961`
- Google reached verification step.

Verification options shown:

- Phone code to `050 731 3961`
- Email code
- Business video

Next actions:

1. Resume Google Business Profile setup from the logged-in Google account.
2. Complete verification using the method the owner can actually access.
3. After verification, update profile:
   - Description: use the current brand description from this file.
   - Website: `https://inseat.achievengine.com/`
   - Phone: confirm whether to use UAE number or Ethiopia number publicly.
   - Social links: X, Instagram, LinkedIn.
   - Logo: `logo.png`.
   - Cover/image: `og-image.png`.
4. After GBP is live, search Google for `INSEAT` and confirm the profile can appear.
5. Do not create duplicate Google Business Profiles.

### Google Ads

Status: campaign draft started, not completed.

Account context:

- Google Ads account observed: `176-037-0943`
- Email observed in Ads UI: `abmlengineer@gmail.com`

Completed in the draft:

- Ad copy was changed from generic software copy to hospitality positioning.
- Phone country was changed to `Ethiopia`.
- Phone number was entered as `+251942150275` / local validation entry.
- Site-sourced logo and ad image were selected from the URL.

Ad copy used:

- Headline 1: `Inseat Hospitality Platform`
- Headline 2: `Guest Experience Software`
- Headline 3: `Streamline Service Teams`
- Description 1: `Manage service and guest touchpoints in one platform.`
- Description 2: `Simplify hospitality workflows and deliver better customer experiences with Inseat.`

Known blockers:

- Google Ads displayed an ad blocker warning.
- Browser session closed unexpectedly while working through the image dialog.
- Final campaign submission, budget, billing, and tracking setup were not completed.

Next actions:

1. Open Google Ads while ad blockers/extensions are disabled.
2. Resume campaign draft if available.
3. Confirm the ad copy above is still saved.
4. If Google rejects `INSEAT` capitalization in ad text, use `Inseat` in ad copy only. Keep official brand styling as `INSEAT` elsewhere.
5. Use Ethiopia call country if using `+251 94 215 0275`.
6. Confirm call number validation passes before submitting.
7. Choose a conservative test budget first.
8. Do not launch until conversion tracking is installed and tested.

### Google Analytics / Google Tag

Status: not completed; no measurement ID was captured in the prior flow.

Important:

- The site currently did not show an existing `G-...`, `AW-...`, `gtag`, or `googletagmanager` tag when checked.
- Do not invent a measurement ID.

Next actions:

1. Create or locate the GA4 property for INSEAT.
2. Get the Web data stream measurement ID, usually `G-XXXXXXXXXX`.
3. If Google Ads conversion tracking is needed, get the Ads tag/conversion ID, usually `AW-XXXXXXXXXX`.
4. Give the measurement ID and any conversion label to the engineering agent.
5. Engineering should add the tag through the site code, deploy, and verify with Tag Assistant.
6. After verification, link Google Ads and GA4.

### X

Status: live.

Account:

- Public profile: `https://x.com/inseat_hq`
- Handle changed from `@Inseat0` to `@inseat_hq`.

Completed:

- Display name normalized to `INSEAT`.
- Location normalized to `Sharjah, UAE`.
- Website set to `https://inseat.achievengine.com`.
- Category changed from `Hotel Services Company` to `Science & Technology`.
- First X launch post was published and pinned during prior work.

Current bio noted previously:

`INSEAT is an all-in-one restaurant operating system for smoother service, smarter operations, and better guest experiences.`

Next actions:

1. Update bio to current hospitality positioning:
   - `All-in-one guest experience and operations platform for hospitality businesses.`
2. Keep website as `https://inseat.achievengine.com/`.
3. Keep pinned launch post if it still matches positioning; otherwise draft a new pinned post with hospitality-wide language.
4. Post 2-3 times per week:
   - product capability posts
   - hospitality operations tips
   - launch/build updates
   - customer workflow examples
5. Do not spam hashtags.

### Instagram

Status: live.

Account:

- Public profile: `https://www.instagram.com/inseat_hq/`

Completed:

- Account created and verified.
- Converted to professional business account.
- Category selected: `Product/service`.
- Bio was set during prior work.

Known limitation:

- Instagram web did not allow editing the dedicated website field in that flow, so the URL was placed in bio.

Next actions:

1. Update bio to current positioning:
   - `All-in-one guest experience and operations platform for hospitality businesses.`
2. Add website field from mobile app if available:
   - `https://inseat.achievengine.com/`
3. Add logo/profile image if not already final.
4. Publish first 6 grid posts:
   - What is INSEAT?
   - Guest ordering
   - Reservations/service workflows
   - Payments
   - Analytics
   - Hospitality operations control
5. Add Story Highlights:
   - Platform
   - Features
   - Demo
   - Contact

### LinkedIn

Status: existing showcase page live; duplicate company page exists.

Primary page:

- `https://www.linkedin.com/showcase/inseat/`

Additional page created during setup:

- Public: `https://www.linkedin.com/company/inseat-achievengine/`
- Admin URL observed: `https://www.linkedin.com/company/114394310/admin/dashboard/`

Parent company:

- `https://www.linkedin.com/company/achievengine/`

Important prior instruction:

- Do not post on LinkedIn until owner approves.

Next actions:

1. Decide whether the primary LinkedIn entity should remain the Showcase Page or move to the standalone Company Page.
2. Recommendation: use the strongest page that can have the cleanest public identity, logo, About section, and admin control.
3. Update About/tagline to current hospitality positioning.
4. Upload final logo and cover image.
5. Do not post until owner approves.
6. After decision, update website `sameAs` if the primary LinkedIn URL changes.

### Facebook / Meta

Status: blocked.

Account/signup:

- Email used/requested: `abenuteshome@gmail.com`
- Meta account signup was attempted.
- Email verification code was completed.
- Meta escalated to human review/appeal.
- User completed selfie/appeal step.

Current status from prior screenshot:

- Account was under review after appeal.
- Facebook account/page was not usable.

Next actions:

1. Check Meta/Facebook review status.
2. If account is restored, create official Facebook Page:
   - Page name: `INSEAT`
   - Category: `Software Company` or closest hospitality software category.
   - Website: `https://inseat.achievengine.com/`
   - Description: use current brand description.
3. Add logo and cover image.
4. After the public Facebook Page is live, send the URL to engineering to add to `sameAs`.
5. Do not add Facebook to website schema before the page is live.

### Product Hunt

Status: discussed and planned; user was submitting separately.

Next actions:

1. Confirm whether Product Hunt launch was submitted.
2. Use this positioning:
   - Tagline: `All-in-one guest experience and operations platform for hospitality businesses.`
   - Short description: use the canonical short description above.
3. Add website:
   - `https://inseat.achievengine.com/?utm_source=producthunt&utm_medium=launch&utm_campaign=2026q2_launch&utm_content=profile`
4. Add logo and product images.
5. After Product Hunt page is public, send URL to engineering for possible `sameAs` or external reference list.
6. Promote only after owner approves timing.

### Crunchbase

Status: attempted, not completed.

What happened:

- Crunchbase was opened.
- Account creation/claim flow required authentication.
- Google login did not complete cleanly in the browser session.

Next actions:

1. Create or claim Crunchbase profile for `INSEAT`.
2. If Crunchbase requires company identity, use:
   - Name: `INSEAT`
   - Parent/owner: `Achievengine`
   - Website: `https://inseat.achievengine.com/`
   - Headquarters: `Sharjah, United Arab Emirates`
   - Founded: `2024`
   - Category: `Hospitality`, `SaaS`, `Software`, `Guest Experience`, or closest available.
3. Add social links:
   - X
   - Instagram
   - LinkedIn
4. Use the current brand description.
5. After public profile is live, send URL to engineering to add to `sameAs`.

### Wellfound / AngelList

Status: discussed as recommended; not created in prior work.

Next actions:

1. Create a company profile if INSEAT is eligible.
2. Use `INSEAT` as company/product name.
3. Use current hospitality positioning.
4. Add website and social links.
5. Add logo.
6. Send public profile URL back to engineering/SEO owner.

### SaaSHub

Status: recommended in directory pack; not created in prior work.

Next actions:

1. Submit INSEAT to SaaSHub.
2. Use UTM URL:
   - `https://inseat.achievengine.com/?utm_source=saashub&utm_medium=directory&utm_campaign=2026q2_launch&utm_content=profile`
3. Use category:
   - `Hospitality Operations Software` if available.
   - Otherwise `Restaurant Management Software` or closest SaaS category.
4. Add logo, description, and official socials.

### AlternativeTo

Status: recommended in directory pack; not created in prior work.

Next actions:

1. Submit INSEAT to AlternativeTo.
2. Use UTM URL:
   - `https://inseat.achievengine.com/?utm_source=alternativeto&utm_medium=directory&utm_campaign=2026q2_launch&utm_content=profile`
3. Choose categories around hospitality operations, ordering, reservations, or business software.
4. Add screenshots/assets.

### Capterra / G2

Status: recommended only; not created in prior work.

Next actions:

1. Evaluate whether INSEAT meets review/listing requirements.
2. Avoid fake reviews.
3. If eligible, submit with hospitality operations positioning.
4. Prepare customer references before review collection.

### Wikidata

Status: discussed as possible but intentionally not created.

Important caution:

- Do not create a weak or spam-like Wikidata item before independent references exist.
- Wikidata should only be created if INSEAT has enough independent reliable sources, not just owned profiles.

Next actions:

1. First create independent profiles/listings:
   - Product Hunt
   - Crunchbase
   - Wellfound
   - reputable directories
   - partner/customer mentions
2. Only after those exist, evaluate whether Wikidata notability is defensible.
3. If creating Wikidata, cite independent sources and include:
   - instance of: software company or software product, depending on fit
   - official website
   - country: UAE
   - parent organization: Achievengine if appropriate
   - founding date: 2024

## Website SEO State

Completed:

- Homepage title, meta description, Open Graph, and schema updated to hospitality/guest-experience positioning.
- Organization schema includes:
   - official social profiles
   - Sharjah address
   - logo
   - image
- SoftwareApplication schema uses `Hospitality Operations Software`.
- BreadcrumbList schema exists on key interior pages.
- `og-image.png` verified as `1200x630`.
- Hero image optimized from PNG to WebP.
- Sitemap/canonical trailing slash issue was fixed previously.

Open website actions:

1. Add GA4/Google Ads tag after the measurement ID/conversion ID is available.
2. If a new social/entity profile becomes live, update `sameAs`.
3. Continue improving PageSpeed by reducing JavaScript/main-thread work.
4. Keep product-specific pages specific, but keep brand/entity copy hospitality-wide.

## Immediate Priority Order

1. Finish Google Business Profile verification.
2. Finish Google Ads draft only after tracking is installed.
3. Create/claim Crunchbase.
4. Confirm Product Hunt status.
5. Update X and Instagram bios to hospitality-wide positioning.
6. Decide LinkedIn primary page: Showcase Page vs standalone Company Page.
7. Create SaaSHub and AlternativeTo listings.
8. Revisit Facebook after Meta review clears.
9. Consider Wikidata only after enough independent references exist.

## UTM Rules

Use this pattern for directory/listing URLs:

`https://inseat.achievengine.com/?utm_source=<platform>&utm_medium=directory&utm_campaign=2026q2_launch&utm_content=profile`

Examples:

- `https://inseat.achievengine.com/?utm_source=crunchbase&utm_medium=directory&utm_campaign=2026q2_launch&utm_content=profile`
- `https://inseat.achievengine.com/?utm_source=producthunt&utm_medium=launch&utm_campaign=2026q2_launch&utm_content=profile`
- `https://inseat.achievengine.com/?utm_source=saashub&utm_medium=directory&utm_campaign=2026q2_launch&utm_content=profile`
- `https://inseat.achievengine.com/?utm_source=alternativeto&utm_medium=directory&utm_campaign=2026q2_launch&utm_content=profile`

## Copy Bank

### One-Line Bio

`All-in-one guest experience and operations platform for hospitality businesses.`

### Short Description

`INSEAT helps hospitality teams streamline service, simplify operations, and deliver better customer experiences across every touchpoint.`

### Medium Description

`INSEAT is an all-in-one guest experience and operations platform for hospitality businesses, including restaurants, lounges, hotels, venues, and multi-location operators. Teams can run guest ordering, menu management, table and reservation workflows, payments, loyalty, analytics, and service operations from one system instead of stitching together disconnected tools.`

### Google Ads Headlines

- `Inseat Hospitality Platform`
- `Guest Experience Software`
- `Streamline Service Teams`
- `Simplify Hospitality Ops`
- `Run Service From One Place`

### Google Ads Descriptions

- `Manage service and guest touchpoints in one platform.`
- `Simplify hospitality workflows and deliver better customer experiences with Inseat.`
- `Streamline menus, ordering, reservations, payments, loyalty, and analytics.`

## Do Not Do

- Do not publish LinkedIn posts unless the owner approves.
- Do not add Facebook to website `sameAs` until the Facebook Page is live.
- Do not create fake reviews.
- Do not buy spam backlinks.
- Do not create Wikidata without independent sources.
- Do not store passwords in docs or Git.
- Do not describe the brand as restaurant-only on company/entity profiles.

