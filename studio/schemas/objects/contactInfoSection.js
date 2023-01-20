export default {
  type: 'object',
  name: 'contactInfoSection',
  title: 'Contact Info Section',
  fields: [
    {
      name: 'contact',
      type: 'array',
      title: 'Contact',
      of: [
        {
          type: 'office',
        },
      ],
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
  ],
  preview: {
    prepare() {
      return {
        title: 'Contact Info Section',
        subtitle: 'Contact Info Section',
      }
    },
  },
}
