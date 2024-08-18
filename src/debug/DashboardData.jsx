import { useState, useEffect } from 'react';
import JsonView from '@uiw/react-json-view';
import { vscodeTheme } from '@uiw/react-json-view/vscode';

import { useTheme } from '@mui/material/styles';
import { observer } from 'mobx-react';

export default observer(({ store, path, $$store }) => {
  const theme = useTheme();
  const isDark = theme?.palette?.mode === 'dark';

  const { tick } = $$store;

  const style = isDark ? { vscodeTheme } : {};

  return (
    <JsonView
      value={store.$$get(path) || {}}
      style={style}
      displayObjectSize={false}
      displayDataTypes={false}
      enableClipboard={false}
    />
  );
});
