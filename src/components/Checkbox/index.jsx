import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  ListItemText,
  RadioGroup,
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
    row = false,
  } = $$store.context(path);

  console.log('~~~ Checkbox', path, errorMsg);

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

  const checked = new Map();
  _options.forEach((el) => {
    checked.set(el.value, value.includes(el.value));
  });

  return (
    <FormControl error={!!errorMsg}>
      <FormLabel disabled={disabled} required={required}>
        {label}
      </FormLabel>
      <RadioGroup row={row}>
        {_options.map((el, i) => (
          <FormControlLabel
            value={i}
            key={el.value}
            control={
              <Checkbox
                checked={checked.get(el.value)}
                onChange={(e, v) => {
                  checked.set(el.value, v);
                  const res = [];
                  const entries = checked.entries();

                  for (const [subK, subV] of entries) {
                    if (subV) res.push(subK);
                  }
                  $$store.setValue(path, res);
                  $$store.validate(path);
                }}
              />
            }
            label={<ListItemText primary={el.label} secondary={el.secondary} />}
            disabled={disabled || !!el.disabled}
          />
        ))}
      </RadioGroup>
      <FormHelperText>{errorMsg || helperText}</FormHelperText>
    </FormControl>
  );
});
