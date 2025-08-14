import hero from './hero'
import pricing, { tier, feature } from './pricing'
import howItWorks, { step as howItWorksStep } from './howItWorks'
import siteSettings from './siteSettings'
import about, { teamMember } from './about'
import features, { featureItem } from './features'
import contact from './contact'
import navbar from './navbar'
import footer from './footer'
import aboutUs, { teamMemberAbout } from './aboutUs'
import testimonialsSection, { testimonial } from './testimonials'
import demoForm from './demoForm'

export const schemaTypes = [
  // objects first
  feature,
  tier,
  howItWorksStep,
  teamMember,
  featureItem,
  teamMemberAbout,
  testimonial,
  // documents
  hero,
  pricing,
  howItWorks,
  siteSettings,
  about,
  features,
  contact,
  navbar,
  footer,
  aboutUs,
  testimonialsSection,
  demoForm,
]
