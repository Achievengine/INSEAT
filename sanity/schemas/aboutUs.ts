import { defineType, defineField } from 'sanity'

export const teamMemberAbout = defineType({
  name: 'teamMemberAbout',
  title: 'Team Member',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string'
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string'
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text'
    }),
    defineField({
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true
      }
    })
  ]
})

export default defineType({
  name: 'aboutUs',
  title: 'About Us',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Main Headline',
      type: 'string',
      initialValue: 'About Inseat'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      initialValue: 'We are revolutionizing the restaurant industry with innovative QR code ordering solutions.'
    }),
    defineField({
      name: 'mission',
      title: 'Mission Statement',
      type: 'text',
      initialValue: 'To empower restaurants with technology that enhances customer experience and operational efficiency.'
    }),
    defineField({
      name: 'vision',
      title: 'Vision Statement',
      type: 'text',
      initialValue: 'To become the leading platform for contactless dining experiences worldwide.'
    }),
    defineField({
      name: 'values',
      title: 'Company Values',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Value Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' }
          ]
        }
      ],
      initialValue: [
        { title: 'Innovation', description: 'We continuously innovate to solve real restaurant challenges.' },
        { title: 'Excellence', description: 'We deliver exceptional products and customer service.' },
        { title: 'Partnership', description: 'We work closely with restaurants to understand their needs.' }
      ]
    }),
    defineField({
      name: 'teamIntro',
      title: 'Team Introduction',
      type: 'text',
      initialValue: 'Meet the passionate team behind Inseat, dedicated to transforming the dining experience.'
    }),
    defineField({
      name: 'team',
      title: 'Team Members',
      type: 'array',
      of: [teamMemberAbout],
      initialValue: [
        {
          name: 'Sarah Johnson',
          role: 'CEO & Founder',
          bio: 'Former restaurant owner with 15 years of hospitality experience.'
        },
        {
          name: 'Mike Chen',
          role: 'CTO',
          bio: 'Tech veteran specializing in scalable restaurant technology solutions.'
        },
        {
          name: 'Emily Rodriguez',
          role: 'Head of Customer Success',
          bio: 'Passionate about helping restaurants maximize their potential.'
        }
      ]
    })
  ]
})