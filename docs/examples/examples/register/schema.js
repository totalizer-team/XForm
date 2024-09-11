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
    required: true,
  },
  email: {
    c: 'TextField',
    xs: 12,
    label: 'Email',
    required: true,
    rule: (value) => {
      if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))) return 'Please enter the correct email!';
      return '';
    },
  },
  password: {
    c: 'TextField',
    xs: 12,
    label: 'Password',
    type: 'password',
    placeholder: 'Set the login password',
    helperText: 'Passwords must be at least 6 characters.',
    required: true,
    rule: (value) => {
      if (value.length < 6) return 'Passwords must be at least 6 characters.';
      return '';
    },
  },
  confirmPassword: {
    c: 'TextField',
    xs: 12,
    label: 'Confirm Password',
    type: 'password',
    placeholder: 'Enter the login password again',
    required: true,
    rule: (value, { get }) => {
      const password = get('password', 'value');
      if (value !== password) return 'The two passwords do not match. Please enter them again!';
      return '';
    },
  },
  agree: {
    c: 'Checked',
    xs: 12,
    title: 'I agree to [Terms of Use](/) and [Privacy Policy](/)',
    rule: (value) => {
      if (value !== true) return 'Please check the agreement!';
      return '';
    },
  },
  _btn: {
    c: 'Enh.FormButton',
    xs: 12,
    text: 'SIGN UP',
    size: 'large',
    alignItems: 'center',
    justifyContent: 'center',
    onClick: ({ getFormValues, validate }) => {
      if (validate()) {
        console.log(getFormValues());
      } else {
        console.log('VERIFICATION FAILED');
      }
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
