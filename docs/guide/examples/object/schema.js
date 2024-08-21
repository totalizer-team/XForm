const schema = {
  title: {
    c: 'XTextField',
    xs: 6,
    label: '标题',
  },

  info: {
    c: 'ObjectForm',
    xs: 12,
    label: '信息',
    schema: {
      type: {
        c: 'XSelect',
        xs: 6,
        label: '类型',
        options: [1, 2, 3],
      },
      des: {
        c: 'XTextField',
        xs: 6,
        label: '描述',
      },
    },
  },
};
export default schema;
