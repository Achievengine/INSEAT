import { defineField, defineType } from 'sanity'

export const feature = defineType({
  name: 'feature',
  title: 'Feature',
  type: 'object',
  fields: [
    defineField({ name: 'name', type: 'string', validation: r => r.required() }),
    defineField({ name: 'included', type: 'boolean', initialValue: true }),
    defineField({ name: 'addon', type: 'boolean' }),
  ]
})

export const tier = defineType({
  name: 'tier',
  title: 'Tier',
  type: 'object',
  fields: [
    defineField({ name: 'id', type: 'string', validation: r => r.required() }),
    defineField({ name: 'name', type: 'string', validation: r => r.required() }),
    defineField({ name: 'monthlyFee', type: 'string', description: 'Number or "Custom"' }),
    defineField({ name: 'transactionFee', type: 'string' }),
    defineField({ name: 'recommended', type: 'boolean' }),
    defineField({ name: 'description', type: 'text' }),
    defineField({ name: 'features', type: 'array', of: [{ type: 'feature' }] })
  ]
})

const pricing = defineType({
  name: 'pricing',
  title: 'Pricing',
  type: 'document',
  fields: [
    defineField({ name: 'headline', type: 'string' }),
    defineField({ name: 'subheadline', type: 'text' }),
    defineField({ name: 'tiers', type: 'array', of: [{ type: 'tier' }] })
  ]
})

export default pricing
