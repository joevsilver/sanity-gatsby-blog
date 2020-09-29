export default {
  widgets: [
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
                  buildHookId: '5f72f2079643953a0a97e149',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-hbvdxvf2',
                  apiId: 'f42dfba0-859b-4d8a-ba1d-f9a2daaaeb9c'
                },
                {
                  buildHookId: '5f72f2074a0f9b3a45a5f6f1',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-rs8oxxcy',
                  apiId: 'b6622d85-4cfc-4ea2-a10c-17d5c4554938'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joevsilver/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-rs8oxxcy.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
