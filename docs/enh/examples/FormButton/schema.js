const schema = {
  _title: {
    c: 'Enh.FormTitle',
    xs: 8,
    title: 'Enh.FormButton',
  },
  _setting: {
    c: 'Enh.FormButton',
    xs: 4,
    text: 'SETTING',
    alignItems: 'center',
    justifyContent: 'end',
    size: 'small',
    variant: 'text',
    fullWidth: false,
    onClick: () => {
      console.log('setting');
    },
  },
  Username: {
    c: 'TextField',
    xs: 12,
    label: 'Username',
  },
  _reset: {
    c: 'Enh.FormButton',
    xs: 6,
    text: 'RESET',
    alignItems: 'center',
    justifyContent: 'center',
    size: 'large',
    variant: 'outlined',
    onClick: ({ reset }) => {
      reset();
    },
  },
  _sbumit: {
    c: 'Enh.FormButton',
    xs: 6,
    text: 'SUBMIT',
    alignItems: 'center',
    justifyContent: 'center',
    size: 'large',
    onClick: ({ getFormValues }) => {
      console.log(getFormValues());
    },
  },
};
export default schema;
