import { singleton, fields } from '@keystatic/core'

export const aboutMe = singleton({
  label: 'About me',
  schema: {
    title: fields.text({ label: 'Title' }),
    content: fields.document({
      label: 'Content',
      formatting: true,
      dividers: true,
      links: true,
      images: {
        directory: 'public/images/about-me',
        publicPath: '/images/about-me',
      },
      layouts: [
        [1, 1],
        [1, 1, 1],
        [2, 1],
        [1, 2],
        [1, 2, 1],
      ],
    }),
  },
  path: './app/keystatic/content/about-me/',
  format: { contentField: 'content' },
  entryLayout: 'content',
})
