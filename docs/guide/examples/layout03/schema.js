const schema = {
  _rest: {
    c: 'Enh.FormButton',
    xs: 6,
    text: 'Reset',
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
