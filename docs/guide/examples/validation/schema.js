const schema = {
  username: {
    c: 'TextField',
    xs: 12,
    label: 'Username',
    required: true,
  },
  pwd: {
    c: 'TextField',
    xs: 12,
    label: 'Password',
    required: true,
  },
  pwd2: {
    c: 'TextField',
    xs: 12,
    label: 'Confirm Password',
    required: true,
    rule: (value, { get }) => {
      const pwd = get('pwd', 'value');
      if (value !== pwd) return '两次密码必须一致';
      return '';
    },
  },
};
export default schema;
