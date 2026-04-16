import { Helmet } from 'react-helmet-async';

const GOOGLE_SITE_VERIFICATION = 'FBkmjKh1YoIOdoj8nBZSTzR6wtM0xcDY6s5XI3NadY4';

type BreadcrumbItem = {
  name: string;
  url: string;
};

type FAQItem = {
  question: string;
  answer: string;
};

type HowToStep = {
  name: string;
  text: string;
  image?: string;
};

type HowToSchema = {
  name: string;
  description: string;
  totalTime?: string;
  steps: HowToStep[];
};

type SEOHeadProps = {
  title: string;
  description: string;
  appendSiteName?: boolean;
  keywords?: string;
  url?: string;
  image?: string;
  type?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterCard?: string;
  siteName?: string;
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FAQItem[];
  howTo?: HowToSchema;
  extraJsonLd?: Record<string, unknown>[];
  softwareApplication?: {
    name: string;
    description: string;
    features?: string[];
    price?: string;
    priceCurrency?: string;
  };
};

const SEOHead = ({
  title,
  description,
  appendSiteName = true,
  keywords,
  url,
  image,
  type = 'website',
  ogTitle,
  ogDescription,
  twitterTitle,
  twitterDescription,
  twitterCard = 'summary_large_image',
  siteName = 'INSEAT',
  breadcrumbs,
  faqs,
  howTo,
  extraJsonLd,
  softwareApplication
}: SEOHeadProps) => {
  const origin =
    typeof window !== 'undefined' ? window.location.origin : 'https://inseat.achievengine.com';
  const fullUrl = url || (typeof window !== 'undefined' ? window.location.href : undefined);
  const fullImage = image || `${origin}/preview.png`;
  const resolvedTitle = appendSiteName ? `${title} | INSEAT` : title;
  const resolvedOgTitle = ogTitle || resolvedTitle;
  const resolvedOgDescription = ogDescription || description;
  const resolvedTwitterTitle = twitterTitle || resolvedOgTitle;
  const resolvedTwitterDescription = twitterDescription || resolvedOgDescription;
  const schemas: Record<string, unknown>[] = [];

  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url
      }))
    });
  }

  if (faqs && faqs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    });
  }

  if (howTo && howTo.steps.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: howTo.name,
      description: howTo.description,
      ...(howTo.totalTime && { totalTime: howTo.totalTime }),
      step: howTo.steps.map((step, index) => ({
        '@type': 'HowToStep',
        position: index + 1,
        name: step.name,
        text: step.text,
        ...(step.image && { image: step.image })
      }))
    });
  }

  if (softwareApplication) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: softwareApplication.name,
      description: softwareApplication.description,
      applicationCategory: 'BusinessApplication',
      applicationSubCategory: 'Hospitality Operations Software',
      operatingSystem: 'Web, iOS, Android',
      offers: {
        '@type': 'Offer',
        price: softwareApplication.price || '0',
        priceCurrency: softwareApplication.priceCurrency || 'USD',
        availability: 'https://schema.org/InStock'
      },
      featureList: softwareApplication.features || [],
      screenshot: fullImage
    });
  }

  if (extraJsonLd?.length) {
    schemas.push(...extraJsonLd);
  }

  return (
    <Helmet prioritizeSeoTags>
      <title>{resolvedTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      <meta name="google-site-verification" content={GOOGLE_SITE_VERIFICATION} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}

      <meta property="og:type" content={type} />
      <meta property="og:title" content={resolvedOgTitle} />
      <meta property="og:description" content={resolvedOgDescription} />
      <meta property="og:site_name" content={siteName} />
      {fullUrl ? <meta property="og:url" content={fullUrl} /> : null}
      <meta property="og:image" content={fullImage} />

      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={resolvedTwitterTitle} />
      <meta name="twitter:description" content={resolvedTwitterDescription} />
      <meta name="twitter:image" content={fullImage} />

      {fullUrl ? <link rel="canonical" href={fullUrl} /> : null}

      {schemas.map((schema, index) => (
        <script key={`json-ld-${index}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
