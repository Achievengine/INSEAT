# InSeat Launch Distribution Execution Log

Date: `2026-04-11`

This log records what was completed live, what is still blocked, and exactly what the next human step is for each channel.

## Completed Or Advanced

### Gartner Digital Markets

- Account creation was started from `https://www.capterra.com/vendors/` and advanced through Gartner Digital Markets.
- Business email verification was completed from the IONOS inbox for `abenezer.t@achievengine.com`.
- Account setup was completed with:
  - company: `InSeat`
  - website: `https://inseat.achievengine.com/`
  - company size: `1-10 employees`
  - contact: `Abenezer Teshome`
- Product description page was completed with cleaned InSeat copy.
- Product details page was saved.

Current blocker:

- Gartner redirects back to `Media` until at least one screenshot is uploaded.
- The current Playwright environment would not complete the required file-input handoff for screenshots or logo upload.

Human next step:

1. Log in to the Gartner Digital Markets vendor flow using `abenezer.t@achievengine.com`.
2. Upload at least one real product screenshot with a caption.
3. Ideally upload the logo and complete the rest of the media set before submitting.

### SaaSworthy

- Free listing enquiry was submitted successfully on `https://www.saasworthy.com/offerings`.
- The page returned a success state:
  - `Thank you for your inquiry!`
  - `You will shortly receive an email containing a secure link to access the vendor portal.`
- The SaaSworthy email arrived in the IONOS inbox.
- Email verification was completed.
- Vendor portal access was established.
- Vendor portal contact details were completed enough to access `Software Profile`.
- `Software Profile` was reached and `Add Software` was opened.

Current blocker:

- Entering the `Add Software` form triggered repeated file chooser modal states in Playwright, which prevented further inspection and form automation in this session.

Human next step:

1. Open the SaaSworthy vendor portal from `abenezer.t@achievengine.com`.
2. Continue from `Software Profile` -> `Add Software`.
3. Upload logo and screenshots from the approved asset pack.
4. Paste the listing copy from the implementation plan.

### SaaSHub

- An account registration was completed with `abenuteshome@gmail.com`.
- SaaSHub returned this activation state:
  - `Thanks for registering. If you wish to have your account activated, please contact us and give us this number: 93745.`

Current blocker:

- The account is not fully activated.
- SaaSHub explicitly warns that automated emails from bots and LLMs will be ignored and treated as spam.

Human next step:

1. Use the registered email account to contact SaaSHub manually if you want activation.
2. Reference activation number `93745`.
3. Do not use an automated outreach flow for this step.

## Blocked

### G2

- Business-email magic link login was completed from the IONOS inbox.
- The authenticated session landed on `https://my.g2.com/~/home`.

Current blocker:

- The resulting account flow lands on `Access Denied` instead of a usable vendor dashboard.
- The public `Add Your Product/Service` flow at `https://www.g2.com/products/new` rendered `Please enable JS and disable any ad blocker` in this automated environment.

Human next step:

1. Open G2 in a normal browser profile with `abenezer.t@achievengine.com`.
2. Confirm whether the account needs seller permissions, a different owner email, or a vendor invite.
3. If G2 still blocks the account, open a support ticket before spending more time on automation.

### AlternativeTo

- Email/password signup was advanced with `abenuteshome@gmail.com`.
- Username selection was reached.

Current blocker:

- Final account creation failed with `Error (Captcha was not verified)`.
- Google signup is also disabled for new accounts right now, so the fallback social path is not available.

Human next step:

1. Complete the AlternativeTo signup manually in a normal browser and solve the captcha.
2. Continue with product submission after the account is active.

## Platform And Asset Notes

- Existing public assets available for listing work:
  - `/home/ab/Desktop/work/INSEAT/public/logo.png`
  - `/home/ab/Desktop/work/INSEAT/public/preview.png`
  - `/home/ab/Desktop/work/INSEAT/public/MOCKUP-INSEAT.png`
- Live-site risks still relevant before heavy review traffic:
  - Sanity CORS console errors on the public site
  - some public CTAs resolve to `#`

## Channels Explicitly Excluded In This Pass

- Square
- Toast
- Clover
- ALSD
- IAVM
- any paid listing or sponsorship workflow
