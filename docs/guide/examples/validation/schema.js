const schema = {
  username: {
    c: 'TextField',
    xs: 12,
    label: 'Username',
    required: true,
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
};
export default schema;
