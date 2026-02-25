export type PlatformIntegration = {
  slug: string;
  name: string;
  category: 'Payments' | 'Delivery Apps';
  summary: string;
  description: string;
  features: string[];
  setup: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

export const platformIntegrations: PlatformIntegration[] = [
  {
    slug: 'stripe',
    name: 'Stripe',
    category: 'Payments',
    summary: 'Card checkout, subscription checkout, and webhook-based payment updates.',
    description:
      'INSEAT supports Stripe checkout sessions, subscription checkout flows, webhook handling, and payment status updates.',
    features: [
      'Checkout session creation for orders and subscriptions',
      'Webhook processing for asynchronous payment updates',
      'Session status endpoints for redirect flows',
      'Stripe Connect onboarding routes for business accounts'
    ],
    setup: [
      { step: 1, title: 'Enable Stripe Provider', description: 'Enable Stripe in restaurant payment settings.' },
      { step: 2, title: 'Connect Credentials', description: 'Complete provider setup from admin payment configuration.' },
      { step: 3, title: 'Publish Checkout', description: 'Use website checkout with Stripe session + webhook confirmation.' }
    ],
    faqs: [
      {
        question: 'Do you support subscription checkout with Stripe?',
        answer: 'Yes. The payment service exposes dedicated subscription checkout and plan catalog endpoints.'
      },
      {
        question: 'How is payment completion confirmed?',
        answer: 'Payment state is confirmed via session status checks and Stripe webhook callbacks.'
      }
    ]
  },
  {
    slug: 'mpgs',
    name: 'MPGS',
    category: 'Payments',
    summary: 'Mastercard gateway support for hosted card checkout and payment verification.',
    description:
      'INSEAT includes MPGS session creation, payment verification, refund flow, and status endpoints for order-linked transactions.',
    features: [
      'Hosted checkout session creation',
      'Payment verification and status polling',
      'Refund endpoint for completed payments',
      'MPGS webhook endpoint support'
    ],
    setup: [
      { step: 1, title: 'Enable MPGS', description: 'Turn on MPGS in payment providers and set primary gateway if needed.' },
      { step: 2, title: 'Save Merchant Config', description: 'Store merchant credentials in secure provider config.' },
      { step: 3, title: 'Verify and Go Live', description: 'Run provider verification and publish checkout.' }
    ],
    faqs: [
      {
        question: 'Can MPGS be used together with other gateways?',
        answer: 'Yes. Multiple gateways can be enabled and one can be set as primary.'
      },
      {
        question: 'Is refund support available?',
        answer: 'Yes. MPGS refund routes are available in the payment service.'
      }
    ]
  },
  {
    slug: 'chapa',
    name: 'Chapa',
    category: 'Payments',
    summary: 'Local checkout with backend verification and webhook callbacks.',
    description:
      'INSEAT includes Chapa payment initialization, callback handling, and payment status verification flows.',
    features: [
      'Chapa initialize payment endpoint',
      'Webhook callback endpoint',
      'Transaction status verification',
      'Region-aware payment method handling'
    ],
    setup: [
      { step: 1, title: 'Enable Chapa', description: 'Enable Chapa in provider configuration for the restaurant.' },
      { step: 2, title: 'Connect API Key', description: 'Save Chapa credentials from admin onboarding.' },
      { step: 3, title: 'Publish Checkout', description: 'Customers can complete payment through Chapa redirect flow.' }
    ],
    faqs: [
      {
        question: 'Does INSEAT verify Chapa transactions server-side?',
        answer: 'Yes. Verification and status checks are handled in backend controllers.'
      },
      {
        question: 'Can Chapa run alongside Telebirr or Stripe?',
        answer: 'Yes. Provider config supports multiple enabled gateways.'
      }
    ]
  },
  {
    slug: 'telebirr',
    name: 'Telebirr',
    category: 'Payments',
    summary: 'Mobile money checkout with availability checks and status polling.',
    description:
      'INSEAT includes Telebirr payment initialization, webhook processing, status checks, cancel flow, and POS retrieval endpoints.',
    features: [
      'Availability endpoint for Telebirr readiness',
      'Checkout URL initialization flow',
      'Webhook + status polling support',
      'POS endpoint for payment retrieval by order'
    ],
    setup: [
      { step: 1, title: 'Enable Telebirr', description: 'Enable Telebirr in payment provider settings.' },
      { step: 2, title: 'Configure Merchant Keys', description: 'Save required merchant credentials in admin onboarding.' },
      { step: 3, title: 'Verify Status Flow', description: 'Use status and webhook callbacks for payment completion.' }
    ],
    faqs: [
      {
        question: 'Can Telebirr be used in POS flow?',
        answer: 'Yes. The payment service exposes Telebirr order retrieval endpoints for POS.'
      },
      {
        question: 'How is payment status confirmed?',
        answer: 'Status is confirmed through webhook callbacks and explicit status queries.'
      }
    ]
  },
  {
    slug: 'apple-pay',
    name: 'Apple Pay',
    category: 'Payments',
    summary: 'Apple Pay merchant validation and authorization endpoints.',
    description:
      'Apple Pay is supported through dedicated merchant validation and authorization routes tied to payment provider configuration.',
    features: [
      'Merchant validation endpoint',
      'Payment authorization endpoint',
      'Provider-level enable/disable in restaurant settings'
    ],
    setup: [
      { step: 1, title: 'Enable Apple Pay', description: 'Turn on Apple Pay under payment providers.' },
      { step: 2, title: 'Upload Merchant Config', description: 'Store merchant certificate/config in secure restaurant settings.' },
      { step: 3, title: 'Run Authorization Test', description: 'Validate merchant and test Apple Pay transaction authorization.' }
    ],
    faqs: [
      {
        question: 'Is Apple Pay managed as a separate provider?',
        answer: 'Yes. It has dedicated provider configuration and service endpoints.'
      },
      {
        question: 'Does Apple Pay require setup in restaurant config?',
        answer: 'Yes. Merchant config and provider enablement are both required.'
      }
    ]
  },
  {
    slug: 'delivery-apps',
    name: 'Delivery Apps (Aggregator)',
    category: 'Delivery Apps',
    summary: 'Integration layer for delivery-app and marketplace channels through aggregator routes.',
    description:
      'INSEAT includes aggregator endpoints for delivery-enabled restaurants and menus, allowing external delivery-app style integrations through a unified API surface.',
    features: [
      'List aggregator-enabled restaurants',
      'Fetch delivery-ready menus for connected restaurants',
      'Read item-level delivery details',
      'Channel-aware menu mode handling (dine-in, takeout, delivery)'
    ],
    setup: [
      { step: 1, title: 'Enable Aggregator Mode', description: 'Turn on aggregator feature flag for the restaurant.' },
      { step: 2, title: 'Prepare Delivery Menu', description: 'Configure menu items/channels for delivery availability.' },
      { step: 3, title: 'Connect Delivery Channel', description: 'Use aggregator endpoints to expose restaurants and menus to connected apps.' }
    ],
    faqs: [
      {
        question: 'Can INSEAT expose menus for delivery channels?',
        answer: 'Yes. Aggregator routes expose delivery-ready restaurant and menu data.'
      },
      {
        question: 'Is this controlled per restaurant?',
        answer: 'Yes. Aggregator support is a per-restaurant feature flag.'
      }
    ]
  }
];

export const platformIntegrationBySlug: Record<string, PlatformIntegration> = platformIntegrations.reduce(
  (acc, integration) => {
    acc[integration.slug] = integration;
    return acc;
  },
  {} as Record<string, PlatformIntegration>
);
