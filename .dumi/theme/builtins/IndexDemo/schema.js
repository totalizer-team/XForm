const schema = {
  _title: {
    c: 'Enh.FormTitle',
    xs: 12,
    title: 'Edit User Information',
    secondary: 'This is an example of a form built using XForm.',
    align: 'center',
  },
  firstName: {
    c: 'TextField',
    xs: 6,
    label: 'First Name',
    required: true,
  },
  lastName: {
    c: 'TextField',
    xs: 6,
    label: 'Last Name',
    required: true,
  },
  _rest: {
    c: 'Enh.FormButton',
    xs: 6,
    text: 'Reset',
    size: 'large',
    alignItems: 'center',
    justifyContent: 'end',
    width: 100,
    variant: 'outlined',
    onClick: ({ reset }) => {
      reset();
    },
  },
  _submit: {
    c: 'Enh.FormButton',
    xs: 6,
    text: 'Submit',
    size: 'large',
    alignItems: 'center',
    justifyContent: 'start',
    width: 100,
    onClick: ({ getFormValues, validate }) => {
      if (validate()) {
        console.log(getFormValues());
      } else {
        console.log('VERIFICATION FAILED');
      }
    },
  },
};
export default schema;
