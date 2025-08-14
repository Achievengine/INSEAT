import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'demoForm',
  title: 'Demo Form Section',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Section Headline',
      type: 'string',
      initialValue: 'Ready to Transform Your Restaurant?'
    }),
    defineField({
      name: 'subheadline',
      title: 'Section Subheadline',
      type: 'text',
      initialValue: 'See Inseat in action with a personalized demo tailored to your restaurant\'s needs.'
    }),
    defineField({
      name: 'benefits',
      title: 'Key Benefits',
      type: 'array',
      of: [{ type: 'string' }],
      initialValue: [
        '15-minute personalized walkthrough',
        'See real restaurant examples',
        'Custom pricing for your needs',
        'Implementation timeline discussion'
      ]
    }),
    defineField({
      name: 'formFields',
      title: 'Form Configuration',
      type: 'object',
      fields: [
        {
          name: 'nameLabel',
          title: 'Name Field Label',
          type: 'string',
          initialValue: 'Restaurant Name'
        },
        {
          name: 'emailLabel',
          title: 'Email Field Label',
          type: 'string',
          initialValue: 'Email Address'
        },
        {
          name: 'phoneLabel',
          title: 'Phone Field Label',
          type: 'string',
          initialValue: 'Phone Number'
        },
        {
          name: 'messageLabel',
          title: 'Message Field Label',
          type: 'string',
          initialValue: 'Tell us about your restaurant'
        },
        {
          name: 'submitButtonText',
          title: 'Submit Button Text',
          type: 'string',
          initialValue: 'Book Your Demo'
        }
      ]
    }),
    defineField({
      name: 'successMessage',
      title: 'Success Message',
      type: 'text',
      initialValue: 'Thank you! We\'ll contact you within 24 hours to schedule your personalized demo.'
    }),
    defineField({
      name: 'privacyNote',
      title: 'Privacy Note',
      type: 'text',
      initialValue: 'We respect your privacy. Your information will never be shared with third parties.'
    })
  ]
})