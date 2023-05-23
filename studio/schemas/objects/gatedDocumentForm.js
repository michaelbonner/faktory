export default {
  name: 'gatedDocumentForm',
  title: 'Gated Document Form',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'First Content Block',
      name: 'firstContentBlock',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Image',
      name: 'image',
      type: 'figure',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Second Content Block',
      name: 'secondContentBlock',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Sign Up Form Title',
      name: 'formTitle',
      type: 'string',
    },
    {
      title: 'Sign Up Form Body',
      name: 'formBody',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Submit Button Text',
      name: 'submitButtonText',
      type: 'string',
    },
    {
      title: 'Success Message',
      name: 'successMessage',
      type: 'portableText',
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'Call to action',
    },
    {
      name: 'emailTo',
      type: 'string',
      title: 'Email To',
      description: 'Email address to send contact form to',
      validation: (Rule) =>
        Rule.required().custom((emailTo) => {
          if (!emailTo) {
            return 'Email is required'
          }

          if (!emailTo.includes('@')) {
            return 'Email must be valid'
          }

          if (!emailTo.includes('.')) {
            return 'Email must be valid'
          }

          if (!emailTo.includes('faktorymail.com')) {
            return 'Email must be a faktorymail.com email'
          }

          return true
        }),
    },
    {
      name: 'mailchimpListId',
      type: 'string',
      title: 'Mailchimp Audience List ID',
    },
  ],
}
