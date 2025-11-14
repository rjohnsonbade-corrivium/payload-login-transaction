import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'arrayTest',
      type: 'array',
      fields: [
        {
          name: 'test',
          type: 'text',
          defaultValue: 'test123',
        },
      ],
    },
  ],
}
