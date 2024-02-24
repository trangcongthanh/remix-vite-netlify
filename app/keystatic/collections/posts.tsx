import { collection, component, fields } from '@keystatic/core'

export const posts = collection({
  label: 'Posts',
  slugField: 'title',
  path: './app/keystatic/content/posts/*/',
  format: { contentField: 'content' },
  entryLayout: 'content',
  schema: {
    title: fields.slug({ name: { label: 'Title' } }),
    thumbnail: fields.object({
      url: fields.image({
        label: 'Thumbnail',
        directory: 'public/images/posts',
        publicPath: '/images/posts',
        validation: {
          isRequired: true,
        },
      }),
      caption: fields.text({ label: 'Caption', multiline: true }),
    }),
    summary: fields.text({ label: 'Summary', multiline: true }),
    isDraft: fields.checkbox({ label: 'Is Draft', defaultValue: true }),
    publishedAt: fields.date({
      label: 'Published At',
    }),
    updatedAt: fields.date({
      label: 'Updated At',
    }),
    tags: fields.array(fields.text({ label: 'Tags' }), {
      label: 'Tags',
      itemLabel(p) {
        return (p.value && `#${p.value}`) || 'Unnamed tag'
      },
    }),
    previous: fields.relationship({
      label: 'Previous',
      collection: 'posts',
    }),
    next: fields.relationship({
      label: 'Next',
      collection: 'posts',
    }),
    seo: fields.conditional(fields.checkbox({ label: 'SEO', defaultValue: false }), {
      true: fields.object({
        title: fields.text({ label: 'Title' }),
        image: fields.image({ label: 'Image' }),
      }),
      false: fields.empty(),
    }),
    content: fields.document({
      label: 'Content',
      formatting: true,
      dividers: true,
      links: true,
      images: {
        directory: 'public/images/posts',
        publicPath: '/images/posts',
        schema: {
          alt: fields.text({ label: 'Alt' }),
          title: fields.text({ label: 'Caption' }),
        },
      },
      componentBlocks: {
        youtube: component({
          label: 'Youtube',
          preview({ fields }) {
            return (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                alt='Youtube Player'
                style={{ pointerEvents: 'none' }}
                src={`https://i3.ytimg.com/vi/${fields.id.value}/maxresdefault.jpg`}
              />
            )
          },
          schema: {
            id: fields.text({ label: 'Video Id' }),
            children: fields.text({ label: 'Caption' }),
          },
        }),
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
})
