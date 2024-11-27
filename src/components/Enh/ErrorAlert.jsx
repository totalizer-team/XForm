import { Alert, AlertTitle } from '@mui/material';
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';

export default observer(({ path = '', $$store = null }) => {
  const { name = '', errorMessage = '' } = $$store.context(path);

  console.log('~~~ Enh FormTitle', path);

  useEffect(() => {
    $$store.linkage(path);
  }, []);

  return (
    <Alert severity="error">
      <AlertTitle>{name}</AlertTitle>
      {errorMessage}
    </Alert>
  );
});
