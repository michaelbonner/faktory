export default {
  name: 'person',
  title: 'Person',
  type: 'object',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'image', title: 'Image', type: 'figure' },
    { name: 'title', title: 'Title', type: 'string' }
  ],
  select: {
    media: 'image'
  },
  preview: {
    select: {
      name: 'name',
      media: 'image'
    },
    prepare({ name, media }) {
      return {
        title: `${name}`,
        subtitle: 'Person',
        media
      }
    }
  }
}
