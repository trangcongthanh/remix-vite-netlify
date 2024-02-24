import { fields, singleton } from '@keystatic/core'

export const settings = singleton({
  label: 'Settings',
  path: './app/keystatic/content/settings',
  schema: {
    logo: fields.image({
      label: 'Logo',
      directory: 'public/images/homepage',
      publicPath: '/images/homepage',
      validation: {
        isRequired: true,
      },
    }),
    title: fields.text({
      label: 'Title',
    }),
    description: fields.text({
      label: 'Description',
    }),
    headline1: fields.text({ label: 'Headline 1', multiline: true }),
    headline2: fields.text({ label: 'Headline 2', multiline: true }),
    socials: fields.array(
      fields.object({
        url: fields.text({ label: 'URL' }),
        icon: fields.select({
          label: 'Icon',
          options: [
            { label: 'Github', value: 'github' },
            { label: 'Facebook', value: 'facebook' },
            { label: 'Twitter', value: 'twitter' },
            { label: 'Instagram', value: 'instagram' },
            { label: 'Linkedin', value: 'linkedin' },
            { label: 'Youtube', value: 'youtube' },
          ],
          defaultValue: 'github',
        }),
      }),
      {
        label: 'Socials',
        itemLabel(p) {
          return p.fields?.icon?.value || 'Untitle social link'
        },
      },
    ),
    mainNavigation: fields.array(
      fields.object({
        url: fields.text({ label: 'URL' }),
        label: fields.text({ label: 'Label' }),
      }),
      {
        label: 'Main Navigation',
        itemLabel(p) {
          return p.fields?.label?.value || 'Untitle navigation'
        },
      },
    ),
  },
})
