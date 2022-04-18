export default {
  type: 'object',
  name: 'titleWithGridTextBlocks',
  title: 'Title With Grid Text Blocks',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'column1',
      type: 'array',
      title: 'Column 1',
      of: [{ type: 'block' }]
    },
    {
      name: 'column2',
      type: 'array',
      title: 'Column 2',
      of: [{ type: 'block' }]
    },
    {
      name: 'column3',
      type: 'array',
      title: 'Column 3',
      of: [{ type: 'block' }]
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Title With Grid Text Blocks'
      }
    }
  }
}
