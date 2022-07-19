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
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'right' }
        ]
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
