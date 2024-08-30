const schema = {
  outlined: {
    c: 'ObjectBlock',
    xs: 12,
    label: 'outlined',
    variant: 'outlined',
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
        options: ['man', 'woman'],
      },
    },
  },
};
export default schema;
