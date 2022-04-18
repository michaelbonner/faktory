export default {
  type: 'object',
  name: 'quoteSection',
  title: 'Quote',
  fields: [
    {
      name: 'quote',
      type: 'text',
      title: 'Quote'
    },
    {
      name: 'author',
      type: 'string',
      title: 'Author'
    }
  ],
  preview: {
    select: {
      quote: 'quote'
    },
    prepare({ quote }) {
      return {
        title: `${quote}`,
        subtitle: 'Quote section'
      }
    }
  }
}
