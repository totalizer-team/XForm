import { Box } from '@mui/material';
import React, { useRef } from 'react';

/**
 * 全局状态
 */
import { observer } from 'mobx-react';
import store from './store';

import { XBaseForm } from '@totalizer/xform';
import VanillaJSONEditor from './VanillaJSONEditor';

import './index.less';

export default observer(() => {
  const contentRef = useRef(null);

  const { content, myFormSchema } = store;
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 64,
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 1200,
      }}
    >
      <Box
        ref={contentRef}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: 400,
          overflow: 'auto',
        }}
      >
        <VanillaJSONEditor
          content={content}
          onChange={(v) => {
            try {
              const json = JSON.parse(v.text);
              store.setSchema(json);
              store.setData();
            } catch {
              store.setSchema(v.text);
            }
            store.setContent(v);
          }}
          mode="text"
        />
      </Box>
      <Box
        ref={contentRef}
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: 800,
          overflow: 'auto',
        }}
      >
        <XBaseForm
          path="myFormData"
          store={store}
          schema={myFormSchema}
          debug
        />
      </Box>
    </Box>
  );
});
