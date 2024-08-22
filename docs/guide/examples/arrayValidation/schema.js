const schema = {
  member: {
    c: 'ArrayList',
    xs: 12,
    label: '成员',
    schema: {
      type: {
        c: 'Select',
        xs: 6,
        label: '语言',
        options: ['en', 'zh'],
      },
      name: {
        c: 'TextField',
        xs: 6,
        label: '姓名',
        rule: (value, { $getValue, prefixPath }) => {
          const type = $getValue(`${prefixPath}.type`);
          if (type === 'en' && !/^[A-Za-z]+$/.test(value)) {
            return '请输入英文';
          }
          if (type === 'zh' && !/^[\u4e00-\u9fa5]+$/.test(value)) {
            return '请输入中文';
          }
          return '';
        },
      },
    },
  },
};
export default schema;
