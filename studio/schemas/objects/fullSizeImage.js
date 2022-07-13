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
    },
    {
      name: 'videoId',
      title: 'Video ID',
      type: 'string',
      description: 'Add full URL to video here (e.g. https://vimeo.com/123456789)'
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
