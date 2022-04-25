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
                  buildHookId: '6266684566256867edc01f82',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-zos8pxb7',
                  apiId: 'aa43ea71-d8df-429a-8055-7766032f8b0a'
                },
                {
                  buildHookId: '62666846aa84587028b28d62',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-5hgu189w',
                  apiId: '61cbea54-56a1-45ba-b64f-b032a9f67ec8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/katgolek/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-5hgu189w.netlify.app', category: 'apps' }
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
