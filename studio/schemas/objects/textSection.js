export default {
  type: 'object',
  name: 'textSection',
  title: 'Text',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading'
    },
    {
      name: 'text',
      type: 'portableText',
      title: 'Text'
    },
    {
      name: 'textAlign',
      type: 'string',
      title: 'Text alignment',
      options: {
        list: [
          { title: 'Justified', value: 'justify' },
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'right' }
        ]
      }
    },
    {
      title: 'Color List',
      description: 'Background color',
      name: 'colors',
      type: 'string',
      options: {
        list: [
          { title: 'Salmon', value: '#eebaa5' },
          { title: 'Green', value: '#bedbd4' },
          { title: 'Grey', value: '#e2e2e2' }
        ]
      }
    },
    {
      name: 'textColor',
      type: 'string',
      title: 'Text color',
      description: 'Text color',
      options: {
        list: [
          { title: 'Almost White', value: '#f4f4f4' },
          { title: 'Dark Grey', value: '#2f2d2d' }
        ]
      }
    },
    {
      name: 'backgroundImage',
      type: 'image',
      title: 'Background image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'Call to action'
    }
  ],
  preview: {
    select: {
      heading: 'heading'
    },
    prepare({ heading }) {
      return {
        title: `${heading}`,
        subtitle: 'Text section'
      }
    }
  }
}
