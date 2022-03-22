export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'vercel',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '623954593ec0203fdc7fe856',
                  title: 'Sanity Studio',
                  name: 'faktory-studio',
                  apiId: '90c31bb8-f0ff-4def-9d9f-583ae6dc7dc9'
                },
                {
                  buildHookId: '62395459645d2b454c6258c6',
                  title: 'Faktory Website',
                  name: 'faktory',
                  apiId: '80d77f4f-867e-4e39-a408-75c9074f51ae'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/michaelbonner/faktory',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://faktory-web.vercel.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
