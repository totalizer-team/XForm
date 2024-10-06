import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';

export default observer(({ path = '', $$store = null }) => {
  const {
    label,
    disabled,
    required,
    helperText,
    options = [],
    errorMsg,
    variant = 'outlined',
  } = $$store.context(path);

  console.log('~~~ Select', path);

  const value = $$store.getValue(path);

  useEffect(() => {
    $$store.linkage(path);
  }, [value]);

  const _options = options.map((el) => {
    if (typeof el === 'object') return el;
    return {
      label: el,
      value: el,
    };
  });

  const componentsProps = {};

  return (
    <FormControl fullWidth error={!!errorMsg} variant={variant}>
      <InputLabel disabled={disabled} required={required}>
        {label}
      </InputLabel>
      <Select
        label={label}
        value={value}
        disabled={disabled}
        variant={variant}
        {...componentsProps}
      >
        {_options.map((el) => (
          <MenuItem
            value={el.value}
            key={el.value}
            onClick={() => {
              $$store.setValue(path, el.value);
              $$store.validate(path);
            }}
            disabled={el.disabled}
          >
            {el.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{errorMsg || helperText}</FormHelperText>
    </FormControl>
  );
});
