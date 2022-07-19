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
      name: 'textAlign',
      type: 'string',
      title: 'Text alignment',
      options: {
        list: [
          { title: 'Justified', value: 'justify' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'right' }
        ]
      }
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
          { title: 'Light gray', value: 'light-gray' },
          { title: 'Lighter gray', value: 'lighter-gray' },
          { title: 'Mint', value: 'mint' },
          { title: 'Peach', value: 'peach' }
        ]
      }
    },
    {
      name: 'imagePosition',
      type: 'string',
      title: 'Image Position',
      options: {
        list: [
          { title: 'Image on left', value: 'left' },
          { title: 'Image on right', value: 'right' }
        ]
      },
      default: 'left'
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
