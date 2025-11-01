import { createClient } from '@sanity/client';

// Create client with write permissions
const client = createClient({
  projectId: 'of1onask',
  dataset: 'production',
  apiVersion: '2025-01-01',
  useCdn: false,
  token: process.env.SANITY_AUTH_TOKEN // You'll need to get this from Sanity
});

async function createContent() {
  try {
    // Create hero document
    const heroDoc = await client.create({
      _type: 'hero',
      title: 'Transform Your Restaurant with QR Code Ordering',
      subtitle: 'Streamline your dining experience with our contactless QR code menu and ordering system. Reduce wait times, increase table turnover, and boost your profits.',
      ctaPrimary: 'Try Free Demo',
      ctaSecondary: 'How It Works',
    
      stats: [
        { label: 'Restaurants Served', value: '500+' },
        { label: 'Average Revenue Increase', value: '25%' },
        { label: 'Orders Processed', value: '1M+' }
      ]
    });
    
    console.log('Created hero document:', heroDoc._id);

    // Create pricing document
    const pricingDoc = await client.create({
      _type: 'pricing',
      headline: 'Flexible Pricing Plans',
      subheadline: 'Choose the right plan for your restaurant\'s needs and scale as you grow.',
      tiers: [
        {
          _key: 'transaction-based',
          id: 'transaction-based',
          name: 'Transaction Based',
          monthlyFee: 0,
          transactionFee: 15,
          recommended: false,
          description: 'Pay per transaction with higher commission rates.',
          features: [
            { name: 'QR Ordering', included: true, addon: false },
            { name: 'Loyalty Bronze Tier', included: true, addon: false },
            { name: 'Basic Analytics', included: true, addon: false },
            { name: 'Digital Menu Management', included: true, addon: false },
            { name: 'KDS', included: false, addon: true },
            { name: 'POS', included: false, addon: true }
          ]
        },
        {
          _key: 'pro',
          id: 'pro',
          name: 'Pro',
          monthlyFee: 500,
          transactionFee: 5,
          recommended: true,
          description: 'Our most popular plan. Perfect for restaurants looking to boost efficiency and loyalty.',
          features: [
            { name: 'QR Ordering', included: true, addon: false },
            { name: 'Loyalty Bronze Tier', included: true, addon: false },
            { name: 'Basic Analytics', included: true, addon: false },
            { name: 'Digital Menu Management', included: true, addon: false },
            { name: 'KDS', included: false, addon: true },
            { name: 'POS', included: false, addon: true }
          ]
        },
        {
          _key: 'enterprise',
          id: 'enterprise',
          name: 'Enterprise',
          monthlyFee: null,
          transactionFee: null,
          recommended: false,
          description: 'For large or multi-location restaurants requiring custom solutions and dedicated support.',
          features: [
            { name: 'QR Ordering', included: true, addon: false },
            { name: 'Loyalty Bronze Tier', included: true, addon: false },
            { name: 'Basic Analytics', included: true, addon: false },
            { name: 'Digital Menu Management', included: true, addon: false },
            { name: 'KDS', included: true, addon: false },
            { name: 'POS', included: true, addon: false }
          ]
        }
      ]
    });

    console.log('Created pricing document:', pricingDoc._id);

    // Create features document
    const featuresDoc = await client.create({
      _type: 'features',
      headline: 'Powerful Features For Your Restaurant',
      subheadline: 'Revolutionize your restaurant operations with our comprehensive QR code ordering system',
      items: [
        {
          _key: 'contactless-ordering',
          title: 'Contactless Ordering',
          description: 'Allow customers to scan a QR code, browse your menu, and place orders directly from their phones without downloading any app.',
          icon: 'qr-code',
          color: 'blue'
        },
        {
          _key: 'real-time-menu',
          title: 'Real-time Menu Management',
          description: 'Update your menu items, prices, or availability instantly. Changes reflect immediately across all customer devices.',
          icon: 'menu',
          color: 'green'
        },
        {
          _key: 'analytics',
          title: 'Analytics Dashboard',
          description: 'Track sales, popular items, peak hours, and customer preferences with our powerful analytics dashboard.',
          icon: 'chart',
          color: 'purple'
        },
        {
          _key: 'payments',
          title: 'Instant Payments',
          description: 'Enable customers to pay directly from their phones using various payment methods, reducing wait times and improving table turnover.',
          icon: 'payment',
          color: 'orange'
        },
        {
          _key: 'multilang',
          title: 'Multi-language Support',
          description: 'Cater to international customers with automatic menu translation into multiple languages, enhancing the dining experience.',
          icon: 'globe',
          color: 'teal'
        },
        {
          _key: 'kds',
          title: 'Kitchen Display System',
          description: 'Orders are automatically sent to your kitchen display system, ensuring efficient preparation and reducing errors.',
          icon: 'kitchen',
          color: 'red'
        }
      ]
    });

    console.log('Created features document:', featuresDoc._id);

    // Create footer document
    const footerDoc = await client.create({
      _type: 'footer',
      companyDescription: 'Transform your restaurant with smart QR code ordering and comprehensive management tools.',
      quickLinks: [
        { title: 'About Us', href: '#about-us' },
        { title: 'Services', href: '#services' },
        { title: 'Blog', href: '#blog' },
        { title: 'Contact', href: '#contact' }
      ],
      supportLinks: [
        { title: 'Help Center', href: '#help' },
        { title: 'Contact Us', href: '#contact' },
        { title: 'Documentation', href: '#docs' },
        { title: 'API Reference', href: '#api' }
      ],
      contactInfo: {
        address: 'Addis Ababa, Ethiopia',
        phone: '+1 (555) 123-4567',
        email: 'hello@inseat.com',
        businessHours: 'Monday - Friday: 9 AM - 6 PM'
      },
      socialLinks: [
        { platform: 'Twitter', url: 'https://twitter.com/inseat' },
        { platform: 'LinkedIn', url: 'https://linkedin.com/company/inseat' },
        { platform: 'Facebook', url: 'https://facebook.com/inseat' }
      ],
      copyrightText: `© ${new Date().getFullYear()} Inseat. All rights reserved.`
    });

    console.log('Created footer document:', footerDoc._id);

    // Create testimonials document
    const testimonialsDoc = await client.create({
      _type: 'testimonialsSection',
      headline: 'What Our Customers Say',
      subheadline: 'Hear from restaurant owners who have transformed their business with Inseat',
      testimonials: [
        {
          _key: 'maria',
          quote: 'Inseat has completely transformed how we handle orders. Our staff can focus on service instead of taking orders, and our customers love the convenience!',
          author: 'Maria Rodriguez',
          role: 'Owner',
          company: 'La Boca Restaurant'
        },
        {
          _key: 'james',
          quote: 'Since implementing Inseat, we\'ve seen a 28% increase in average order value and a significant reduction in wait times. It\'s been a game-changer for our business.',
          author: 'James Chen',
          role: 'Manager',
          company: 'Fusion Bistro'
        },
        {
          _key: 'samantha',
          quote: 'The analytics dashboard helps us understand customer preferences and optimize our menu. Plus, the contactless ordering is perfect for today\'s health-conscious diners.',
          author: 'Samantha Lee',
          role: 'Director',
          company: 'Urban Plate'
        }
      ]
    });

    console.log('Created testimonials document:', testimonialsDoc._id);

    console.log('All content created successfully!');

  } catch (error) {
    console.error('Error creating content:', error);
  }
}

// Check if SANITY_AUTH_TOKEN is provided
if (!process.env.SANITY_AUTH_TOKEN) {
  console.log('To create content, you need a Sanity auth token.');
  console.log('1. Go to https://www.sanity.io/manage');
  console.log('2. Select your project (of1onask)');
  console.log('3. Go to Settings > API');
  console.log('4. Create a new token with Editor permissions');
  console.log('5. Run: SANITY_AUTH_TOKEN=your_token node create-content.js');
} else {
  createContent();
}