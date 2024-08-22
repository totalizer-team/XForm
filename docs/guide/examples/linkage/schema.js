const schema = {
  type: {
    c: 'Select',
    xs: 12,
    label: '是否展示标题',
    default: 2,
    options: [
      { value: 1, label: '展示标题' },
      { value: 2, label: '隐藏标题' },
    ],
    onChange: (value, { $get, $set }) => {
      if (value === 1) {
        $set('title', 'visible', true);
      }
      if (value === 2) {
        $set('title', 'visible', false);
      }
    },
  },
  title: {
    c: 'TextField',
    xs: 12,
    label: '标题',
  },
};
export default schema;
