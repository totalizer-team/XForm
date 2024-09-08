const schema = {
  information: {
    c: 'ObjectBlock',
    xs: 12,
    label: 'Information',
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
  contact: {
    c: 'ObjectBlock',
    xs: 12,
    label: 'Contact',
    schema: {
      email: {
        c: 'TextField',
        xs: 12,
        label: 'Email',
      },
      phone: {
        c: 'TextField',
        xs: 12,
        label: 'Phone Number',
      },
    },
  },
};
export default schema;
