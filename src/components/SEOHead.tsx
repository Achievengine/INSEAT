import { useEffect } from 'react';
import { setDocumentMeta, setJsonLd } from '../lib/seo';

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
  keywords?: string;
  url?: string;
  image?: string;
  type?: string;
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FAQItem[];
  howTo?: HowToSchema;
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
  keywords,
  url,
  image,
  type = 'website',
  breadcrumbs,
  faqs,
  howTo,
  softwareApplication
}: SEOHeadProps) => {
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://inseat.achievengine.com';
  const fullUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const fullImage = image || `${origin}/preview.png`;

  useEffect(() => {
    // Set basic meta tags
    setDocumentMeta({
      title: `${title} | Inseat`,
      description,
      url: fullUrl,
      image: fullImage,
      type
    });

    // Set keywords meta tag
    if (keywords) {
      let keywordsMeta = document.querySelector<HTMLMetaElement>('meta[name="keywords"]');
      if (!keywordsMeta) {
        keywordsMeta = document.createElement('meta');
        keywordsMeta.name = 'keywords';
        document.head.appendChild(keywordsMeta);
      }
      keywordsMeta.content = keywords;
    }

    const cleanupFunctions: (() => void)[] = [];

    // Set BreadcrumbList schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.url
        }))
      };
      cleanupFunctions.push(setJsonLd('inseat-breadcrumb-jsonld', breadcrumbSchema));
    }

    // Set FAQPage schema
    if (faqs && faqs.length > 0) {
      const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      };
      cleanupFunctions.push(setJsonLd('inseat-faq-jsonld', faqSchema));
    }

    // Set HowTo schema
    if (howTo && howTo.steps.length > 0) {
      const howToSchema = {
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
      };
      cleanupFunctions.push(setJsonLd('inseat-howto-jsonld', howToSchema));
    }

    // Set SoftwareApplication schema
    if (softwareApplication) {
      const softwareSchema = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: softwareApplication.name,
        description: softwareApplication.description,
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Restaurant Management Software',
        operatingSystem: 'Web, iOS, Android',
        offers: {
          '@type': 'Offer',
          price: softwareApplication.price || '0',
          priceCurrency: softwareApplication.priceCurrency || 'USD',
          availability: 'https://schema.org/InStock'
        },
        featureList: softwareApplication.features || [],
        screenshot: fullImage
      };
      cleanupFunctions.push(setJsonLd('inseat-software-jsonld', softwareSchema));
    }

    return () => {
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, [title, description, keywords, fullUrl, fullImage, type, breadcrumbs, faqs, howTo, softwareApplication]);

  return null;
};

export default SEOHead;
