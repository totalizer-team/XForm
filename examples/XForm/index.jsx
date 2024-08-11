import { useState } from 'react';

import { Box, Button } from '@mui/material';

import XForm from '../../src/XForm';
import store from './store';

import schema from './schema';

export default function () {
  const [visible, setVisible] = useState(true);
  return (
    <Box sx={{ p: 2, width: 600 }}>
      <Button onClick={() => {
        setVisible(true);
      }}
      >
        打开表单
      </Button>
      <XForm
        drawer
        title="表单名称"
        open={visible}
        path="data"
        store={store}
        schema={schema}
        onSave={() => {
          console.log('save');
        }}
        onClose={() => {
          setVisible(false);
        }}
        debug
      />
    </Box>
  );
}
