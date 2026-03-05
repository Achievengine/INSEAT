import fs from 'node:fs';
import path from 'node:path';

const DIST_DIR = path.resolve(process.cwd(), 'dist');
const BASE_URL = 'https://inseat.achievengine.com';

const homeSoftwareApplication = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Inseat',
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'RestaurantManagement',
  operatingSystem: 'Web, iOS, Android',
  description:
    'Restaurant waitlist management and table management software with SMS notifications and guest CRM',
  url: 'https://inseat.achievengine.com',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  }
};

const homeOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Inseat',
  url: 'https://inseat.achievengine.com',
  description: 'Restaurant operations platform for waitlist and table management',
  sameAs: [
    'https://www.linkedin.com/company/inseat',
    'https://www.facebook.com/inseat'
  ]
};

const routeSEO = {
  '/': {
    title: 'Inseat — Restaurant Waitlist & Table Management Software',
    description:
      'Inseat helps restaurants manage waitlists, reduce wait times, and improve guest experience. Free digital waitlist app with SMS notifications. Try free today.',
    canonicalPath: '/',
    ogTitle: 'Inseat — Restaurant Waitlist & Table Management Software',
    ogDescription:
      'Inseat helps restaurants manage waitlists, reduce wait times, and improve guest experience.',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    jsonLd: [homeSoftwareApplication, homeOrganization]
  },
  '/features': {
    title: 'Restaurant Features | Inseat',
    description:
      'Explore Inseat features for QR ordering, menu operations, kitchen workflows, reservations, and analytics.',
    canonicalPath: '/features',
    ogType: 'website'
  },
  '/pricing': {
    title: 'Restaurant Pricing Plans | Inseat',
    description:
      'Compare Inseat pricing plans for single and multi-location restaurants with core ordering and operations tools.',
    canonicalPath: '/pricing',
    ogType: 'website'
  },
  '/integrations': {
    title: 'Integrations | Inseat',
    description:
      'Connect Inseat with payment providers and restaurant integrations to streamline your operations stack.',
    canonicalPath: '/integrations',
    ogType: 'website'
  },
  '/integrations/stripe': {
    title: 'Stripe Integration | Inseat',
    description: 'Accept card payments with the Inseat Stripe integration for fast checkout and reconciliation.',
    canonicalPath: '/integrations/stripe',
    ogType: 'article'
  },
  '/integrations/mpgs': {
    title: 'MPGS Integration | Inseat',
    description: 'Use MPGS with Inseat to process secure payments across your restaurant ordering channels.',
    canonicalPath: '/integrations/mpgs',
    ogType: 'article'
  },
  '/integrations/chapa': {
    title: 'Chapa Integration | Inseat',
    description: 'Enable Chapa payments in Inseat for localized checkout and settlement workflows.',
    canonicalPath: '/integrations/chapa',
    ogType: 'article'
  },
  '/integrations/telebirr': {
    title: 'Telebirr Integration | Inseat',
    description: 'Connect Telebirr to Inseat for mobile-first payment acceptance in restaurant operations.',
    canonicalPath: '/integrations/telebirr',
    ogType: 'article'
  },
  '/integrations/apple-pay': {
    title: 'Apple Pay Integration | Inseat',
    description: 'Offer Apple Pay with Inseat to speed up checkout for dine-in and digital ordering flows.',
    canonicalPath: '/integrations/apple-pay',
    ogType: 'article'
  },
  '/integrations/delivery-apps': {
    title: 'Delivery App Integrations | Inseat',
    description: 'Manage delivery channels from Inseat with aggregator-ready integration capabilities.',
    canonicalPath: '/integrations/delivery-apps',
    ogType: 'article'
  },
  '/blog': {
    title: 'Inseat Blog | Restaurant Operations Insights',
    description:
      'Read Inseat blog articles on restaurant waitlist management, table operations, digital ordering, and growth.',
    canonicalPath: '/blog',
    ogType: 'website'
  },
  '/table-management': {
    title: 'Table Management Software | Inseat',
    description:
      'Optimize seating flow, turn times, and floor operations with Inseat table management software.',
    canonicalPath: '/table-management',
    ogType: 'website'
  },
  '/reservations': {
    title: 'Restaurant Reservations Software | Inseat',
    description:
      'Manage bookings, availability, and guest reservations with the Inseat restaurant reservations platform.',
    canonicalPath: '/reservations',
    ogType: 'website'
  }
};

const routeToFile = (route) => {
  if (route === '/') return path.join(DIST_DIR, 'index.html');
  return path.join(DIST_DIR, route.replace(/^\//, ''), 'index.html');
};

const stripSeoTags = (html) =>
  html
    .replace(/<title>[\s\S]*?<\/title>/gi, '')
    .replace(/<meta name="description"[^>]*>/gi, '')
    .replace(/<meta name="robots"[^>]*>/gi, '')
    .replace(/<link rel="canonical"[^>]*>/gi, '')
    .replace(/<meta property="og:[^"]+"[^>]*>/gi, '')
    .replace(/<meta name="twitter:[^"]+"[^>]*>/gi, '')
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/gi, '');

const toAbsoluteUrl = (canonicalPath) =>
  canonicalPath === '/' ? `${BASE_URL}/` : `${BASE_URL}${canonicalPath}`;

const renderSeo = (config) => {
  const canonicalUrl = toAbsoluteUrl(config.canonicalPath);
  const ogTitle = config.ogTitle || config.title;
  const ogDescription = config.ogDescription || config.description;
  const ogType = config.ogType || 'website';
  const twitterCard = config.twitterCard || 'summary_large_image';
  const jsonLdScripts = (config.jsonLd || [])
    .map(
      (schema) =>
        `<script type="application/ld+json">${JSON.stringify(schema)}</script>`
    )
    .join('');

  return [
    `<title>${config.title}</title>`,
    `<meta name="description" content="${config.description}" />`,
    '<meta name="robots" content="index,follow" />',
    `<link rel="canonical" href="${canonicalUrl}" />`,
    `<meta property="og:title" content="${ogTitle}" />`,
    `<meta property="og:description" content="${ogDescription}" />`,
    `<meta property="og:url" content="${canonicalUrl}" />`,
    `<meta property="og:type" content="${ogType}" />`,
    `<meta name="twitter:card" content="${twitterCard}" />`,
    jsonLdScripts
  ].join('');
};

Object.entries(routeSEO).forEach(([route, config]) => {
  const filePath = routeToFile(route);
  if (!fs.existsSync(filePath)) {
    console.warn(`Skipping SEO injection for missing file: ${filePath}`);
    return;
  }

  const html = fs.readFileSync(filePath, 'utf8');
  const cleanHtml = stripSeoTags(html);
  const seo = renderSeo(config);
  const nextHtml = cleanHtml.replace('</head>', `${seo}</head>`);

  fs.writeFileSync(filePath, nextHtml, 'utf8');
  console.log(`Injected SEO tags: ${route}`);
});
