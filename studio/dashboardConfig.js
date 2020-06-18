export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5eebfc858c3e0593d2320eb9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-1nnkbuqt',
                  apiId: 'bfa3b923-1f6b-42a3-832a-bc5792e83285'
                },
                {
                  buildHookId: '5eebfc853ee7b6abf07c1e8f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-q9fzc1zx',
                  apiId: '134a94e6-aa8e-4db5-9e2b-91633dc19273'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/eduardopiresmartins/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-q9fzc1zx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
