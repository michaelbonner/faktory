import { ClipboardImageIcon } from '@sanity/icons'

export default {
  name: 'caseStudy',
  type: 'document',
  title: 'Case Study',
  icon: ClipboardImageIcon,
  fieldsets: [
    {
      title: 'SEO & metadata',
      name: 'metadata'
    }
  ],
  fields: [
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
      name: 'caseStudyImage',
      type: 'image',
      title: 'Case Study Image'
    },
    {
      name: 'title',
      type: 'string',
      title: 'Project Title'
    },
    {
      name: 'client',
      type: 'string',
      title: 'Client'
    },
    {
      title: 'Color List',
      description: 'Background color for /case-studies page',
      name: 'colors',
      type: 'string',
      options: {
        list: [
          { title: 'Salmon', value: '#eebaa5' },
          { title: 'Green', value: '#bedbd4' },
          { title: 'Grey', value: '#e2e2e2' }
        ]
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
        { type: 'quoteSection' }
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
      media: 'caseStudyImage'
    }
  }
}
