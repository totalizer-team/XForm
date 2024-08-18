const schema = {
  type: {
    c: 'XSelect',
    xs: 12,
    label: '是否展示标题',
    default: 2,
    options: [
      { value: 1, label: '展示标题' },
      { value: 2, label: '隐藏标题' },
    ],
    onChange: ({ getValue, context }) => {
      const value = getValue('myFormData.type');
      const target = context('myFormData.title');
      if (value === 1) {
        target.visible = true;
      }
      if (value === 2) {
        target.visible = false;
      }
    },
  },
  title: {
    c: 'XTextField',
    xs: 12,
    label: '标题',
    visible: (context) => {
      const type = context.getValue('myFormData.type');
      return type === 1;
    },
  },
};
export default schema;
