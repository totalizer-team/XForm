import { useEffect } from 'react';
import {
  Select, MenuItem, FormControl, FormLabel, FormHelperText, RadioGroup, FormControlLabel, Checkbox,
} from '@mui/material';
import { observer } from 'mobx-react';

export default observer(({
  path = '',
  $$store = null,
}) => {
  const {
    label,
    disabled,
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
  _options.map((el) => {
    checked.set(el.value, value.includes(el.value));
  });

  const componentsProps = {};

  return (
    <FormControl fullWidth error={!!errorMsg}>
      <FormLabel disabled={disabled}>{label}</FormLabel>
      <RadioGroup
        row={row}
      >
        {_options.map((el, i) => (
          <FormControlLabel
            value={i}
            key={el.value}
            control={(
              <Checkbox
                checked={checked.get(el.value)}
                onChange={(e, v) => {
                  checked.set(el.value, v);
                  const res = [];
                  for (const [k, v] of checked.entries()) {
                    if (v) res.push(k);
                  }
                  $$store.setValue(path, res);
                  $$store.validate(path);
                }}
              />
            )}
            label={el.label}
            disabled={disabled || !!el.disabled}
          />
        ))}
      </RadioGroup>
      <FormHelperText>{errorMsg || helperText}</FormHelperText>
    </FormControl>
  );
});
