import { createClient } from '@sanity/client/stega'

// Check if visual editing is enabled
const isVisualEditingEnabled = import.meta.env.VITE_SANITY_ENABLE_OVERLAYS === 'true'

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'of1onask',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2025-01-01',
  useCdn: !isVisualEditingEnabled, // Don't use CDN when visual editing is enabled
  perspective: isVisualEditingEnabled ? 'published' : 'published',
  stega: {
    enabled: isVisualEditingEnabled,
    studioUrl: '/studio'
  }
})

// Enhanced queries for visual editing
export const heroQuery = `*[_type == "hero"][0]{
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  "imageUrl": image.asset->url,
  socialProof,
  stats
}`

export const pricingQuery = `*[_type == "pricing"][0]{
  headline,
  subheadline,
  tiers[]{
    id,
    name,
    monthlyFee,
    transactionFee,
    recommended,
    description,
    features[]{name, included, addon}
  }
}`

export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  siteTitle, tagline, contactEmail, phonePrimary, phoneSecondary, location, businessHours,
  "logoUrl": logo.asset->url
}`

export const featuresQuery = `*[_type == "features"][0]{
  headline, 
  subheadline, 
  items[]{title, description, icon, color}
}`

export const contactQuery = `*[_type == "contact"][0]{
  headline, 
  intro, 
  location, 
  phonePrimary, 
  phoneSecondary, 
  email, 
  businessHours
}`

// New comprehensive queries for all UI components
export const aboutUsQuery = `*[_type == "aboutUs"][0]{
  headline,
  description,
  mission,
  vision,
  values[],
  teamIntro,
  team[]{
    name,
    role,
    bio,
    "imageUrl": image.asset->url
  }
}`

export const footerQuery = `*[_type == "footer"][0]{
  companyDescription,
  quickLinks[]{title, href},
  supportLinks[]{title, href},
  contactInfo,
  socialLinks[]{platform, url},
  copyrightText
}`

export const navbarQuery = `*[_type == "navbar"][0]{
  logo,
  navigationItems[]{label, href, subItems[]},
  ctaButton{text, href}
}`
