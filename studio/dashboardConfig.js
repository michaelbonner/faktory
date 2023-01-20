export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'vercel',
          },
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/michaelbonner/faktory',
            category: 'Code',
          },
          { title: 'Frontend', value: 'https://www.faktoryagency.com/', category: 'apps' },
        ],
      },
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' },
    },
    { name: 'project-users', layout: { height: 'auto' } },
  ],
}
