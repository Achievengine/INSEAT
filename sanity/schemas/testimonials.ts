import { defineType, defineField } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'object',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text'
    }),
    defineField({
      name: 'author',
      title: 'Author Name',
      type: 'string'
    }),
    defineField({
      name: 'role',
      title: 'Role/Title',
      type: 'string'
    }),
    defineField({
      name: 'avatar',
      title: 'Avatar Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'company',
      title: 'Company/Restaurant',
      type: 'string'
    })
  ]
})

export default defineType({
  name: 'testimonialsSection',
  title: 'Testimonials Section',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Section Headline',
      type: 'string',
      initialValue: 'What Our Customers Say'
    }),
    defineField({
      name: 'subheadline',
      title: 'Section Subheadline',
      type: 'text',
      initialValue: 'Hear from restaurant owners who have transformed their business with Inseat'
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [testimonial],
      initialValue: [
        {
          quote: 'Inseat has completely transformed how we handle orders. Our staff can focus on service instead of taking orders, and our customers love the convenience!',
          author: 'Maria Rodriguez',
          role: 'Owner',
          company: 'La Boca Restaurant'
        },
        {
          quote: 'Since implementing Inseat, we\'ve seen a 28% increase in average order value and a significant reduction in wait times. It\'s been a game-changer for our business.',
          author: 'James Chen',
          role: 'Manager',
          company: 'Fusion Bistro'
        },
        {
          quote: 'The analytics dashboard helps us understand customer preferences and optimize our menu. Plus, the contactless ordering is perfect for today\'s health-conscious diners.',
          author: 'Samantha Lee',
          role: 'Director',
          company: 'Urban Plate'
        }
      ]
    })
  ]
})