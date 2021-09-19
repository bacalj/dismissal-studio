import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    {
      name: 'student',
      title: 'students',
      type: 'document',
      fields: [
        {
          title: 'First Name',
          name: 'firstName',
          type: 'string'
        },
        {
          title: 'Last Name',
          name: 'lastName',
          type: 'string'
        },
        {
          title: 'Class',
          name: 'class',
          type: 'string'
        },
        {
          title: 'Status',
          name: 'status',
          type: 'string',
          options: {
            list: [
              {title: 'absent', value: 'absent'},
              {title: 'walking', value: 'walking'},
              {title: 'waiting', value: 'waiting'},
              {title: 'picked up', value: 'picked-up'}
            ]
          }
        }
      ]
    }
  ]),
})
