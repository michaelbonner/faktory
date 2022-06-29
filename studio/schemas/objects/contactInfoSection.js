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
          type: 'office'
        }
      ]
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Contact Info Section',
        subtitle: 'Contact Info Section'
      }
    }
  }
}
