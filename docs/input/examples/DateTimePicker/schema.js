import dayjs from 'dayjs';

const schema = {
  default: {
    c: 'DateTimePicker',
    xs: 12,
    label: 'default',
    default: '2024-12-31 10:30:00',
    helperText: 'helperText',
    minDateTime: dayjs('2024-01-01 08:30:00', 'YYYY-MM-DD HH:mm:ss'),
    maxDateTime: dayjs('2024-12-31 21:30:00', 'YYYY-MM-DD HH:mm:ss'),
  },
  format: {
    c: 'DateTimePicker',
    xs: 12,
    label: 'format ',
    views: ['day', 'month', 'year', 'hours', 'minutes', 'seconds'],
    format: 'YYYY-MM-DD HH:mm:ss',
    helperText: 'YYYY-MM-DD HH:mm:ss',
  },

  disabled: {
    c: 'DateTimePicker',
    xs: 12,
    label: 'diabled',
    disabled: true,
  },
};
export default schema;
