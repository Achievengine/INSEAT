import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'companyDescription',
      title: 'Company Description',
      type: 'text',
      initialValue: 'Transform your restaurant with smart QR code ordering and comprehensive management tools.'
    }),
    defineField({
      name: 'quickLinks',
      title: 'Quick Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'href', title: 'Link', type: 'string' }
          ]
        }
      ],
      initialValue: [
        { title: 'Features', href: '#features' },
        { title: 'Pricing', href: '#pricing' },
        { title: 'How It Works', href: '#how-it-works' },
        { title: 'Demo', href: '#demo' }
      ]
    }),
    defineField({
      name: 'supportLinks',
      title: 'Support Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'href', title: 'Link', type: 'string' }
          ]
        }
      ],
      initialValue: [
        { title: 'Help Center', href: '#help' },
        { title: 'Contact Us', href: '#contact' },
        { title: 'Documentation', href: '#docs' },
        { title: 'API Reference', href: '#api' }
      ]
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        { name: 'email', title: 'Email', type: 'string' },
        { name: 'phone', title: 'Phone', type: 'string' },
        { name: 'address', title: 'Address', type: 'text' }
      ],
      initialValue: {
        email: 'hello@inseat.com',
        phone: '+1 (555) 123-4567',
        address: '123 Restaurant Row, Foodie City, FC 12345'
      }
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', title: 'Platform', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' }
          ]
        }
      ],
      initialValue: [
        { platform: 'Twitter', url: 'https://twitter.com/inseat' },
        { platform: 'LinkedIn', url: 'https://linkedin.com/company/inseat' },
        { platform: 'Facebook', url: 'https://facebook.com/inseat' }
      ]
    }),
    defineField({
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
      initialValue: '© 2024 Inseat. All rights reserved.'
    })
  ]
})