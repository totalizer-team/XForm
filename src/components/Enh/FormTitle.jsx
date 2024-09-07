import { useEffect } from 'react';
import {
  Stack,
  Typography,
} from '@mui/material';
import { observer } from 'mobx-react';

export default observer(({
  path = '',
  $$store = null,
}) => {
  const {
    title,
    secondary = '',
    align = 'left',
  } = $$store.context(path);

  console.log('~~~ Enh FormTitle', path);

  useEffect(() => {
    $$store.linkage(path);
  }, []);

  return (
    <Stack spacing={0.5}>
      <Typography fontSize={24} align={align}>{title}</Typography>
      <Typography fontSize={16} color="textSecondary" align={align}>{secondary}</Typography>
    </Stack>
  );
});
