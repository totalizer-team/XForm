import { useEffect } from 'react';
import {
  Switch, FormControl, FormLabel, FormHelperText, FormControlLabel,
} from '@mui/material';
import { observer } from 'mobx-react';

export default observer(({
  path = '',
  $$store = null,
}) => {
  const {
    label,
    onTitle = '',
    offTitle = '',
    disabled,
    required,
    helperText,
    errorMsg,
    labelPlacement = 'end',
  } = $$store.context(path);

  console.log('~~~ Select', path);

  const value = $$store.getValue(path);

  useEffect(() => {
    $$store.linkage(path);
  }, [value]);

  return (
    <FormControl error={!!errorMsg}>
      <FormLabel disabled={disabled} required={required}>{label}</FormLabel>
      <FormControlLabel
        sx={{
          justifyContent: 'start',
          '& .MuiFormControlLabel-labelPlacementStart': {
            ml: 0,
          },
        }}
        control={(
          <Switch
            checked={value}
            disabled={disabled}
            onChange={(e) => {
              $$store.setValue(path, e.target.checked);
              $$store.validate(path);
            }}
          />
        )}
        label={value ? onTitle : offTitle}
        labelPlacement={labelPlacement}
      />
      <FormHelperText>{errorMsg || helperText}</FormHelperText>

    </FormControl>
  );
});
