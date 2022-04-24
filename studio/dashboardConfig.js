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
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62657fcbdf1bec4ac471dc8b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-oevwf8dq',
                  apiId: '1db6c619-a1d1-4069-9da3-8dde3fc64a23'
                },
                {
                  buildHookId: '62657fcb4e2f104f74159001',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-hoh1d7nd',
                  apiId: '6c149a22-f797-4371-a260-b0d04591a94b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Pablety/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-hoh1d7nd.netlify.app', category: 'apps' }
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
