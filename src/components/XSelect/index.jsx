import { useEffect } from 'react';
import {
  Select, MenuItem, FormControl, InputLabel, FormHelperText,
} from '@mui/material';
import { observer } from 'mobx-react';

export default observer(({
  // label = '',
  // value = '',
  // onChange = () => {},
  // options = [],
  // disabled,

  path = '',
  $$store = null,
}) => {
  /**
   * schema 中的配置信息，用于配置组件的功能
   */
  const {
    label,
    disabled,
    readOnly,
    helperText,
    options,
    errorMsg,
  } = $$store.context(path);

  const value = $$store.getValue(path);
  $$store.linkage(path);

  const _options = options.map((el) => {
    if (typeof el === 'object') return el;
    return {
      label: el,
      value: el,
    };
  });

  return (
    <FormControl fullWidth error={!!errorMsg}>
      <InputLabel disabled={disabled}>{label}</InputLabel>
      <Select
        label={label}
        value={value}
        disabled={disabled}
      >
        {_options.map((el) => (
          <MenuItem
            value={el.value}
            key={el.value}
            onClick={() => {
              $$store.setValue(path, el.value);
            }}
          >
            {el.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{errorMsg || helperText}</FormHelperText>

    </FormControl>
  );
});
