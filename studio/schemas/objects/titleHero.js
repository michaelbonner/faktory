export default {
  type: 'object',
  name: 'titleHero',
  title: 'Title Hero',
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
      name: 'body',
      type: 'text',
      title: 'Body'
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
