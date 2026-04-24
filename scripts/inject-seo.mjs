import fs from 'node:fs';
import path from 'node:path';

const DIST_DIR = path.resolve(process.cwd(), 'dist');
const BASE_URL = 'https://inseat.achievengine.com';
const GOOGLE_SITE_VERIFICATION = 'FBkmjKh1YoIOdoj8nBZSTzR6wtM0xcDY6s5XI3NadY4';
const BRAND_NAME = 'INSEAT';
const BRAND_ALTERNATE_NAMES = ['Inseat', 'INSEAT Hospitality Platform', 'INSEAT Guest Experience Platform'];
const LOGO_URL = `${BASE_URL}/logo.png`;
const OG_IMAGE_URL = `${BASE_URL}/og-image.png`;
const BUSINESS_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: 'Shams Business Center, Al Messaned, Media City Free Zone',
  addressLocality: 'Sharjah',
  addressRegion: 'Sharjah',
  addressCountry: 'AE'
};
const OFFICIAL_SOCIAL_URLS = [
  'https://x.com/inseat_hq',
  'https://www.instagram.com/inseat_hq/',
  'https://www.linkedin.com/showcase/inseat/'
];

const homeSoftwareApplication = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `${BASE_URL}/#software`,
  name: BRAND_NAME,
  alternateName: BRAND_ALTERNATE_NAMES,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'Hospitality Operations Software',
  operatingSystem: 'Web, iOS, Android',
  description:
    'INSEAT is the all-in-one guest experience and operations platform for hospitality businesses, helping teams streamline service, simplify operations, and deliver better customer experiences across every touchpoint.',
  url: BASE_URL,
  image: OG_IMAGE_URL,
  screenshot: OG_IMAGE_URL,
  brand: {
    '@id': `${BASE_URL}/#organization`
  },
  publisher: {
    '@id': `${BASE_URL}/#organization`
  },
  featureList: [
    'QR Table Ordering',
    'AI OCR Menu Import',
    'Table Management',
    'Waitlist Management',
    'Reservations',
    'Kitchen Display System',
    'Multi-Gateway Payments',
    'Loyalty',
    'Hospitality Analytics',
    'Inventory Management'
  ],
  areaServed: ['AE', 'ET', 'IN'],
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock'
  }
};
const homeOrganization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BASE_URL}/#organization`,
  name: BRAND_NAME,
  alternateName: BRAND_ALTERNATE_NAMES,
  legalName: 'Achievengine',
  url: BASE_URL,
  image: OG_IMAGE_URL,
  address: BUSINESS_ADDRESS,
  logo: {
    '@type': 'ImageObject',
    url: LOGO_URL,
    contentUrl: LOGO_URL,
    width: 500,
    height: 500
  },
  description:
    'INSEAT is the all-in-one guest experience and operations platform for hospitality businesses, built by Achievengine to streamline service, simplify operations, and improve customer experiences across every touchpoint.',
  foundingDate: '2024',
  email: 'business.inseat@achievengine.com',
  telephone: '+971-50-731-3961',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+971-50-731-3961',
      email: 'business.inseat@achievengine.com',
      contactType: 'sales',
      areaServed: ['AE', 'ET', 'IN'],
      availableLanguage: ['English', 'Arabic', 'Amharic']
    },
    {
      '@type': 'ContactPoint',
      telephone: '+251-94-215-0275',
      email: 'support@achievengine.com',
      contactType: 'customer support',
      areaServed: 'ET',
      availableLanguage: ['English', 'Amharic']
    }
  ],
  parentOrganization: {
    '@type': 'Organization',
    name: 'Achievengine',
    url: 'https://achievengine.com'
  },
  sameAs: OFFICIAL_SOCIAL_URLS
};

const homeWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  name: BRAND_NAME,
  alternateName: BRAND_ALTERNATE_NAMES,
  url: BASE_URL,
  publisher: {
    '@id': `${BASE_URL}/#organization`
  }
};

const toAbsoluteUrl = (canonicalPath) =>
  canonicalPath === '/' ? `${BASE_URL}/` : `${BASE_URL}${canonicalPath.replace(/\/?$/, '/')}`;

const breadcrumbList = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

const pageBreadcrumb = (name, canonicalPath) =>
  breadcrumbList([
    { name: 'Home', url: `${BASE_URL}/` },
    { name, url: toAbsoluteUrl(canonicalPath) }
  ]);

const routeSEO = {
  '/': {
    title: 'INSEAT — Hospitality Guest Experience & Operations Platform',
    description:
      'INSEAT is the all-in-one guest experience and operations platform for hospitality businesses, helping teams streamline service and deliver better customer experiences.',
    canonicalPath: '/',
    ogTitle: 'INSEAT — Hospitality Operations Platform',
    ogDescription:
      'INSEAT helps hospitality teams streamline service, simplify operations, and deliver better customer experiences across every touchpoint.',
    ogImage: OG_IMAGE_URL,
    ogType: 'website',
    twitterCard: 'summary_large_image',
    preloadImages: ['/og-image.png'],
    jsonLd: [homeOrganization, homeWebSite, homeSoftwareApplication]
  },
  '/features': {
    title: 'Hospitality Platform Features | Inseat',
    description:
      'Explore Inseat features for guest ordering, menu operations, service workflows, reservations, payments, loyalty, and analytics.',
    canonicalPath: '/features',
    ogType: 'website',
    jsonLd: [pageBreadcrumb('Features', '/features')]
  },
  '/pricing': {
    title: 'Hospitality Platform Pricing | Inseat',
    description:
      'Compare Inseat pricing plans for hospitality teams running guest experience, ordering, reservations, and operations workflows.',
    canonicalPath: '/pricing',
    ogType: 'website',
    jsonLd: [pageBreadcrumb('Pricing', '/pricing')]
  },
  '/integrations': {
    title: 'Integrations | Inseat',
    description:
      'Connect Inseat with payment providers and hospitality integrations to streamline your operations stack.',
    canonicalPath: '/integrations',
    ogType: 'website',
    jsonLd: [pageBreadcrumb('Integrations', '/integrations')]
  },
  '/integrations/stripe': {
    title: 'Stripe Integration | Inseat',
    description: 'Accept card payments with the Inseat Stripe integration for fast checkout and reconciliation.',
    canonicalPath: '/integrations/stripe',
    ogType: 'article',
    jsonLd: [breadcrumbList([
      { name: 'Home', url: `${BASE_URL}/` },
      { name: 'Integrations', url: toAbsoluteUrl('/integrations') },
      { name: 'Stripe', url: toAbsoluteUrl('/integrations/stripe') }
    ])]
  },
  '/integrations/mpgs': {
    title: 'MPGS Integration | Inseat',
    description: 'Use MPGS with Inseat to process secure payments across hospitality ordering and guest checkout channels.',
    canonicalPath: '/integrations/mpgs',
    ogType: 'article',
    jsonLd: [breadcrumbList([
      { name: 'Home', url: `${BASE_URL}/` },
      { name: 'Integrations', url: toAbsoluteUrl('/integrations') },
      { name: 'MPGS', url: toAbsoluteUrl('/integrations/mpgs') }
    ])]
  },
  '/integrations/chapa': {
    title: 'Chapa Integration | Inseat',
    description: 'Enable Chapa payments in Inseat for localized checkout and settlement workflows.',
    canonicalPath: '/integrations/chapa',
    ogType: 'article',
    jsonLd: [breadcrumbList([
      { name: 'Home', url: `${BASE_URL}/` },
      { name: 'Integrations', url: toAbsoluteUrl('/integrations') },
      { name: 'Chapa', url: toAbsoluteUrl('/integrations/chapa') }
    ])]
  },
  '/integrations/telebirr': {
    title: 'Telebirr Integration | Inseat',
    description: 'Connect Telebirr to Inseat for mobile-first payment acceptance in hospitality operations.',
    canonicalPath: '/integrations/telebirr',
    ogType: 'article',
    jsonLd: [breadcrumbList([
      { name: 'Home', url: `${BASE_URL}/` },
      { name: 'Integrations', url: toAbsoluteUrl('/integrations') },
      { name: 'Telebirr', url: toAbsoluteUrl('/integrations/telebirr') }
    ])]
  },
  '/integrations/apple-pay': {
    title: 'Apple Pay Integration | Inseat',
    description: 'Offer Apple Pay with Inseat to speed up checkout for dine-in and digital ordering flows.',
    canonicalPath: '/integrations/apple-pay',
    ogType: 'article',
    jsonLd: [breadcrumbList([
      { name: 'Home', url: `${BASE_URL}/` },
      { name: 'Integrations', url: toAbsoluteUrl('/integrations') },
      { name: 'Apple Pay', url: toAbsoluteUrl('/integrations/apple-pay') }
    ])]
  },
  '/integrations/delivery-apps': {
    title: 'Delivery App Integrations | Inseat',
    description: 'Manage delivery channels from Inseat with aggregator-ready integration capabilities.',
    canonicalPath: '/integrations/delivery-apps',
    ogType: 'article',
    jsonLd: [breadcrumbList([
      { name: 'Home', url: `${BASE_URL}/` },
      { name: 'Integrations', url: toAbsoluteUrl('/integrations') },
      { name: 'Delivery App Integrations', url: toAbsoluteUrl('/integrations/delivery-apps') }
    ])]
  },
  '/blog': {
    title: 'Inseat Blog | Hospitality Operations Insights',
    description:
      'Read Inseat blog articles on hospitality operations, guest experience, table workflows, digital ordering, and growth.',
    canonicalPath: '/blog',
    ogType: 'website',
    jsonLd: [pageBreadcrumb('Blog', '/blog')]
  },
  '/table-management': {
    title: 'Table Management Software | Inseat',
    description:
      'Optimize seating flow, turn times, and floor operations with Inseat table management software.',
    canonicalPath: '/table-management',
    ogType: 'website',
    jsonLd: [pageBreadcrumb('Table Management', '/table-management')]
  },
  '/reservations': {
    title: 'Hospitality Reservations Software | Inseat',
    description:
      'Manage bookings, availability, and guest reservations with the Inseat hospitality reservations platform.',
    canonicalPath: '/reservations',
    ogType: 'website',
    jsonLd: [pageBreadcrumb('Reservations', '/reservations')]
  }
};

const routeToFile = (route) => {
  if (route === '/') return path.join(DIST_DIR, 'index.html');
  return path.join(DIST_DIR, route.replace(/^\//, ''), 'index.html');
};

const stripSeoTags = (html) =>
  html
    .replace(/<title>[\s\S]*?<\/title>/gi, '')
    .replace(/<meta(?=[^>]*\bname=["']description["'])[^>]*>/gi, '')
    .replace(/<meta(?=[^>]*\bname=["']robots["'])[^>]*>/gi, '')
    .replace(/<meta(?=[^>]*\bname=["']google-site-verification["'])[^>]*>/gi, '')
    .replace(/<link(?=[^>]*\brel=["']canonical["'])[^>]*>/gi, '')
    .replace(/<meta(?=[^>]*\bproperty=["']og:[^"']+["'])[^>]*>/gi, '')
    .replace(/<meta(?=[^>]*\bname=["']twitter:[^"']+["'])[^>]*>/gi, '')
    .replace(/<link(?=[^>]*\bdata-rh=["']true["'])(?=[^>]*\brel=["']preload["'])(?=[^>]*\bas=["']image["'])[^>]*>/gi, '')
    .replace(/<script(?=[^>]*\btype=["']application\/ld\+json["'])[^>]*>[\s\S]*?<\/script>/gi, '');

const renderSeo = (config) => {
  const canonicalUrl = toAbsoluteUrl(config.canonicalPath);
  const ogTitle = config.ogTitle || config.title;
  const ogDescription = config.ogDescription || config.description;
  const ogType = config.ogType || 'website';
  const twitterCard = config.twitterCard || 'summary_large_image';
  const jsonLdScripts = (config.jsonLd || [])
    .map(
      (schema) =>
        `<script data-rh="true" type="application/ld+json">${JSON.stringify(schema)}</script>`
    )
    .join('');
  const preloads = (config.preloadImages || [])
    .map(
      (href) =>
        `<link data-rh="true" rel="preload" as="image" href="${href}" fetchpriority="high" />`
    )
    .join('');

  return [
    preloads,
    `<title data-rh="true">${config.title}</title>`,
    `<meta data-rh="true" name="description" content="${config.description}" />`,
    '<meta data-rh="true" name="robots" content="index,follow" />',
    `<meta data-rh="true" name="google-site-verification" content="${GOOGLE_SITE_VERIFICATION}" />`,
    `<link data-rh="true" rel="canonical" href="${canonicalUrl}" />`,
    `<meta data-rh="true" property="og:title" content="${ogTitle}" />`,
    `<meta data-rh="true" property="og:description" content="${ogDescription}" />`,
    `<meta data-rh="true" property="og:url" content="${canonicalUrl}" />`,
    `<meta data-rh="true" property="og:type" content="${ogType}" />`,
    `<meta data-rh="true" property="og:site_name" content="${BRAND_NAME}" />`,
    ...(config.ogImage ? [`<meta data-rh="true" property="og:image" content="${config.ogImage}" />`] : []),
    `<meta data-rh="true" name="twitter:card" content="${twitterCard}" />`,
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
