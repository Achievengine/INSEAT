import { defineField, defineType } from 'sanity'

export const teamMember = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'object',
  fields: [
    defineField({ name: 'name', type: 'string', validation: r => r.required() }),
    defineField({ name: 'role', type: 'string' }),
    defineField({ name: 'bio', type: 'text' }),
    defineField({ name: 'avatar', type: 'image', options: { hotspot: true } }),
  ]
})

const about = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({ name: 'headline', type: 'string' }),
    defineField({ name: 'story', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'achievements', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'team', type: 'array', of: [{ type: 'teamMember' }] }),
  ]
})

export default about

