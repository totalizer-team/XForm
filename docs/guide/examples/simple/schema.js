const schema = {
  title: {
    c: 'XTextField',
    xs: 6,
    label: '标题',
  },
  type: {
    c: 'XSelect',
    xs: 6,
    label: '类型',
    options: [1, 2, 3],
  },
  des: {
    c: 'XTextField',
    xs: 12,
    label: '描述',
    multiline: true,
    minRows: 5,
    maxRows: 10,
  },
};
export default schema;
