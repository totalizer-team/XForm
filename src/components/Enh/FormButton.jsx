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
    size = 'medium',
    color = 'primary',
    variant = 'contained',
    disabled = false,
    fullWidth = true,
    width,
    onClick = () => { },
  } = $$store.context(path);

  console.log('~~~ Enh LockButtom', path);

  useEffect(() => {
    $$store.linkage(path);
  }, []);

  const extraProps = {};
  if (width) extraProps.width = width;

  return (
    <Button
      fullWidth={fullWidth}
      variant={variant}
      size={size}
      color={color}
      disabled={disabled}
      onClick={() => {
        onClick($$store.events(path));
      }}
      sx={{
        textTransform: 'none',
        ...extraProps,
      }}
    >
      {text}
    </Button>
  );
});
