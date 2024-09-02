const schema = {
  _title: {
    c: 'Enh.FormTitle',
    xs: 12,
    title: 'Adventure starts here 🚀',
    secondary: 'Make your app management easy and fun!',
  },
  username: {
    c: 'TextField',
    xs: 12,
    label: 'Username',
  },
  email: {
    c: 'TextField',
    xs: 12,
    label: 'Email',
  },
  password: {
    c: 'TextField',
    xs: 12,
    label: 'Password',
    type: 'password',
    placeholder: 'Set the login password',
    helperText: 'Passwords must be at least 6 characters.',
  },
  confirmPassword: {
    c: 'TextField',
    xs: 12,
    label: 'Confirm Password',
    type: 'password',
    placeholder: 'Enter the login password again',
  },

  agree: {
    c: 'Checked',
    xs: 12,
    title: 'I agree to [Terms of Use](/) and [Privacy Policy](/)',
    default: true,
  },
};
export default schema;
