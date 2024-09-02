const schema = {
  _title: {
    c: 'Enh.FormTitle',
    xs: 12,
    title: 'Welcome to XForm! 👋🏻',
    secondary: 'Please sign-in to your account and start the adventure',
  },
  signInMethod: {
    c: 'Radio',
    xs: 12,
    options: ['username', 'phone'],
    default: 'username',
    row: true,
    onChange: (v, { $set }) => {
      if (v === 'username') {
        $set('account', 'visible', true);
        $set('password', 'visible', true);
        $set('phone', 'visible', false);
        $set('code', 'visible', false);
      } else if (v === 'phone') {
        $set('account', 'visible', false);
        $set('password', 'visible', false);
        $set('phone', 'visible', true);
        $set('code', 'visible', true);
      }
    },
  },
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
  phone: {
    c: 'TextField',
    xs: 12,
    label: 'Phone Number',
    visible: false,
  },
  code: {
    c: 'TextField',
    xs: 8,
    label: 'Code',
    visible: false,
  },
  remember: {
    c: 'Checked',
    xs: 6,
    title: 'Remember me',
  },
  _link: {
    c: 'Enh.Link',
    xs: 6,
    alignItems: 'center',
    justifyContent: 'end',
    title: 'Forget Password?',
    href: '/',
  },
};
export default schema;
