const schema = {
  member: {
    c: 'ArrayList',
    xs: 12,
    label: '成员',
    schema: {
      name: {
        c: 'TextField',
        xs: 6,
        label: '姓名',
      },
      sex: {
        c: 'Select',
        xs: 6,
        label: '性别',
        options: ['男', '女'],
      },
    },
  },
};
export default schema;
