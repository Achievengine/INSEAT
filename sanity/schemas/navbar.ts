import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'navbar',
  title: 'Navigation Bar',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo Text',
      type: 'string',
      initialValue: 'Inseat'
    }),
    defineField({
      name: 'navigationItems',
      title: 'Navigation Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string'
            },
            {
              name: 'href',
              title: 'Link',
              type: 'string'
            },
            {
              name: 'subItems',
              title: 'Sub Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'label', title: 'Label', type: 'string' },
                    { name: 'href', title: 'Link', type: 'string' }
                  ]
                }
              ]
            }
          ]
        }
      ],
      initialValue: [
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'About', href: '#about' }
      ]
    }),
    defineField({
      name: 'ctaButton',
      title: 'CTA Button',
      type: 'object',
      fields: [
        { name: 'text', title: 'Button Text', type: 'string' },
        { name: 'href', title: 'Button Link', type: 'string' }
      ],
      initialValue: {
        text: 'Get Started',
        href: '#demo'
      }
    })
  ]
})