import { JoystickIcon } from '@sanity/icons'

export default {
  name: 'workItem',
  type: 'document',
  title: 'Work Item',
  icon: JoystickIcon,
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata'
    }
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .slice(0, 200)
      }
    },
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      of: [
        { type: 'titleHero' },
        { type: 'homeHero' },
        { type: 'fullSizeImage' },
        { type: 'imageSection' },
        { type: 'textSection' },
        { type: 'titleWithGridTextBlocks' },
        { type: 'quoteSection' },
        { type: 'leadershipTeam' },
        { type: 'contactInfoSection' }
      ]
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'This description populates meta-tags on the webpage',
      fieldset: 'metadata'
    },
    {
      name: 'openGraphImage',
      type: 'image',
      title: 'Open Graph Image',
      description: 'Image for sharing previews on Facebook, Twitter etc.',
      fieldset: 'metadata'
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'openGraphImage'
    }
  }
}
