const schema = {
  outlined: {
    c: 'TextField',
    xs: 4,
    label: 'outlined',
    variant: 'outlined',
  },
  filled: {
    c: 'TextField',
    xs: 4,
    label: 'filled',
    variant: 'filled',
  },
  standard: {
    c: 'TextField',
    xs: 4,
    label: 'standard',
    variant: 'standard',
  },
  password: {
    c: 'TextField',
    xs: 12,
    label: 'password',
    type: 'password',
  },
  multiline: {
    c: 'TextField',
    xs: 12,
    label: 'multiline',
    multiline: true,
    minRows: 5,
    maxRows: 10,
  },

  endAdornment: {
    c: 'TextField',
    xs: 12,
    label: 'endAdornment',
    endAdornment: 'kg',
  },
  startAdornment: {
    c: 'TextField',
    xs: 12,
    label: 'startAdornment',
    startAdornment: '$',
  },
  placeholder: {
    c: 'TextField',
    xs: 12,
    label: 'placeholder',
    variant: 'outlined',
    placeholder: 'placeholder',
  },
  helperText: {
    c: 'TextField',
    xs: 12,
    label: 'helperText',
    variant: 'outlined',
    helperText: 'helperText',
  },
};
export default schema;
