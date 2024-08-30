import { useEffect } from 'react';
import {
  Select, MenuItem, ListItemText,
  FormControl, FormLabel, FormHelperText, RadioGroup, FormControlLabel, Radio,
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

  console.log('~~~ Raido', path, errorMsg);

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
    <FormControl error={!!errorMsg}>
      <FormLabel disabled={disabled}>{label}</FormLabel>
      <RadioGroup
        row={row}
        value={_options.findIndex((el) => el.value === value)}
        onChange={(e, v) => {
          $$store.setValue(path, _options[parseInt(v, 10)].value);
          $$store.validate(path);
        }}
      >
        {_options.map((el, i) => (
          <FormControlLabel
            value={i}
            key={el.value}
            control={<Radio />}
            label={(
              <ListItemText
                primary={el.label}
                secondary={el.secondary}
              />
            )}
            disabled={disabled || !!el.disabled}
          />
        ))}
      </RadioGroup>
      <FormHelperText>{errorMsg || helperText}</FormHelperText>
    </FormControl>
  );
});
