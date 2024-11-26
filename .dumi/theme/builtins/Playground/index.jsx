import { Box, Button } from '@mui/material';
import React, { useRef, useState } from 'react';

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

  const { myFormSchema } = store;
  const [content, setContent] = useState({ text: '' });
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
      <Button
        onClick={() => {
          try {
            const json = JSON.parse(content.text);
            store.setSchema(json);
          } catch (e) {
            // ...
            console.log(e);
          }
        }}
      >
        调试
      </Button>
      <Box
        ref={contentRef}
        sx={{
          position: 'absolute',
          top: 30,
          left: 0,
          bottom: 0,
          width: 400,
          overflow: 'auto',
        }}
      >
        <VanillaJSONEditor
          content={content}
          onChange={setContent}
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
