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
                  buildHookId: '603cd9b7060121d9775367cf',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-3gv1mar7',
                  apiId: 'b606fe61-aa3d-4f39-bf5d-78610f49561e'
                },
                {
                  buildHookId: '603cd9b7b79b0ddc876f99a0',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-1uhmreqi',
                  apiId: '037c2dc2-d358-4ebf-aa0d-fe2ecc35eebe'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jugglingcats/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-1uhmreqi.netlify.app', category: 'apps' }
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
