export default {
  type: 'object',
  name: 'imageSection',
  title: 'Image with text',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'text',
      type: 'simplePortableText',
      title: 'Text'
    },
    {
      name: 'image',
      type: 'figure',
      title: 'Image'
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'Call to action'
    },
    {
      name: 'backgroundColor',
      type: 'string',
      title: 'Background Color',
      options: {
        list: [
          { title: 'White', value: 'white' },
          { title: 'Mint', value: 'mint' }
        ]
      }
    }
  ],
  preview: {
    select: {
      heading: 'heading',
      subtitle: 'label',
      media: 'image'
    },
    prepare({ heading, media }) {
      return {
        title: `Image: ${heading}`,
        subtitle: 'Image section',
        media
      }
    }
  }
}
