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
  _btn: {
    c: 'Enh.FormButton',
    xs: 12,
    text: 'SIGN UP',
    size: 'large',
    alignItems: 'center',
    justifyContent: 'center',
    onClick: ($$store) => {
      console.log($$store.getValue($$store.path));
    },
  },
  _link2: {
    c: 'Enh.Typography',
    xs: 12,
    alignItems: 'center',
    justifyContent: 'center',
    text: 'Already have an account? [Sign in instead](/demo/login)',
  },
};
export default schema;
