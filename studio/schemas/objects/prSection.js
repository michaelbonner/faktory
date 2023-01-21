export default {
  title: 'PR Section',
  name: 'prSection',
  type: 'object',
  fields: [
    {
      title: 'PR Items',
      name: 'prItems',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'prItem' }],
          options: {
            disableNew: true,
          },
        },
      ],
    },
  ],
}
