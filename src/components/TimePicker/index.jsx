import { useEffect, useState } from 'react';
import {
  Select, MenuItem, FormControl, InputLabel, FormHelperText,
} from '@mui/material';

import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';

import { observer } from 'mobx-react';

dayjs.extend(customParseFormat);

export default observer(({
  path = '',
  $$store = null,
}) => {
  const {
    label,
    disabled,
    required,
    helperText,
    errorMsg,
    dataFormat = 'HH:mm:ss',
    ampm = false,
    ...componentsProps
  } = $$store.context(path);

  console.log('~~~ TimePicker', path);

  const [open, setOpen] = useState(false);

  const value = $$store.getValue(path);

  /**
   * 由于禁止键盘输入，所以取消了内置错误时间输入的校验
   */
  // $$store.setRule(path, (v) => {
  //   const {
  //     minTime = null,
  //     maxTime = null,
  //   } = componentsProps;
  //   if (v === 'Invalid Date') return '无效日期';
  //   if (minTime && dayjs(v, dataFormat).isBefore(minTime)) return '无效日期';
  //   if (maxTime && dayjs(v, dataFormat).isAfter(maxTime)) return '无效日期';
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
      <TimePicker
        open={open}
        label={label}
        value={value ? dayjs(value, dataFormat) : null}
        onChange={(v) => {
          $$store.setValue(path, dayjs(v).format(dataFormat));
        }}
        onClose={(() => {
          _validate();
          setOpen(false);
        })}
        onOpen={() => {
          setOpen(true);
        }}
        disabled={disabled}
        slotProps={{
          textField: {
            required,
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
