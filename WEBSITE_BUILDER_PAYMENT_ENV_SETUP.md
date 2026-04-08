# INSEAT Website Builder + Payments Env Setup (Web-Researched)

Last updated: February 17, 2026  
Scope: Based on current implementation in `INSEAT-Backend`, `INSEAT-Admin`, `inseat-menu`, and `INSEAT`.

## 1) Direct answer

Yes, you need both:

- `.env` values for platform-level runtime (backend/frontend URLs, Dodo Payments, Chapa, Telebirr runtime keys).
- Restaurant-level provider credentials entered in **INSEAT Admin -> Website Builder -> Payments**.

Important implementation note:

- Current checkout execution for Chapa/Telebirr uses backend env-backed services.
- The Website Builder Payments page stores per-restaurant onboarding credentials/status (connect/verify/status), but those restaurant credentials are not yet the checkout runtime source.

## 2) What to set in each project

### A) `INSEAT-Backend/.env` (required for checkout + subscriptions)

Set these keys in your main backend `.env` (this monorepo runs payment routes through the main backend app):

```env
# Base URLs used to build return/webhook URLs in payment services
FRONTEND_URL=https://menu.yourdomain.com
BACKEND_URL=https://api.yourdomain.com

# Dodo Payments (business subscriptions)
DODO_PAYMENTS_API_KEY=dodo_test_xxx
DODO_PAYMENTS_WEBHOOK_SECRET=whsec_xxx
DODO_PAYMENTS_ENVIRONMENT=test_mode
DODO_PAYMENTS_API_BASE_URL=https://test.dodopayments.com
DODO_PRODUCT_ENTRY_MONTHLY=prod_xxx
DODO_PRODUCT_ENTRY_YEARLY=prod_xxx
DODO_PRODUCT_MID_MONTHLY=prod_xxx
DODO_PRODUCT_MID_YEARLY=prod_xxx

# Chapa (runtime API auth used by checkout/verification)
CHAPA_API_KEY=CHASECK_LIVE-xxx

# Telebirr (runtime API auth/signing used by checkout/verification)
TELEBIRR_FABRIC_APP_ID=xxx
TELEBIRR_APP_SECRET=xxx
TELEBIRR_MERCHANT_APP_ID=xxx
TELEBIRR_MERCHANT_CODE=xxx
TELEBIRR_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----...
TELEBIRR_PUBLIC_KEY=-----BEGIN PUBLIC KEY-----...   # recommended
```

Keys present in examples/docs but not currently read by the active runtime code path:

- `CHAPA_CALLBACK_URL`
- `CHAPA_RETURN_URL`
- `TELEBIRR_ENV`
- `TELEBIRR_NOTIFY_URL`
- `TELEBIRR_REDIRECT_URL`
- `STRIPE_PUBLISHABLE_KEY` (not used by the current backend subscription flow)

### B) `INSEAT-Admin/.env` (required for Website Builder Payments UI)

```env
# Used by app-wide axios config (required)
VITE_API_BASE_URL=https://api.yourdomain.com
VITE_SOCKET_URL=https://api.yourdomain.com

# Used by featureConfigService in Website Builder Payments page
# IMPORTANT: set origin/base URL, NOT ".../api"
VITE_API_URL=https://api.yourdomain.com

# Optional, used for “open storefront preview” links in website-builder pages
VITE_MENU_SITE_URL=https://menu.yourdomain.com
```

### C) `inseat-menu/.env` (required for checkout frontend)

```env
# IMPORTANT: set origin/base URL, NOT ".../api"
VITE_API_BASE_URL=https://api.yourdomain.com

# Recommended explicit values (fallbacks exist, but set these in production)
VITE_AUTH_API_URL=https://api.yourdomain.com/api/auth
VITE_SOCKET_URL=https://api.yourdomain.com
VITE_CUSTOMER_URL=https://menu.yourdomain.com

# Optional (used in a few order API call sites)
VITE_ORDER_API_URL=https://api.yourdomain.com/api/orders
```

### D) `INSEAT/.env` (marketing website project)

This site is not the payment runtime, but if you use backend-fed blog/content and voice assistant:

```env
# For blog/content API calls in INSEAT website
VITE_API_URL=https://api.yourdomain.com/api

# Optional features
VITE_VAPI_PUBLIC_KEY=your_vapi_public_key
```

## 3) What to enter in Website Builder Payments UI (not env)

Go to: `INSEAT-Admin -> Website Builder -> Payments` per restaurant.

- Chapa onboarding fields:
  - `merchantId`
  - `publicKey` and/or `config.secretKey`
- Telebirr onboarding fields:
  - `merchantId`
  - `publicKey`
  - `config.fabricAppId`
  - `config.appSecret`
  - `config.merchantAppId`
  - `config.privateKey`

These fields drive connect/verify/status for each restaurant.

## 4) What to get, from where

1. Dodo Payments:
- Get `DODO_PAYMENTS_API_KEY` from Dodo Payments -> Developers -> API keys.
- Get `DODO_PAYMENTS_WEBHOOK_SECRET` from the Dodo webhook endpoint signing secret.
- Create four subscription products in Dodo:
  - Entry monthly
  - Entry yearly
  - Mid monthly
  - Mid yearly
- Copy those product IDs into the four `DODO_PRODUCT_*` env vars.

2. Chapa:
- Get `CHAPA_API_KEY` from Chapa Dashboard -> API Keys (test/live key visibility and generation).

3. Telebirr (Ethio telecom developer):
- Create/register app and get:
  - Fabric App ID (`X-APP-Key`)
  - App Secret
  - Merchant App ID
  - Merchant Code
  - RSA key pair (private/public)
- Token endpoint in docs/dashboard references:
  - `https://developerportal.ethiotelebirr.et:38443/apiaccess/payment/gateway/payment/v1/token`

4. Deployment URLs:
- Set `FRONTEND_URL` to deployed `inseat-menu` base.
- Set `BACKEND_URL` to deployed `INSEAT-Backend` base.

## 5) Subscription status (from current implementation)

Implemented tiers:

- `entry` -> Bronze Launch -> `$50/month`
- `mid` -> Silver Growth -> `$99/month`
- `custom` -> Custom Enterprise -> contact sales

Subscription checkout endpoint:

- `POST /api/payments/subscriptions/checkout-session` (Dodo Payments, automated tiers)
- `POST /api/payments/subscriptions/contact-sales` (custom tier)
- `GET /api/payments/subscription-plans`

Webhook endpoint:

- `POST /api/payments/dodo/webhook`

Outlet billing behavior:

- Each paid subscription covers one outlet by default.
- Existing legacy businesses are grandfathered to at least their current outlet count.
- When a subscribed business wants another outlet on the same tier, the app increases the Dodo subscription quantity instead of creating a second subscription.

## 6) Quick validation checklist

1. Restart backend after updating `INSEAT-Backend/.env`.
2. In admin Website Builder Payments, connect and verify Chapa and/or Telebirr for a restaurant.
3. In menu checkout, run a Chapa payment and a Telebirr payment and confirm success-page verification.
4. Call `GET /api/payments/subscription-plans` and create a test subscription checkout session.
5. Register `POST /api/payments/dodo/webhook` in Dodo and confirm a subscription test event updates the business subscription.

## 7) Sources used (web search, Feb 17, 2026)

- Dodo Checkout Session API: <https://docs.dodopayments.com/api-reference/checkout-sessions/create>
- Dodo subscription integration guide: <https://docs.dodopayments.com/developer-resources/subscription-integration-guide>
- Dodo webhooks: <https://docs.dodopayments.com/developer-resources/webhooks>
- Dodo seat-based billing: <https://docs.dodopayments.com/features/seat-based-billing>
- Chapa API keys / dashboard: <https://developer.chapa.co/docs/api-keys>
- Chapa accept payments: <https://developer.chapa.co/docs/accept-payments>
- Chapa verify transaction endpoint: <https://developer.chapa.co/api-reference/verify-transaction-1>
- Chapa webhooks and signature (`x-chapa-signature`): <https://developer.chapa.co/docs/webhooks>
- Ethio telecom developer portal: <https://developer.ethiotelecom.et/>
- Telebirr developer portal (token endpoint + credential fields): <https://developerportal.ethiotelebirr.et/>
- Telebirr dashboard snippets (app registration/credentials): <https://developer.ethiotelecom.et/user/dashboard>
