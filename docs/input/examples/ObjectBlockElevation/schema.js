const schema = {
  elevation: {
    c: 'ObjectBlock',
    xs: 12,
    label: 'elevation',
    variant: 'elevation',
    elevation: 3,
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
