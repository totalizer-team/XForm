import dayjs from 'dayjs';

const schema = {
  default: {
    c: 'DatePicker',
    xs: 12,
    label: 'default',
    helperText: 'default',
    default: dayjs().format('YYYY-MM-DD'),
    minDate: dayjs().subtract(7, 'day'),
    maxDate: dayjs().add(7, 'day'),
    rule: (v) => {
      if (dayjs(v).isAfter(dayjs())) return '不能选择今天之后的日期';
      return '';
    },
  },
  format: {
    c: 'DatePicker',
    xs: 12,
    label: 'format',
    helperText: 'YYYY-MM-DD',
    default: dayjs().format('YYYY-MM-DD'),
    minDate: dayjs().subtract(7, 'day'),
    maxDate: dayjs().add(7, 'day'),
    format: 'YYYY-MM-DD',
    rule: (v) => {
      if (dayjs(v).isAfter(dayjs())) return '不能选择今天之后的日期';
      return '';
    },
  },
  month: {
    c: 'DatePicker',
    xs: 12,
    label: '月份 ',
    views: ['month'],
    format: 'MMMM',
    dataFormat: 'MM',
  },
  year: {
    c: 'DatePicker',
    xs: 12,
    label: '年份 ',
    views: ['year'],
    format: 'YYYY',
    dataFormat: 'YYYY',
  },
  yearAndMonth: {
    c: 'DatePicker',
    xs: 12,
    label: '年份和月份 ',
    views: ['year', 'month'],
    dataFormat: 'YYYY-MM',
  },

  disabled: {
    c: 'DatePicker',
    xs: 12,
    label: 'disabled ',
    default: dayjs().format('YYYY-MM-DD'),
    disabled: true,
  },
};
export default schema;
