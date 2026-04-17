import { useEffect } from 'react';

// SEO (unchanged)
import SEOHead from '../components/SEOHead';

// V2 Dark landing
import NavbarDark from '../components/landingV2/NavbarDark';
import HeroV2 from '../components/landingV2/Hero/HeroV2';
import TrustedByMarquee from '../components/landingV2/TrustedByMarquee';
import PainPointsV2 from '../components/landingV2/PainPointsV2';
import HorizontalShowcase from '../components/landingV2/HorizontalShowcase';
import PlatformNodeDiagram from '../components/landingV2/PlatformNodeDiagram';
import FeaturesV2 from '../components/landingV2/FeaturesV2';
import LiveAnalyticsTeaser from '../components/landingV2/LiveAnalyticsTeaser';
import IntegrationsStrip from '../components/landingV2/IntegrationsStrip';
import SocialProofV2 from '../components/landingV2/SocialProofV2';
import PricingV2 from '../components/landingV2/PricingV2';
import ROICalculator from '../components/landingV2/ROICalculator';
import FAQv2 from '../components/landingV2/FAQv2';
import CTABlock from '../components/landingV2/CTABlock';
import FooterV2 from '../components/landingV2/FooterV2';

// System providers
import LenisProvider from '../components/system/LenisProvider';
import CustomCursor from '../components/system/CustomCursor';
import ScrollProgressBarV2 from '../components/system/ScrollProgressBarV2';

// Styles
import '../App.css';

const OFFICIAL_SOCIAL_URLS = [
  'https://x.com/inseat_hq',
  'https://www.instagram.com/inseat_hq/',
  'https://www.linkedin.com/showcase/inseat/',
];

const BUSINESS_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: 'Shams Business Center, Al Messaned, Media City Free Zone',
  addressLocality: 'Sharjah',
  addressRegion: 'Sharjah',
  addressCountry: 'AE',
};

function LandingPage() {
  // Toggle the `v2-dark` class on <html> only for this page.
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    html.classList.add('v2-dark');
    body.classList.add('v2-dark');
    return () => {
      html.classList.remove('v2-dark');
      body.classList.remove('v2-dark');
    };
  }, []);

  return (
    <>
      <SEOHead
        title="INSEAT — The operating system restaurants run on"
        appendSiteName={false}
        description="INSEAT is the all-in-one hospitality OS: POS, QR ordering, kitchen display, reservations, floor plans, staff, loyalty, and analytics — one platform, every shift, every guest."
        keywords="hospitality operations software, restaurant OS, guest experience platform, QR code ordering system, kitchen display system KDS, reservations software, table management software, floor plan software, restaurant analytics, loyalty program, hospitality POS"
        url="https://inseat.achievengine.com/"
        image="https://inseat.achievengine.com/og-image.png"
        ogTitle="INSEAT — The operating system restaurants run on"
        ogDescription="One platform for POS, QR ordering, kitchen display, reservations, loyalty, and analytics. Built for hospitality teams in UAE, Ethiopia, and India."
        type="website"
        twitterCard="summary_large_image"
        faqs={[
          {
            question: 'How does INSEAT QR code ordering work?',
            answer:
              'Guests scan a QR code on their table which opens your digital menu in their browser. They can browse, customize items, place orders, and pay — all without downloading an app. Orders go directly to your kitchen display.',
          },
          {
            question: 'Is there a free plan?',
            answer:
              'Yes, INSEAT offers a free forever plan that includes basic QR code ordering and table management for small hospitality teams. No credit card required to start.',
          },
          {
            question: 'Which countries is INSEAT available in?',
            answer:
              'INSEAT is currently available in the UAE, Ethiopia, and India, with plans to expand to more regions. We support multiple payment gateways including Stripe, MPGS, Chapa, Telebirr, and Apple Pay.',
          },
          {
            question: 'How long does it take to set up INSEAT?',
            answer:
              'Most hospitality teams are up and running in under 5 minutes. You can import your existing menu using our AI OCR feature — just scan your paper menu and INSEAT extracts all items automatically.',
          },
          {
            question: 'Does INSEAT work with my existing POS?',
            answer:
              'INSEAT is a standalone platform that can replace or complement your existing POS. It includes QR ordering, table management, kitchen display, staff tools, and analytics all in one system.',
          },
        ]}
        extraJsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            '@id': 'https://inseat.achievengine.com/#software',
            name: 'INSEAT',
            alternateName: ['Inseat', 'INSEAT Hospitality Platform', 'INSEAT Guest Experience Platform'],
            applicationCategory: 'BusinessApplication',
            applicationSubCategory: 'Hospitality Operations Software',
            operatingSystem: 'Web, iOS, Android',
            description:
              'INSEAT is the all-in-one guest experience and operations platform for hospitality businesses, helping teams streamline service, simplify operations, and deliver better customer experiences across every touchpoint.',
            url: 'https://inseat.achievengine.com',
            image: 'https://inseat.achievengine.com/og-image.png',
            screenshot: 'https://inseat.achievengine.com/og-image.png',
            brand: { '@id': 'https://inseat.achievengine.com/#organization' },
            publisher: { '@id': 'https://inseat.achievengine.com/#organization' },
            featureList: [
              'QR Code Table Ordering',
              'AI OCR Menu Import',
              'Table Management with Floor Plans',
              'Waitlist with SMS Notifications',
              'Kitchen Display System (KDS)',
              'Reservation Management',
              'Dynamic Pricing & Promotions',
              'Staff Management & Scheduling',
              'Analytics Dashboard',
              'Multi-Payment Gateway Support',
            ],
            offers: {
              '@type': 'AggregateOffer',
              lowPrice: '0',
              highPrice: '99',
              priceCurrency: 'USD',
              offerCount: '3',
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            '@id': 'https://inseat.achievengine.com/#organization',
            name: 'INSEAT',
            alternateName: ['Inseat', 'INSEAT Hospitality Platform', 'INSEAT Guest Experience Platform'],
            legalName: 'Achievengine',
            url: 'https://inseat.achievengine.com',
            image: 'https://inseat.achievengine.com/og-image.png',
            address: BUSINESS_ADDRESS,
            logo: {
              '@type': 'ImageObject',
              url: 'https://inseat.achievengine.com/logo.png',
              contentUrl: 'https://inseat.achievengine.com/logo.png',
              width: 500,
              height: 500,
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
                availableLanguage: ['English', 'Arabic', 'Amharic'],
              },
              {
                '@type': 'ContactPoint',
                telephone: '+251-94-215-0275',
                email: 'support@achievengine.com',
                contactType: 'customer support',
                areaServed: 'ET',
                availableLanguage: ['English', 'Amharic'],
              },
            ],
            sameAs: OFFICIAL_SOCIAL_URLS,
            parentOrganization: {
              '@type': 'Organization',
              name: 'Achievengine',
              url: 'https://achievengine.com',
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            '@id': 'https://inseat.achievengine.com/#website',
            name: 'INSEAT',
            alternateName: ['Inseat', 'INSEAT Hospitality Platform', 'INSEAT Guest Experience Platform'],
            url: 'https://inseat.achievengine.com',
            publisher: { '@id': 'https://inseat.achievengine.com/#organization' },
          },
        ]}
      />

      <LenisProvider>
        <CustomCursor />
        <ScrollProgressBarV2 />
        <NavbarDark />

        <main className="overflow-x-hidden">
          <HeroV2 />
          <TrustedByMarquee />
          <PainPointsV2 />
          <HorizontalShowcase />
          <PlatformNodeDiagram />
          <FeaturesV2 />
          <LiveAnalyticsTeaser />
          <IntegrationsStrip />
          <SocialProofV2 />
          <PricingV2 />
          <ROICalculator />
          <FAQv2 />
          <CTABlock />
        </main>

        <FooterV2 />
      </LenisProvider>
    </>
  );
}

export default LandingPage;
