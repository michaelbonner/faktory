export default {
  name: 'office',
  title: 'Office',
  type: 'document',
  fields: [
    { name: 'office', title: 'Office', type: 'string' },
    { name: 'info', title: 'Info', type: 'array', of: [{ type: 'block' }] }
  ],
  preview: {
    select: {
      name: 'office'
    },
    prepare({ name }) {
      return {
        title: `${name}`,
        subtitle: 'Office Contact Info'
      }
    }
  }
}
