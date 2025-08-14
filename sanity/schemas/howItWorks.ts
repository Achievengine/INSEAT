import { defineField, defineType } from 'sanity'

export const step = defineType({
  name: 'howItWorksStep',
  title: 'How It Works Step',
  type: 'object',
  fields: [
    defineField({ name: 'order', title: 'Order', type: 'number' }),
    defineField({ name: 'title', type: 'string', validation: r => r.required() }),
    defineField({ name: 'description', type: 'text', rows: 3 }),
    defineField({ name: 'icon', title: 'Icon Name', type: 'string', description: 'Optional semantic icon key (e.g., account, upload, qr, cart)' }),
  ]
})

const howItWorks = defineType({
  name: 'howItWorks',
  title: 'How It Works',
  type: 'document',
  fields: [
    defineField({ name: 'headline', type: 'string' }),
    defineField({ name: 'subheadline', type: 'text' }),
    defineField({ name: 'steps', type: 'array', of: [{ type: 'howItWorksStep' }] })
  ]
})

export default howItWorks

