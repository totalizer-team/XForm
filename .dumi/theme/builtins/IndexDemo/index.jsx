import { Box } from '@mui/material';
import { XBaseForm } from '@totalizer/xform';
import { observer } from 'mobx-react';

import schema from './schema';
import store from './store';

export default observer(() => (
  <Box
    sx={{
      borderTop: 1,
      borderBottom: 1,
      borderColor: 'divider',
    }}
  >
    <Box
      sx={{
        width: 1100,
        margin: '0 auto',
        borderLeft: 1,
        borderRight: 1,
        borderColor: 'divider',
      }}
    >
      <XBaseForm path="myFormData" store={store} schema={schema} debug />
    </Box>
  </Box>
));
