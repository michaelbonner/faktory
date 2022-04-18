export default {
  type: 'object',
  name: 'fullSizeImage',
  title: 'Full Size Image',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Background image',
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: {
      media: 'image'
    },
    prepare({ title, media }) {
      return {
        media
      }
    }
  }
}
