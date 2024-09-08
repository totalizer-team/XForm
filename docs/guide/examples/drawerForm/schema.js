const schema = {
  title: {
    c: 'TextField',
    xs: 6,
    label: 'Title',
    required: true,
  },
  type: {
    c: 'Select',
    xs: 6,
    label: 'Type',
    options: [1, 2, 3],
    required: true,
  },
  des: {
    c: 'TextField',
    xs: 12,
    label: 'Description',
    multiline: true,
    minRows: 5,
    maxRows: 10,
  },
};
export default schema;
