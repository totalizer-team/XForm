const schema = {
  title: {
    c: 'XTextField',
    xs: 12,
    label: '标题',
    rule: (value) => {
      if (value === '') return '必填';
      return '';
    },
  },
  pwd: {
    c: 'XTextField',
    xs: 12,
    label: '密码',
  },
  pwd2: {
    c: 'XTextField',
    xs: 12,
    label: '确认密码',
    rule: (value, { $getValue }) => {
      const pwd = $getValue('pwd');
      if (value !== pwd) return '两次密码必须一致';
      return '';
    },
  },
};
export default schema;
