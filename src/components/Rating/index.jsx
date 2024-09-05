import { useEffect } from 'react';
import {
  Rating, FormControl, FormLabel, FormHelperText, FormControlLabel,
} from '@mui/material';
import { observer } from 'mobx-react';

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
    /**
     * componentProps
     */
    color,
    marks,
    max,
    min,
    name,
    orientation,
    scale,
    shiftStep,
    step,
    tabIndex,
    track,
    valueLabelDisplay,
    valueLabelFormate,

  } = $$store.context(path);

  const componentProps = {
    color,
    marks,
    max,
    min,
    name,
    orientation,
    scale,
    shiftStep,
    step,
    tabIndex,
    track,
    valueLabelDisplay,
    valueLabelFormate,
  };

  Object.keys(componentProps).forEach((key) => {
    if (componentProps[key] === undefined) delete componentProps[key];
  });

  console.log('~~~ Slider', path);

  const value = $$store.getValue(path);

  useEffect(() => {
    $$store.linkage(path);
  }, [value]);

  return (
    <FormControl fullWidth error={!!errorMsg}>
      <FormLabel disabled={disabled} required={required}>{label}</FormLabel>
      <Rating
        value={value}
        disabled={disabled}
        onChange={(e, v) => {
          $$store.setValue(path, v || 0);
          $$store.validate(path);
        }}
        {...componentProps}
      />
      <FormHelperText>{errorMsg || helperText}</FormHelperText>
    </FormControl>
  );
});
