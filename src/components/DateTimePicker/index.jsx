import { useEffect } from 'react';
import {
  Select, MenuItem, FormControl, InputLabel, FormHelperText,
} from '@mui/material';

import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';

import { observer } from 'mobx-react';

export default observer(({
  path = '',
  $$store = null,
}) => {
  const {
    label,
    disabled,
    helperText,
    errorMsg,
    dataFormat = 'YYYY-MM-DD',
    ...componentsProps
  } = $$store.context(path);

  console.log('~~~ DatePicker', path);

  const value = $$store.getValue(path);

  $$store.setRule(path, (v) => {
    const {
      minDate = dayjs('1900-01-01'),
      maxDate = dayjs('2099-12-31'),
    } = componentsProps;
    if (v === 'Invalid Date') return '无效日期';
    if (dayjs(v, dataFormat).isBefore(minDate, 'day') || dayjs(v, dataFormat).isAfter(maxDate, 'day')) { return '无效日期'; }
    return '';
  });

  useEffect(() => {
    $$store.linkage(path);
  }, [value]);

  // const componentsProps = {
  //   openTo, orientation, maxDate, minDate, format,
  // };

  const _validate = () => {
    $$store.validate(path);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={value ? dayjs(value, dataFormat) : null}
        onChange={(v) => {
          $$store.setValue(path, dayjs(v).format(dataFormat));
        }}
        onClose={(() => {
          _validate();
        })}
        disabled={disabled}
        slotProps={{
          textField: {
            size: 'medium',
            error: !!errorMsg,
            helperText: errorMsg || helperText,
            fullWidth: true,
            onBlur: () => {
              _validate();
            },
          },
        }}
        {...componentsProps}
      />
    </LocalizationProvider>
  );
});
