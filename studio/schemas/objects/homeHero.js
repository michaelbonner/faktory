export default {
  type: 'object',
  name: 'homeHero',
  title: 'Home Hero',
  fields: [
    {
      name: 'headingLine1',
      type: 'string',
      title: 'Heading Line 1'
    },
    {
      name: 'headingLine2',
      type: 'string',
      title: 'Heading Line 2'
    },
    {
      name: 'headingLine3',
      type: 'string',
      title: 'Heading Line 3'
    },
    {
      name: 'tagline',
      type: 'simplePortableText',
      title: 'Tagline'
    },
    {
      name: 'mainCallout',
      type: 'image',
      title: 'Main Callout',
      fields: [
        {
          title: 'Alt Text',
          name: 'alt',
          type: 'string'
        }
      ],
      options: {
        hotspot: true
      }
    },
    {
      name: 'callout1',
      type: 'image',
      title: 'Callout 1',
      fields: [
        {
          title: 'Alt Text',
          name: 'alt',
          type: 'string'
        }
      ],
      options: {
        hotspot: true
      }
    },
    {
      name: 'callout2',
      type: 'image',
      title: 'Callout 2',
      fields: [
        {
          title: 'Alt Text',
          name: 'alt',
          type: 'string'
        }
      ],
      options: {
        hotspot: true
      }
    }
  ],
  preview: {
    select: {
      title: 'headingLine1',
      media: 'backgroundImage'
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Home Hero section',
        media
      }
    }
  }
}
