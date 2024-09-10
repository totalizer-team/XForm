import { XBaseForm } from '@totalizer/xform';
import { observer } from 'mobx-react';
import { Stack, Box, Button } from '@mui/material';

import store from './store';
import schema from './schema';

export default observer(() => (
  <Box sx={{
    borderTop: 1,
    borderBottom: 1,
    borderColor: 'divider',
  }}>
    <Box sx={{
      width: 900,
      margin: '0 auto',
      borderLeft: 1,
      borderRight: 1,
      borderColor: 'divider',
    }}>
      <XBaseForm
        path="myFormData"
        store={store}
        schema={schema}
        debug
      />
    </Box>
  </Box>
));
