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
                  buildHookId: '60286cb1f649910ba53a16fe',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-zecfzwgv',
                  apiId: 'a01986c8-f1bb-4159-b8ba-79138451ab14'
                },
                {
                  buildHookId: '60286cb1d15e4537af5c4eda',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-uo5jfaio',
                  apiId: 'fc8cb895-1a69-4ad4-a905-0560987b465d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ryan-snyder/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-uo5jfaio.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
