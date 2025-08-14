import { defineField, defineType } from 'sanity'

export const featureItem = defineType({
  name: 'featureItem',
  title: 'Feature Item',
  type: 'object',
  fields: [
    defineField({ name: 'title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'description', type: 'text' }),
    defineField({ name: 'icon', type: 'string', description: 'Semantic icon key or emoji' }),
    defineField({ name: 'color', type: 'string', description: 'Tailwind color class, e.g. bg-primary/10 text-primary' }),
  ]
})

const features = defineType({
  name: 'features',
  title: 'Features',
  type: 'document',
  fields: [
    defineField({ name: 'headline', type: 'string' }),
    defineField({ name: 'subheadline', type: 'string' }),
    defineField({ name: 'items', type: 'array', of: [{ type: 'featureItem' }] })
  ]
})

export default features

