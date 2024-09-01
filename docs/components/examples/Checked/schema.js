const schema = {
  default: {
    c: 'Checked',
    xs: 12,
    label: '同意',
    helperText: 'helperText',
  },
  agree: {
    c: 'Checked',
    xs: 12,
    label: '同意',

    // rule: (v) => {
    //   if (v.includes(0)) return '校验失败，存在错误选项';
    //   return '';
    // },
  },
  remember: {
    c: 'Checked',
    xs: 12,
    label: 'Remember me',
    secondary: 'Forget Password?',
    secondaryHref: 'https://www.baidu.com',
  },
};
export default schema;
