import { defineField, defineType } from 'sanity'

const contact = defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({ name: 'headline', type: 'string' }),
    defineField({ name: 'intro', type: 'text' }),
    defineField({ name: 'location', type: 'string' }),
    defineField({ name: 'phonePrimary', type: 'string' }),
    defineField({ name: 'phoneSecondary', type: 'string' }),
    defineField({ name: 'email', type: 'string' }),
    defineField({ name: 'businessHours', type: 'string' }),
  ]
})

export default contact

