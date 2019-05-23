export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5ce64fef1e8e6498a2aad78f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-cms-studio',
                  apiId: '66283193-8cd1-40cd-b560-74fca762b794'
                },
                {
                  buildHookId: '5ce64fef4a9175bad5992feb',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-cms',
                  apiId: 'edca2298-8135-4676-b8d5-6e01edee2bcd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jdelos/sanity-gatsby-cms',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-cms.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
