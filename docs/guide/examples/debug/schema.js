const schema = {
  title: {
    c: 'TextField',
    xs: 6,
    label: '标题',
  },
  type: {
    c: 'Select',
    xs: 6,
    label: '类型',
    options: [1, 2, 3],
  },
  des: {
    c: 'TextField',
    xs: 12,
    label: '描述',
    multiline: true,
    minRows: 5,
    maxRows: 10,
  },
};
export default schema;
