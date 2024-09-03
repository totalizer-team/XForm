import { useEffect, useState } from 'react';

import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

import { observer } from 'mobx-react';

export default observer(({ path = '', $$store = null }) => {
  const {
    label,
    disabled,
    helperText,
    errorMsg,
    dataFormat = 'YYYY-MM-DD',
    ...componentsProps
  } = $$store.context(path);

  console.log('~~~ DatePicker', path);

  const [open, setOpen] = useState(false);

  const value = $$store.getValue(path);

  /**
   * 由于禁止键盘输入，所以取消了内置错误时间输入的校验
   */
  // $$store.setRule(path, (v) => {
  //   const { minDate = dayjs('1900-01-01'), maxDate = dayjs('2099-12-31') } =
  //     componentsProps;
  //   if (v === 'Invalid Date') return '无效日期';
  //   if (
  //     dayjs(v, dataFormat).isBefore(minDate, 'day') ||
  //     dayjs(v, dataFormat).isAfter(maxDate, 'day')
  //   ) {
  //     return '无效日期';
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
      <DatePicker
        open={open}
        label={label}
        value={value ? dayjs(value, dataFormat) : null}
        onChange={(v) => {
          $$store.setValue(path, dayjs(v).format(dataFormat));
        }}
        onClose={() => {
          _validate();
          setOpen(false);
        }}
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
        {...componentsProps}
      />
    </LocalizationProvider>
  );
});
