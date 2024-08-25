const schema = {
  information: {
    c: 'ObjectBlock',
    xs: 12,
    label: '身份信息',
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
  account: {
    c: 'ObjectBlock',
    xs: 12,
    label: '账户信息',
    schema: {
      email: {
        c: 'TextField',
        xs: 12,
        label: '邮箱地址',
      },
      phone: {
        c: 'TextField',
        xs: 12,
        label: '电话号码',
      },
    },
  },
};
export default schema;
