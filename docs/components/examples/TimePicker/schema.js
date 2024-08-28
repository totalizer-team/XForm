import dayjs from 'dayjs';

const schema = {
  default: {
    c: 'TimePicker',
    xs: 12,
    label: 'default',
    default: '10:30:00',
    helperText: 'helperText HH:mm',
    minTime: dayjs('08:30:00', 'HH:mm:ss'),
    maxTime: dayjs('21:30:00', 'HH:mm:ss'),
  },
  HHmmss: {
    c: 'TimePicker',
    xs: 12,
    label: 'HH:mm:ss',
    views: ['hours', 'minutes', 'seconds'],
  },

  disabled: {
    c: 'TimePicker',
    xs: 12,
    label: 'diabled',
    disabled: true,
  },
};
export default schema;
