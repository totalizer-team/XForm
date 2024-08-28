import { useState, useEffect } from 'react';
import {
  Select, MenuItem, FormControl, InputLabel, FormHelperText,
} from '@mui/material';

import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';

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
    dataFormat = 'YYYY-MM-DD HH:mm:ss',
    ampm = false,
    ...componentsProps
  } = $$store.context(path);

  console.log('~~~ DateTimePicker', path);

  const [open, setOpen] = useState(false);

  const value = $$store.getValue(path);

  /**
   * 由于禁止键盘输入，所以取消了内置错误时间输入的校验
   */
  // $$store.setRule(path, (v) => {
  //   const {
  //     minDate = dayjs('1900-01-01'),
  //     maxDate = dayjs('2099-12-31'),
  //     minTime = null,
  //     maxTime = null,
  //     minDateTime = null,
  //     maxDateTime = null,
  //   } = componentsProps;
  //   if (v === 'Invalid Date') return '无效日期';

  //   const dataTime = dayjs(v, dataFormat);
  //   // 比较日期
  //   if (
  //     dataTime.isBefore(minDate, 'day')
  //     || dataTime.isAfter(maxDate, 'day')
  //   ) { return '无效日期'; }
  //   // 比较时间
  //   if (minTime || maxTime) {
  //     const time = dayjs(dayjs(v, dataFormat).format('HH:mm:ss'), 'HH:mm:ss');
  //     if (minTime && time.isBefore(minTime)) return '无效日期';
  //     if (maxTime && time.isAfter(maxTime)) return '无效日期';
  //   }
  //   // 比较日期和时间
  //   if (minDateTime || maxDateTime) {
  //     if (minDateTime && dataTime.isBefore(minDateTime)) return '无效日期';
  //     if (maxDateTime && dataTime.isAfter(maxDateTime)) return '无效日期';
  //   }
  //   return '';
  // });

  useEffect(() => {
    $$store.linkage(path);
  }, [value]);

  const _validate = () => {
    $$store.validate(path);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        open={open}
        label={label}
        value={value ? dayjs(value, dataFormat) : null}
        onChange={(v) => {
          $$store.setValue(path, dayjs(v).format(dataFormat));
        }}
        onClose={(() => {
          setOpen(false);
          _validate();
        })}
        onOpen={() => {
          setOpen(true);
        }}
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
            readOnly: true,
            inputProps: {
              onClick: () => {
                if (disabled) return;
                setOpen(true);
              },
              style: {
                cursor: 'pointer',
              },
            },
          },
        }}
        ampm={ampm}
        {...componentsProps}
      />
    </LocalizationProvider>
  );
});
