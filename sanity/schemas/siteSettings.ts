import { defineField, defineType } from 'sanity'

const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'siteTitle', type: 'string', validation: r => r.required() }),
    defineField({ name: 'tagline', type: 'string' }),
    defineField({ name: 'contactEmail', type: 'string' }),
    defineField({ name: 'phonePrimary', type: 'string' }),
    defineField({ name: 'phoneSecondary', type: 'string' }),
    defineField({ name: 'location', type: 'string' }),
    defineField({ name: 'businessHours', type: 'string' }),
    defineField({ name: 'logo', type: 'image', options: { hotspot: true } })
  ]
})

export default siteSettings

