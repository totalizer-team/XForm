const schema = {
  default: {
    c: 'MultipleSelect',
    xs: 12,
    label: '默认样式 ',
    variant: 'outlined',
    helperText: 'helperText , 至少需要选则2个选项 ',
    default: [1, 2],
    options: [
      { label: '选项1', value: 1 },
      { label: '选项2', value: 2 },
      { label: '选项3', value: 3 },
      { label: '选项4', value: 4 },
      { label: '选项5', value: 5 },
      { label: '禁止选项', value: -1, disabled: true },
    ],
    rule: (v) => {
      if (v.length < 2) return '选项不能少于2个';
      return '';
    },
  },
  checkbox: {
    c: 'MultipleSelect',
    xs: 12,
    label: '复选框样式',
    variant: 'outlined',
    default: [1, 2],
    options: [
      { label: '选项1', value: 1 },
      { label: '选项2', value: 2 },
      { label: '选项3', value: 3 },
      { label: '选项4', value: 4 },
      { label: '选项5', value: 5 },
      { label: '禁止选项', value: -1, disabled: true },
    ],
    checkbox: true,
  },
  chip: {
    c: 'MultipleSelect',
    xs: 12,
    label: '标签样式',
    variant: 'outlined',
    default: [1, 2],
    options: [
      { label: '选项1', value: 1 },
      { label: '选项2', value: 2 },
      { label: '选项3', value: 3 },
      { label: '选项4', value: 4 },
      { label: '选项5', value: 5 },
      { label: '禁止选项', value: -1, disabled: true },
    ],
    checkbox: true,
    chip: true,
  },
};
export default schema;
