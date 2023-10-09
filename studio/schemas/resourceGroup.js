const resourceGroup = {
  name: 'resourceGroup',
  title: 'Resource Group',
  type: 'object',
  fields: [
    {
      name: 'resources',
      title: 'Resources',
      type: 'array',
      of: [
        {
          type: 'resource',
        },
      ],
    },
  ],
};

export default resourceGroup;
