import JsonView from '@totalizer/json-view';
// import { vscodeTheme } from '@uiw/react-json-view/vscode';
import React from 'react';

import { useTheme } from '@mui/material/styles';
import { observer } from 'mobx-react';

export default observer(({ store, path, $$store }) => {
  const theme = useTheme();
  // eslint-disable-next-line no-unused-vars
  const isDark = theme?.palette?.mode === 'dark';

  // eslint-disable-next-line no-unused-vars
  const { tick } = $$store;

  // const style = isDark ? { vscodeTheme } : {};

  return (
    <JsonView
      value={store.$$get(path) || {}}
      // style={style}
      displayObjectSize={false}
      displayDataTypes={false}
      enableClipboard={false}
    />
  );
});
