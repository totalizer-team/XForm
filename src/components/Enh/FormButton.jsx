import { useState, useEffect } from 'react';
import {
  Stack,
  Typography,
  Link,
  Button,
} from '@mui/material';
import { observer } from 'mobx-react';

export default observer(({
  path = '',
  $$store = null,
}) => {
  const {
    text = '',
    size = 'large',
    color = 'primary',
    variant = 'contained',
    disabled = false,
    fullWidth = true,
    onClick = () => { },
  } = $$store.context(path);

  console.log('~~~ Enh LockButtom', path);

  useEffect(() => {
    $$store.linkage(path);
  }, []);

  return (
    <Button
      fullWidth={fullWidth}
      variant={variant}
      size={size}
      color={color}
      disabled={disabled}
      onClick={() => {
        onClick($$store);
      }}
      sx={{
        textTransform: 'none',
      }}
    >
      {text}
    </Button>
  );
});
