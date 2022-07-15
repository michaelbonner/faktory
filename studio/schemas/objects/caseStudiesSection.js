export default {
  type: 'object',
  name: 'caseStudiesSection',
  title: 'Case Studies',
  fields: [
    {
      title: 'Case Studies',
      name: 'caseStudies',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'caseStudy' }],
          options: {
            disableNew: true
          }
        }
      ]
    }
  ]
}
