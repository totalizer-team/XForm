const schema = {
  title: {
    c: 'XTextField',
    xs: 6,
    label: '标题',
    rule: (v) => {
      if (v === '') return '必填';
      return '';
    },
  },
  type: {
    c: 'XSelect',
    xs: 6,
    label: '类型',
    options: [
      { value: 1, label: '正确选项' },
      { value: 2, label: '错误选项' },
    ],
    rule: (v) => {
      if (v === 2) return '这是一个错误选项';
      return '';
    },
  },
  des: {
    c: 'XTextField',
    xs: 12,
    label: '描述',
    multiline: true,
    minRows: 5,
    maxRows: 10,
    rule: (v) => {
      if (v.length < 5) return '至少输入5个字符';
      if (v.length > 10) return '最多输入10个字符';
      return '';
    },
  },
};
export default schema;
