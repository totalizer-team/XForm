const schema = {
  member: {
    c: 'ArrayList',
    xs: 12,
    label: 'Member',
    schema: {
      type: {
        c: 'Select',
        xs: 6,
        label: 'Language',
        options: ['en', 'zh'],
      },
      name: {
        c: 'TextField',
        xs: 6,
        label: 'Name',
        rule: (value, { get, prefixPath }) => {
          const type = get(`${prefixPath}.type`, 'value');
          if (type === 'en' && !/^[A-Za-z]+$/.test(value)) {
            return 'Please input in English.';
          }
          if (type === 'zh' && !/^[\u4e00-\u9fa5]+$/.test(value)) {
            return 'Please input in Chinese.';
          }
          return '';
        },
      },
    },
  },
};
export default schema;
