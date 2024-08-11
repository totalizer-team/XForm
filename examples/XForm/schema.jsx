const schema = {
  type: {
    c: 'XSelect',
    // xs: 12,
    label: '类型',
    // default: '',
    // disabled: false,
    // readOnly: false,
    helperText: '这是一个 Select 组件',
    rule: (v) => {
      if (v === 3) return 'not 3';
      return '';
    },
    options: [1, 2, 3],
  },
  title: {
    c: 'XTextField',
    xs: 6,
    label: '标题',
    default: '',

    disabled: false,
    readOnly: false,
    helperText: '这是一个 Input 组件',
    rule: (v) => {
      if (v === '') return '必填';
      return '';
    },
    visible: (context) => {
      const type = context.getValue('data.type');
      return !!(type === 2);
    },
  },

  // des: {
  //   c: 'XTextField',
  //   xs: 12,
  //   label: '描述',
  //   default: '',
  //   multiline: true,
  //   minRows: 20,
  //   maxRows: 50,
  //   disabled: false,
  //   readOnly: false,
  //   helperText: '这是一个 Input 组件',
  //   rule: (v) => {
  //     if (v === '') return '必填';
  //     return '';
  //   },
  // },
  // meaning: {
  //   c: 'ObjectForm',
  //   xs: 12,
  //   label: 'meaning',
  //   default: { en: '', cn: '' },
  //   schema: {
  //     title: {
  //       c: 'XTextField',
  //       xs: 6,
  //       label: '标题',
  //       default: '',

  //       disabled: false,
  //       readOnly: false,
  //       helperText: '这是一个 Input 组件',
  //       rule: (v) => {
  //         if (v === '') return '必填';
  //         return '';
  //       },
  //     },
  //     type: {
  //       c: 'XSelect',
  //       xs: 6,
  //       label: '类型',
  //       default: '',
  //       disabled: false,
  //       readOnly: false,
  //       helperText: '这是一个 Select 组件',
  //       rule: (v) => {
  //         if (v === 3) return 'not 3';
  //         return '';
  //       },
  //       options: [1, 2, 3],
  //     },
  //   },
  // },
  // examples: {
  //   c: 'ListForm',
  //   xs: 12,
  //   label: 'examples',
  //   schema: {
  //     title: {
  //       c: 'XTextField',
  //       xs: 6,
  //       label: '标题',
  //       default: '',
  //       disabled: false,
  //       readOnly: false,
  //       helperText: '这是一个 Input 组件',
  //       rule: (v) => {
  //         if (v === '') return '必填';
  //         return '';
  //       },
  //     },
  //     type: {
  //       c: 'XSelect',
  //       xs: 6,
  //       label: '类型',
  //       default: '',
  //       disabled: false,
  //       readOnly: false,
  //       helperText: '这是一个 Select 组件',
  //       rule: (v) => {
  //         if (v === 3) return 'not 3';
  //         return '';
  //       },
  //       options: [1, 2, 3],
  //     },
  //     abc: {
  //       c: 'ListForm',
  //       label: 'c',
  //       default: [{ label: 1 }],
  //       schema: {
  //         label: {
  //           c: 'XTextField',
  //           xs: 6,
  //           label: 'label',
  //         },
  //       },
  //     },
  //   },
  // },
};
export default schema;
