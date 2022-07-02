export default {
  type: 'object',
  name: 'workItemsSection',
  title: 'Work Items',
  fields: [
    {
      title: 'Work Items',
      name: 'workItems',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'workItem' }],
          options: {
            disableNew: true
          }
        }
      ]
    }
  ]
}
