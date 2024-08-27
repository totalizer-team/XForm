import { useEffect } from 'react';
import {
  Select, MenuItem, FormControl, InputLabel, FormHelperText, OutlinedInput, Checkbox, ListItemText,
  Box, Chip,
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
    checkbox = false,
    chip = false,
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
    <FormControl fullWidth error={!!errorMsg}>
      <InputLabel disabled={disabled}>{label}</InputLabel>
      <Select
        value={value}
        multiple
        disabled={disabled}
        input={<OutlinedInput label={label} />}
        renderValue={(selected) => {
          const labels = _options.filter((el) => selected.includes(el.value)).map((el) => el.label);
          if (chip) {
            return (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {labels.map((str, i) => (
                  <Chip key={i} label={str} />
                ))}
              </Box>
            );
          }
          return labels.join(', ');
        }}
        onChange={(e) => {
          $$store.setValue(path, e.target.value);
          $$store.validate(path);
        }}
        {...componentsProps}
      >
        {_options.map((el) => (
          <MenuItem
            value={el.value}
            key={el.value}
            disabled={el.disabled}
          >
            {checkbox && <Checkbox checked={!!value.includes(el.value)} />}
            {/* {el.label} */}
            <ListItemText primary={el.label} />
          </MenuItem>
        ))}

      </Select>
      <FormHelperText>{errorMsg || helperText}</FormHelperText>

    </FormControl>
  );
});
