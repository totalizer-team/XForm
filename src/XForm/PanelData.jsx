import { useState, useEffect } from 'react';
import ReactJson from 'react-json-view';
import { useTheme } from '@mui/material/styles';
import { observer } from 'mobx-react';
import { reaction } from 'mobx';

export default observer(({ store, path, $$store }) => {
  const theme = useTheme();
  const isDark = theme?.palette?.mode === 'dark';

  const { tick } = $$store;
  return (
    <ReactJson
      src={store.$$get(path) || {}}
      style={{ fontSize: 12, lineHeight: 1.2, backgroundColor: 'none' }}
      theme={isDark ? 'monokai' : 'rjv-default'}
      displayDataTypes={false}
      displayObjectSize={false}
      enableClipboard={false}
    />
  );
});
