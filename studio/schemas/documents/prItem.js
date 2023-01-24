import { ClipboardImageIcon } from '@sanity/icons'

export default {
  name: 'prItem',
  type: 'document',
  title: 'PR Item',
  icon: ClipboardImageIcon,
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata',
    },
    {
      title: 'PR Item Card',
      name: 'card',
    },
    {
      title: 'PR Item Page Content',
      name: 'pageContent',
    },
  ],
  fields: [
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      title: 'Post Title',
      name: 'title',
      type: 'string',
      fieldset: 'card',
    },
    {
      title: 'Date Override (optional)',
      name: 'date',
      type: 'date',
      placeholder: 'YYYY-MM-DD. Leave blank for today.',
      initialValue: new Date().toISOString().split('T')[0],
      fieldset: 'card',
    },
    {
      title: 'Short Post Description',
      name: 'shortDescription',
      type: 'text',
      fieldset: 'card',
    },
    {
      title: 'Button Text Override (optional)',
      name: 'buttonTextOverride',
      type: 'string',
      description: 'Leave blank to default to "Read More"',
      fieldset: 'card',
    },
    {
      name: 'image',
      type: 'image',
      title: 'PR Item Image',
      fieldset: 'pageContent',
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
        { type: 'contactInfoSection' },
        { type: 'workItemsSection' },
      ],
      fieldset: 'pageContent',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'This description populates meta-tags on the webpage',
      fieldset: 'metadata',
    },
    {
      name: 'openGraphImage',
      type: 'image',
      title: 'Open Graph Image',
      description: 'Image for sharing previews on Facebook, Twitter etc.',
      fieldset: 'metadata',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
}
