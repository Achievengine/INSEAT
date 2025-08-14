# Sanity Setup for INSEAT

Follow these steps to provision Sanity and enable content + visual editing for the Vite React site.

## 1) Create a Sanity project
- Go to https://www.sanity.io/manage and create a new project
- Note the `projectId`
- Create dataset named `production` (or your preferred one)

## 2) Local environment
Create `INSEAT/.env` (or `.env.local`) with:

```
VITE_SANITY_PROJECT_ID=<your project id>
VITE_SANITY_DATASET=production
```

## 3) Deploy or run Studio
We scaffolded Studio under `INSEAT/sanity`.

- Local dev: from `INSEAT/sanity` run: `npm i` then `npm run dev`
- Deploy to Sanity managed hosting: `npm run deploy` (optional)

Studio will appear at `/studio` in dev if proxied, or the hosted URL from Sanity if deployed.

If you see “Unknown type: tier”: this was from not registering object types. It is fixed now by exporting `feature` and `tier` in `schemas/index.ts`. If Studio was already running, stop and re-run `npm run dev` to reload schemas.

## 4) Add the initial content types
Inside Studio, create one document for each:

- Type `hero`
  - `title`: string (e.g., "Transform Your Restaurant with QR Code Ordering")
  - `subtitle`: text (one or two sentences)
  - `ctaPrimary` (optional), `ctaSecondary` (optional)
  - `image` (optional)

- Type `pricing`
  - `headline`: string (e.g., "Flexible Pricing Plans")
  - `subheadline`: text
  - `tiers`: array of objects with fields:
    - `id` (e.g., `transaction`, `pro`, `enterprise`)
    - `name`
    - `monthlyFee` (string: e.g., `500` or `Custom`)
    - `transactionFee` (string: e.g., `5` or `Custom`)
    - `recommended` (boolean)
    - `description` (text)
    - `features` (array of { name, included (boolean), addon (boolean) })

Publish the documents.

## 5) CORS origins for local dev and production
In Project Settings → API → CORS Origins add your app origins, e.g.:
- http://localhost:5173
- https://your-domain.com

Enable credentials only if you later add authenticated requests.

## 6) Visual editing (optional, later enhancement)
We ship optional overlays. Enable them by setting in your `INSEAT/.env`:

```
VITE_SANITY_ENABLE_OVERLAYS=true
```

Notes:
- Overlays use `@sanity/client/stega` markers (already used) and `@sanity/overlays` to show edit hints linking to `/studio`.
- Ensure Studio is accessible at `/studio` (local dev or deployed Studio with matching path) for deep-links to work.
- If you hit bundle bloat concerns, keep overlays disabled in production.

## 7) Tokens (if needed)
Public read via CDN is enabled by default. If you create private datasets or need previews:
- Create a read token in Project Settings → API → Tokens
- Do not expose tokens in the client; use a server proxy for private reads

## 8) Deploy notes
- The frontend reads from `VITE_SANITY_PROJECT_ID` and `VITE_SANITY_DATASET`
- No breaking changes required to run: existing UI falls back to built-in content when CMS is empty

That’s it. After you add the content, reload the site and you should see Hero and Pricing populated from Sanity.
