export default {
  type: 'object',
  name: 'leadershipTeam',
  title: 'Leadership Team',
  fields: [
    {
      name: 'team',
      type: 'array',
      title: 'Team',
      of: [
        {
          type: 'person'
        }
      ]
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Leadership Team'
      }
    }
  }
}
