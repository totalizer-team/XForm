const schema = {
  outlined: {
    c: 'Select',
    xs: 4,
    label: 'outlined',
    variant: 'outlined',
    options: ['a', 'b', 'c'],
  },
  filled: {
    c: 'Select',
    xs: 4,
    label: 'filled',
    variant: 'filled',
    options: ['a', 'b', 'c'],
  },
  standard: {
    c: 'Select',
    xs: 4,
    label: 'standard',
    variant: 'standard',
    options: ['a', 'b', 'c'],
  },
  helperText: {
    c: 'Select',
    xs: 12,
    label: 'helperText ',
    variant: 'outlined',
    helperText: 'helperText ',
    default: 1,
    options: [
      { label: '默认选项', value: 1 },
      { label: '错误选项', value: 0 },
      { label: '禁止选项', value: -1, disabled: true },
    ],
    rule: (v) => {
      if (v === 0) return '错误选项';
      return '';
    },
  },
  disabled: {
    c: 'Select',
    xs: 12,
    label: '禁止编辑',
    options: ['a', 'b', 'c'],
    disabled: true,
  },
};
export default schema;
