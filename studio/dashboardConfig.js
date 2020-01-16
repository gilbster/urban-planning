export default {
  widgets: [
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
                  buildHookId: '5e1f6113ef244a8f15e5a4cf',
                  title: 'Sanity Studio',
                  name: 'urban-planning-studio',
                  apiId: '740ac6d0-f013-4a47-ba0e-b073edeff449'
                },
                {
                  buildHookId: '5e1f6113957725b0355ab76f',
                  title: 'Landing pages Website',
                  name: 'urban-planning',
                  apiId: '69af7f89-e768-463b-a3b2-18c87d128313'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gilbster/urban-planning',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://urban-planning.netlify.com', category: 'apps'}
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
