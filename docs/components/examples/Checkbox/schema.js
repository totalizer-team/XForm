const schema = {
  verticality: {
    c: 'Checkbox',
    xs: 12,
    label: '垂直布局',
    options: [
      { label: '正确选项', value: 1 },
      { label: '错误选项，点击后会提示错误信息', value: 0 },
      { label: '禁止编辑，无法选中这个选项', value: -1, disabled: true },
    ],
    rule: (v) => {
      if (v.includes(0)) return '校验失败，存在错误选项';
      return '';
    },
  },
  horizontally: {
    c: 'Checkbox',
    xs: 12,
    label: '水平布局',
    default: [1, 2],
    options: [
      { label: '默认选项 1', value: 1 },
      { label: '默认选项 2', value: 2 },
      { label: '自定义', value: 3 },
    ],
    row: true,
    helperText: '水平布局提示文案',
  },
  disabled: {
    c: 'Checkbox',
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
