import { useEffect } from 'react';
import {
  Stack,
  Typography,
  Link,
} from '@mui/material';
import { observer } from 'mobx-react';

export default observer(({
  path = '',
  $$store = null,
}) => {
  const {
    title,
    href = '',
  } = $$store.context(path);

  console.log('~~~ Enh Link', path);

  useEffect(() => {
    $$store.linkage(path);
  }, []);

  return (
    <Link align="right" href={href}>{title}</Link>
  );
});
