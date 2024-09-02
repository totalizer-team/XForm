const schema = {
  verticality: {
    c: 'Radio',
    xs: 12,
    label: '垂直布局',
    options: [
      { label: '正确选项', value: 1 },
      {
        label: '错误选项',
        secondary: '点击后会提示错误信息',
        value: 0,
      },
      {
        label: '禁止编辑',
        secondary: '无法选中这个选项',
        value: -1,
        disabled: true,
      },
    ],
    rule: (v) => {
      if (v === 0) return '校验失败，错误选项';
      return '';
    },
  },
  horizontally: {
    c: 'Radio',
    xs: 12,
    label: '水平布局',
    default: 'default',
    options: [
      { label: '默认选项', value: 'default' },
      { label: '自定义 a', value: 'a' },
      { label: '自定义 b', value: 'b' },
    ],
    row: true,
    helperText: '水平布局提示文案',
  },
  disabled: {
    c: 'Radio',
    xs: 12,
    label: '禁止编辑',
    options: [
      { label: '自定义 a', value: 'a' },
      { label: '自定义 b', value: 'b' },
    ],
    row: true,
    disabled: true,
  },
};
export default schema;
