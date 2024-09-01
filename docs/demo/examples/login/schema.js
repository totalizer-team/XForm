const schema = {
  account: {
    c: 'TextField',
    xs: 12,
    label: 'Username or Email',
  },
  password: {
    c: 'TextField',
    xs: 12,
    label: 'password',
    type: 'password',
  },
  remember: {
    c: 'Checked',
    xs: 12,
    label: 'Remember me',
    secondary: 'Forget Password?',
    secondaryHref: '/',
  },
};
export default schema;
