const schema = {
  organizationName: {
    c: 'TextField',
    xs: 12,
    label: 'Organization Name',
  },
  member: {
    c: 'ArrayList',
    xs: 12,
    label: 'Member',
    schema: {
      name: {
        c: 'TextField',
        xs: 6,
        label: 'Name',
      },
      sex: {
        c: 'Select',
        xs: 6,
        label: 'Sex',
        options: ['male', 'female'],
      },
    },
  },
};
export default schema;
