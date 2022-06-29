export default {
  type: 'object',
  name: 'contactInfo',
  title: 'Contact Info',
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
        title: 'Contact Info'
      }
    }
  }
}
