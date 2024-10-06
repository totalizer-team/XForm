import { Link } from '@mui/material';
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';

export default observer(({ path = '', $$store = null }) => {
  const { title, href = '' } = $$store.context(path);

  console.log('~~~ Enh Link', path);

  useEffect(() => {
    $$store.linkage(path);
  }, []);

  return (
    <Link align="right" href={href}>
      {title}
    </Link>
  );
});
