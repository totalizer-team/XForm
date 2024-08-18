import { useState, useEffect } from 'react';
import JsonView from '@uiw/react-json-view';
import { vscodeTheme } from '@uiw/react-json-view/vscode';
import { useTheme } from '@mui/material/styles';
import { observer } from 'mobx-react';
import { reaction } from 'mobx';

export default observer(({ $$store }) => {
  const theme = useTheme();
  const isDark = theme?.palette?.mode === 'dark';

  const { tick } = $$store;
  const style = isDark ? { vscodeTheme } : {};

  return (
    <JsonView
      value={$$store.componentStatus}
      style={style}
      displayObjectSize={false}
      displayDataTypes={false}
      enableClipboard={false}
    />
  );
  // return (
  //   <ReactJson
  //     src={$$store.componentStatus}
  //     style={{ fontSize: 12, lineHeight: 1.2, backgroundColor: 'none' }}
  //     theme={isDark ? 'monokai' : 'rjv-default'}
  //     displayDataTypes={false}
  //     displayObjectSize={false}
  //     enableClipboard={false}
  //   />
  // );
});
