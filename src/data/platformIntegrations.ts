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
      'Session status tracking for redirect flows',
      'Stripe Connect onboarding for business accounts'
    ],
    setup: [
      { step: 1, title: 'Enable Stripe Provider', description: 'Enable Stripe in restaurant payment settings.' },
      { step: 2, title: 'Connect Credentials', description: 'Complete provider setup from admin payment configuration.' },
      { step: 3, title: 'Publish Checkout', description: 'Use website checkout with Stripe session + webhook confirmation.' }
    ],
    faqs: [
      {
        question: 'Do you support subscription checkout with Stripe?',
        answer: 'Yes. Subscription checkout and plan catalog support are both available.'
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
      'INSEAT includes MPGS session creation, payment verification, refund flow, and status tracking for order-linked transactions.',
    features: [
      'Hosted checkout session creation',
      'Payment verification and status polling',
      'Refund flow for completed payments',
      'MPGS webhook support'
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
        answer: 'Yes. MPGS refund handling is supported.'
      }
    ]
  },
  {
    slug: 'chapa',
    name: 'Chapa',
    category: 'Payments',
    summary: 'Local checkout with secure verification and webhook callbacks.',
    description:
      'INSEAT includes Chapa payment initialization, callback handling, and payment status verification flows.',
    features: [
      'Chapa payment initialization flow',
      'Webhook callback handling',
      'Transaction status verification',
      'Region-aware payment method handling'
    ],
    setup: [
      { step: 1, title: 'Enable Chapa', description: 'Enable Chapa in provider configuration for the restaurant.' },
      { step: 2, title: 'Connect Provider Key', description: 'Save Chapa credentials from admin onboarding.' },
      { step: 3, title: 'Publish Checkout', description: 'Customers can complete payment through Chapa redirect flow.' }
    ],
    faqs: [
      {
        question: 'Does INSEAT verify Chapa transactions server-side?',
        answer: 'Yes. Verification and status checks are handled securely by INSEAT payment services.'
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
      'INSEAT includes Telebirr payment initialization, webhook processing, status checks, cancel flow, and POS retrieval support.',
    features: [
      'Availability check for Telebirr readiness',
      'Checkout URL initialization flow',
      'Webhook + status polling support',
      'POS retrieval support for payment lookup by order'
    ],
    setup: [
      { step: 1, title: 'Enable Telebirr', description: 'Enable Telebirr in payment provider settings.' },
      { step: 2, title: 'Configure Merchant Keys', description: 'Save required merchant credentials in admin onboarding.' },
      { step: 3, title: 'Verify Status Flow', description: 'Use status and webhook callbacks for payment completion.' }
    ],
    faqs: [
      {
        question: 'Can Telebirr be used in POS flow?',
        answer: 'Yes. Telebirr supports POS payment retrieval by order.'
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
    summary: 'Apple Pay merchant validation and authorization support.',
    description:
      'Apple Pay is supported through dedicated merchant validation and authorization workflows tied to payment provider configuration.',
    features: [
      'Merchant validation support',
      'Payment authorization support',
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
        answer: 'Yes. It has dedicated provider configuration and service support.'
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
    summary: 'Integration layer for delivery-app and marketplace channels through aggregator partners.',
    description:
      'INSEAT includes aggregator integration support for delivery-enabled restaurants and menus, allowing external delivery-app style integrations through a unified partner flow.',
    features: [
      'List aggregator-enabled restaurants',
      'Fetch delivery-ready menus for connected restaurants',
      'Read item-level delivery details',
      'Channel-aware menu mode handling (dine-in, takeout, delivery)'
    ],
    setup: [
      { step: 1, title: 'Enable Aggregator Mode', description: 'Turn on aggregator feature flag for the restaurant.' },
      { step: 2, title: 'Prepare Delivery Menu', description: 'Configure menu items/channels for delivery availability.' },
      { step: 3, title: 'Connect Delivery Channel', description: 'Connect aggregator partners to share restaurants and menus with delivery channels.' }
    ],
    faqs: [
      {
        question: 'Can INSEAT expose menus for delivery channels?',
        answer: 'Yes. Delivery-ready restaurant and menu data can be shared with connected channels.'
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
