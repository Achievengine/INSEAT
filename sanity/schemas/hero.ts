import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'subtitle', type: 'text' }),
    defineField({ name: 'ctaPrimary', type: 'string' }),
    defineField({ name: 'ctaSecondary', type: 'string' }),
    defineField({ name: 'image', type: 'image', options: { hotspot: true } })
  ]
})
