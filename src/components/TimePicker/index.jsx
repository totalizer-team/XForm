import { useEffect } from 'react';
import {
  Select, MenuItem, FormControl, InputLabel, FormHelperText,
} from '@mui/material';
import { observer } from 'mobx-react';

export default observer(({
  path = '',
  $$store = null,
}) => {
  const {
    label,
    disabled,
    readOnly,
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
      <InputLabel disabled={disabled}>{label}</InputLabel>
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
