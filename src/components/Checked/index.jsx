import {
  Stack,
  Typography,
  Link,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  ListItemText,
  RadioGroup,
} from '@mui/material';
import { observer } from 'mobx-react';
import { useEffect } from 'react';

export default observer(({ path = '', $$store = null }) => {
  const {
    label,
    disabled,
    secondary = '',
    secondaryHref = '',
    helperText,
    errorMsg,
  } = $$store.context(path);

  console.log('~~~ Checkbox', path, errorMsg);

  const value = $$store.getValue(path);

  useEffect(() => {
    $$store.linkage(path);
  }, [value]);

  const componentsProps = {};

  return (
    <FormControl fullWidth error={!!errorMsg}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <FormControlLabel
          control={(
            <Checkbox
              checked={value}
              onChange={(e, v) => {
                $$store.setValue(path, v);
                $$store.validate(path);
              }}
            />
            )}
          label={label}
          disabled={disabled}
        />
        {secondaryHref
          ? <Link href={secondaryHref}>{secondary}</Link>
          : <Typography>{secondary}</Typography>}

      </Stack>
      <FormHelperText>{errorMsg || helperText}</FormHelperText>
    </FormControl>
  );
});
