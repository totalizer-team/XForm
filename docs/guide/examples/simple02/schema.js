const schema = {
  _title: {
    c: 'Enh.FormTitle',
    xs: 12,
    title: 'Adventure starts here 🚀',
    secondary: 'Make your app management easy and fun!',
  },
  title: {
    c: 'TextField',
    xs: 6,
    label: 'Title',
    required: true,
  },
  type: {
    c: 'Select',
    xs: 6,
    label: 'Type',
    options: [1, 2, 3],
    required: true,
  },
  des: {
    c: 'TextField',
    xs: 12,
    label: 'Description',
    multiline: true,
    minRows: 5,
    maxRows: 10,
  },
  _rest: {
    c: 'Enh.FormButton',
    xs: 6,
    text: 'Reset',
    size: 'large',
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
