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
    },
    {
      name: 'topMargin',
      type: 'string',
      title: 'Top Spacing',
      options: {
        list: [
          { title: 'Small', value: '1rem' },
          { title: 'Medium', value: '2rem' },
          { title: 'Large', value: '3rem' }
        ]
      }
    },
    {
      name: 'bottomMargin',
      type: 'string',
      title: 'Bottom Spacing',
      options: {
        list: [
          { title: 'Small', value: '1rem' },
          { title: 'Medium', value: '2rem' },
          { title: 'Large', value: '3rem' }
        ]
      }
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
