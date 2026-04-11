# InSeat Launch Distribution Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Turn the April 11, 2026 launch-channel research into an execution-ready distribution pack for InSeat across review sites, directories, SEO pages, and early partner channels.

**Architecture:** This plan uses the research file at `/home/ab/Desktop/work/paperclip/research.md`, cross-checks the live site at `https://inseat.achievengine.com/`, and converts the findings into concrete submission tasks, copy assets, blockers, and sequencing. The output is optimized for operator-facing channels first, then secondary SEO/backlink channels, then partner ecosystems that require technical integration.

**Tech Stack:** Markdown, CSV, Playwright verification, official channel/vendor docs

---

## Current-State Notes

- InSeat positioning confirmed from repo and live site:
  - QR table ordering
  - AI OCR menu import
  - draft/publish menu workflow
  - reservations and availability
  - dynamic pricing and promotions
  - analytics and inventory
  - multi-branch / multi-venue operations
  - payment integrations: Stripe, MPGS, Chapa, Telebirr, Apple Pay
  - delivery-channel aggregator support
- The live homepage on `https://inseat.achievengine.com/` is usable for research, but it is not clean enough for heavy launch traffic yet:
  - Playwright found repeated CORS console errors from Sanity requests.
  - several visible CTAs in the live snapshot resolve to `#`, which is a conversion and vendor-verification risk.
  - the live deployed copy is not identical to the local repo copy, so launch copy should be based on verified product capabilities, not one page version alone.
- User-applied channel exclusions for this execution pass:
  - no Square
  - no Toast
  - no Clover
  - no ALSD
  - no IAVM
  - no paid listings, sponsorships, or annual plans

## Task 1: Priority Review Profiles

### 1. G2

**Action now**

- Search G2 for an existing unclaimed InSeat profile.
- If none exists, create a profile request immediately.
- Use the free package first. Paid G2 should wait until review collection is working.

**Recommended positioning**

- Primary value prop: all-in-one restaurant operations platform
- Secondary value props: QR ordering, reservations, menu management, multi-location control
- Use the closest available category fit G2 approves after review. Likely options are around restaurant POS / restaurant management / online ordering / reservations depending on G2 taxonomy.

**What is ready**

- public site
- request-demo / trial intent
- product logo
- product descriptions
- feature set that can support a category review

**Blockers**

- Need a human with business email access to create or claim the vendor account.
- Need 5 real product screenshots minimum, ideally from actual guest/admin UI, not lifestyle artwork.
- Need the first review list prepared before the profile goes live, otherwise the page will exist without proof.
- Need category confirmation from G2 research/ops team if InSeat does not cleanly fit one category.

**Human must provide**

- company-domain email owner for G2
- approved logo
- 5 UI screenshots
- customer or pilot-user list for the first 10 review asks
- final company/legal name if different from display brand

**Why this is first**

- High buyer intent and strong brand proof.
- Free entry point is available.
- G2 explicitly supports free claimed profiles and free basic review collection.

### 2. Gartner Digital Markets: Capterra / GetApp / Software Advice

**Action now**

- Claim or request the free listing through the vendor flow.
- Treat this as one coordinated profile setup because Gartner Digital Markets uses shared vendor/profile logic across the network.
- Prepare one operator-safe description set that complies with their listing rules.

**Recommended positioning**

- Primary category target: restaurant management / restaurant POS / restaurant operations
- Secondary category target: online ordering / reservations / table management, if supported by the category taxonomy

**What is ready**

- live website with public offer
- demo / contact motion
- product copy
- feature and integration pages

**Blockers**

- The profile copy cannot be written in first person and cannot include CTA phrases, contact details, or hype claims.
- Screenshots must show the real UI. Marketing mockups alone are risky.
- Video, if used, must be English and hosted on YouTube, Vimeo, or Wistia.
- If the product is treated as beta, Gartner Digital Markets requires a working public site plus at least one review collected within the first calendar year.
- Current live-site CTA hygiene should be improved before sending reviewers or vendor reviewers to the page.

**Human must provide**

- business owner for vendor portal access
- final screenshots
- hosted product video URL if video will be included
- first customer review list

**Why this is first**

- Strong operator and SMB software-buyer intent.
- Free listing can be claimed.
- Review volume materially affects visibility.

## Task 2: Secondary Listings To Submit Now

Prioritize only channels that can produce one of these outcomes:

- indexable branded backlink
- operator-facing comparison visibility
- third-party proof page that sales can reference

### Submit now

1. **SaaSWorthy**
   - Why: credible software discovery/review site with POS and business-software category coverage.
   - Status: worth submitting now as a secondary discovery and comparison layer.
   - Blockers:
     - needs vendor account or direct listing workflow
     - needs product copy, logo, pricing stance, and screenshots
   - Human must provide:
     - vendor login owner
     - approved UI screenshots

2. **AlternativeTo**
   - Why: there is active restaurant-software coverage on AlternativeTo, including restaurant POS and management products. It is useful for comparison traffic and branded SERP coverage.
   - Status: submit now.
   - Best framing:
     - “all-in-one restaurant operations and ordering platform”
     - tags around restaurant management, restaurant POS, QR ordering, online ordering, multi-location operations
   - Blockers:
     - needs a community/vendor account
     - needs a product description, screenshots, platforms, pricing model, official site, and alternatives context
   - Human must provide:
     - submitter account
     - shortlist of 3-5 valid comparison products InSeat wants to appear near

3. **SaaSHub**
   - Why: lighter-intent than G2/Capterra, but still useful for backlinks, comparisons, and software discovery.
   - Status: submit now only if the listing can be created or claimed in under 30 minutes.
   - Blockers:
     - account/login likely required
     - lower operator intent than the review marketplaces above
   - Human must provide:
     - account owner
     - product metadata

### Submit after the first review wave, not before

1. **Trustpilot**
   - Better once there is a real review-collection motion and customer-support process.
   - Risk: a thin or unmanaged profile can become a liability.

2. **TrustRadius**
   - Budget-heavy; better later once category fit and customer volume are clearer.

### Skip for now

- generic “100 startup directory” spray-and-pray submission batches
- developer-first directories that do not fit restaurant operators
- any directory that cannot show indexed pages or brand/search proof

## Task 3: Listing Asset Pack

Use this as the canonical source pack for G2, Gartner Digital Markets, SaaSWorthy, SaaSHub, AlternativeTo, Product Hunt, and future partner pages.

### Brand

- Product name: `InSeat`
- Display style: `InSeat`
- Parent company mention:
  - Use only when required.
  - Default listing brand should remain `InSeat`.

### Tagline

**Primary**

`All-in-one restaurant operations and ordering software for modern venues and multi-location operators.`

**Shorter option**

`Run ordering, menus, reservations, and operations from one restaurant platform.`

### Short Description

`InSeat helps restaurants, lounges, and venue operators run ordering, menus, reservations, payments, and day-to-day operations from one platform. Replace disconnected tools with QR ordering, menu control, table and reservation workflows, analytics, and multi-location administration.`

### Directory Description

`InSeat is an all-in-one restaurant operations and ordering platform for restaurants, lounges, hospitality venues, stadium service teams, and multi-location operators. The platform combines QR ordering, menu management, reservations, table and venue control, promotions, analytics, and back-office workflows in one system. Teams can launch digital ordering quickly, update menus centrally, manage reservation and service flows, and operate multiple outlets from a unified admin stack. InSeat also supports payment integrations and delivery-channel enablement for operators that need more than a simple front-end ordering tool.`

### Long Description

`InSeat is built for food and beverage operators that have outgrown disconnected tools. Instead of stitching together separate systems for QR ordering, menu updates, reservation handling, analytics, loyalty, and venue administration, InSeat gives operators one connected platform to manage service and growth.

Restaurants can launch table-linked QR ordering, digitize menus faster with AI OCR import, publish menu changes in a draft-first workflow, and manage reservations and outlet availability from the same system. Multi-location operators can control restaurants, venues, tables, categories, items, modifiers, pricing, and reporting from one admin stack instead of coordinating changes manually across branches.

InSeat also supports dynamic pricing and promotion workflows, built-in analytics and inventory services, and payment-provider flexibility through Stripe, MPGS, Chapa, Telebirr, and Apple Pay. For teams expanding beyond dine-in, the platform includes delivery-channel and website-builder support as part of a broader operations stack.

The result is not just faster ordering. It is tighter menu control, fewer operational handoffs, better visibility into performance, and a cleaner technology stack for restaurants and venues that need to move quickly without losing control.`

### Category Recommendations

Use the strongest truthful fit available per directory, in this order:

1. Restaurant Management Software
2. Restaurant POS Software
3. Online Ordering Software
4. Reservation / Table Management Software
5. Multi-Location Restaurant Software

Do not force “stadium software” as the primary category on software marketplaces unless the directory supports venue / hospitality operations categories and the profile taxonomy clearly fits.

### Supported Platforms

- Web
- iOS
- Android

Only include platform support that the live product team confirms publicly.

### Pricing Stance

- Use `Free trial available` where a clean signup flow exists.
- Use `Custom enterprise pricing for multi-location and venue deployments` where needed.
- Do not over-commit to “free forever” unless that is still the live offer and the public onboarding flow works end-to-end.

### Screenshots Needed

Submitters should gather real UI screenshots in this order:

1. **Guest ordering flow**
   - QR menu open
   - item selection
   - cart / checkout
2. **Menu operations**
   - AI OCR import
   - draft review
   - publish workflow
3. **Reservations and table control**
   - reservation calendar or live seating/availability
4. **Multi-location admin**
   - branch / venue / table management
5. **Analytics and inventory**
   - dashboard with sales or operations insight

Optional sixth screenshot:

6. **Promotions / pricing / loyalty**

**Do not use**

- stock imagery
- lifestyle hero artwork
- screenshots with fake data that looks obviously staged

### Existing Assets To Review

- `/home/ab/Desktop/work/INSEAT/public/MOCKUP-INSEAT.png`
- `/home/ab/Desktop/work/INSEAT/public/preview.png`
- `/home/ab/Desktop/work/INSEAT/public/logo.png`

These may be useful starting points, but each asset still needs human confirmation that it represents real product UI and is acceptable for listing guidelines.

### Demo Video Requirements

Build a 75-90 second demo video in English with this sequence:

1. Problem: restaurant teams are juggling ordering, menu updates, and service ops across too many tools.
2. Product open: InSeat dashboard / outlet selector.
3. Guest flow: QR scan to order.
4. Manager flow: menu update and publish.
5. Operations flow: reservation/table/admin overview.
6. Scale proof: multi-location or multi-venue management.
7. CTA: book a demo / start trial / contact sales.

**Video blocker**

- Needs a clean narrated capture from a real environment, not just animated mockups.

### Founder / Launch Comment

`InSeat was built for operators who are tired of running ordering, menu updates, reservations, and day-to-day service through a patchwork of tools. We focused on one outcome: give restaurants and venue teams one connected system that helps them move faster without losing control. If you run a restaurant, lounge, or multi-location F&B business, we’d rather hear where your current stack breaks than ask for vanity votes.`

### Channel-Specific Angles

**Restaurants**

`Replace disconnected ordering, reservation, and menu tools with one restaurant operations stack.`

**Multi-location**

`Control menus, pricing, reservations, and outlet operations across every location from one admin system.`

**Venues / stadium hospitality**

`Run high-volume concessions and hospitality service with a platform built for ordering, menu control, and operational visibility.`

## Task 4: UTM Structure

Canonical structure:

- `utm_source=` channel brand, lowercase
- `utm_medium=` review, directory, partner, launch, community
- `utm_campaign=` `2026q2_launch`
- `utm_content=` channel or asset variant
- `utm_term=` optional, only for category tests

Examples:

- `?utm_source=g2&utm_medium=review&utm_campaign=2026q2_launch&utm_content=profile`
- `?utm_source=capterra&utm_medium=review&utm_campaign=2026q2_launch&utm_content=profile`
- `?utm_source=saasworthy&utm_medium=directory&utm_campaign=2026q2_launch&utm_content=listing`
- `?utm_source=alternativeto&utm_medium=directory&utm_campaign=2026q2_launch&utm_content=about-page`
- `?utm_source=producthunt&utm_medium=launch&utm_campaign=2026q2_launch&utm_content=launch-day-comment`

Use one dedicated landing route when possible:

- demo intent: `/book-demo`
- trial intent: `/start`
- generic operator page: `/platform`

If those routes do not exist yet, use the strongest current working CTA page, not the homepage.

## Task 5: SEO Cluster Turned Into Concrete Page Tasks

Each page should target one operator problem, one decision moment, and one commercial CTA.

### 1. Restaurant online ordering profit margin

- URL: `/blog/restaurant-online-ordering-profit-margin`
- Primary keyword: `restaurant online ordering profit margin`
- Search intent: commercial-informational
- H1: `How Restaurant Online Ordering Impacts Profit Margin`
- Angle:
  - online ordering does not automatically improve profitability
  - margins improve when operators reduce aggregator dependence, tighten menu control, and streamline service operations
- Required sections:
  - where online ordering margin gets lost
  - first-party vs aggregator margin math
  - operational leaks: wrong orders, slow prep, menu mismatch, payment friction
  - what a consolidated ordering stack changes
  - CTA to demo InSeat
- Needed proof:
  - one margin example model
  - one operator quote or internal benchmark
- Internal links:
  - pricing
  - features
  - multi-location page when available

### 2. QR ordering for full-service restaurants

- URL: `/blog/qr-ordering-full-service-restaurants`
- Primary keyword: `qr ordering for full-service restaurants`
- Search intent: solution evaluation
- H1: `Does QR Ordering Work for Full-Service Restaurants?`
- Angle:
  - position QR ordering as staff leverage and guest-speed control, not staff replacement
- Required sections:
  - when QR ordering helps full-service dining
  - service models that fail
  - how to preserve hospitality while reducing friction
  - hybrid service playbook
  - what to measure after launch
- Needed proof:
  - one guest-flow diagram
  - one example rollout checklist
- CTA:
  - book a walkthrough

### 3. Multi-location menu management software

- URL: `/multi-location-menu-management-software`
- Primary keyword: `multi-location menu management software`
- Search intent: high-intent commercial
- H1: `Multi-Location Menu Management Software for Restaurant Groups`
- Angle:
  - central publishing, location overrides, pricing consistency, staged rollouts
- Required sections:
  - why manual menu coordination breaks at scale
  - central vs local controls
  - publish workflows and approval steps
  - pricing/promotion coordination across outlets
  - CTA for enterprise / custom demo
- Needed proof:
  - screenshots of draft/publish flow
  - outlet-management screenshot

### 4. Stadium concessions ordering platform

- URL: `/stadium-concessions-ordering-platform`
- Primary keyword: `stadium concessions ordering platform`
- Search intent: niche commercial
- H1: `Stadium Concessions Ordering Platform for High-Volume Service`
- Angle:
  - speed, line reduction, mobile ordering, stand/menu control, venue visibility
- Required sections:
  - where stadium/mobile ordering breaks down
  - guest flow for concessions and premium seating
  - stand-level menu and inventory coordination
  - venue reporting and service control
  - deployment questions venue operators ask
- Needed proof:
  - this page should not publish until venue use-case proof is real
  - if there is no live venue case, write it as capability + deployment model, not a fake case study

### 5. Restaurant tech stack consolidation

- URL: `/blog/restaurant-tech-stack-consolidation`
- Primary keyword: `restaurant tech stack consolidation`
- Search intent: mid-to-bottom funnel
- H1: `How to Consolidate a Restaurant Tech Stack Without Breaking Operations`
- Angle:
  - operators are paying for software sprawl with slower service, duplicate admin work, and bad data
- Required sections:
  - common stack sprawl pattern
  - consolidation candidates
  - migration checklist
  - when to keep specialist tools vs unify
  - where InSeat replaces overlap
- Needed proof:
  - comparison table showing overlapping tools/functions

## Task 6: Partner Channels, Realistic Now vs Later

### Realistic now

1. **Restaurant Technology Network (RTN)**
   - Best immediate fit for restaurant-tech credibility and relationships.
   - Does not require product-marketplace integration first.
   - Action:
     - contact RTN about supplier/startup membership
     - ask about workgroups, webinar opportunities, and startup visibility
   - Human must provide:
     - company intro
     - category fit summary
     - budget owner

2. **Targeted venue / stadium direct outreach, without associations**
   - Use direct discovery outreach to venue-ops leads only if stadium or venue GTM is active now.
   - Action:
     - create a one-page venue-specific capability sheet
     - book discovery calls before considering any association spend

### Realistic later, after product/integration proof

1. **Direct venue ecosystem partnerships**
   - Revisit later once venue or stadium proof, case material, and a focused outbound motion exist.
   - Do not spend on ecosystem visibility before the venue use-case, deck, and sales motion are ready.

## Task 7: Exact Human Inputs Needed Before Submissions

### Required this week

- one owner using a company-domain email for each vendor portal
- final approved logo pack
- 5 real UI screenshots
- one English product demo video or agreement to ship without video initially
- final destination URLs for demo and/or trial
- customer review candidate list:
  - name
  - company
  - email
  - product use case
  - permission status

### Strongly recommended before traffic push

- fix live-site CTA destinations that currently resolve to `#`
- fix live-site Sanity/CORS errors
- align deployed-site copy with the current repo’s factual feature positioning

## Task 8: Sequencing

### This week

1. Claim/create G2 profile.
2. Claim Gartner Digital Markets listing.
3. Finalize screenshots, descriptions, and founder comment from this pack.
4. Submit SaaSWorthy, AlternativeTo, and SaaSHub.
5. Fix the live-site CTA and console hygiene before sending reviewers.

### Next 2 weeks

1. Run first 10 review asks.
2. Publish the first 3 SEO pages:
   - online ordering profit margin
   - QR ordering for full-service restaurants
   - multi-location menu management software
3. Contact RTN.
4. Build the venue/stadium one-pager only if that segment is active.

### Later

1. Revisit broader partner ecosystems only when there is real integration ownership, venue proof, and budget.
2. Decide on ALSD / IAVM / trade-show spend only after venue pipeline quality is clear.

## Task 9: Decision Rules

- A review/listing channel is working if it produces at least one of:
  - qualified demo traffic
  - branded SERP coverage
  - indexed profile backlink
  - usable third-party proof for outbound sales
- Pause any low-quality directory after 30 days if it produces no traffic, no indexation, and no proof value.
- Do not buy sponsorships or premium directory spend until base profile conversion is measurable.
