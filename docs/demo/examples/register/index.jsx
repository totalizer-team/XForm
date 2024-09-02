import {
  Stack,
  Typography,
  Link,
} from '@mui/material';
import { XBaseForm } from '@totalizer/xform';
import { observer } from 'mobx-react';

import store from './store';
import schema from './schema';

export default observer(() => (
  <Stack spacing={2} width={400} sx={{ margin: '0 auto' }}>
    <XBaseForm
      path="myFormData"
      store={store}
      schema={schema}
      hasSubmit
      submitText="Sign In"
      onSubmit={() => { }}
    />

    <Stack direction="row" justifyContent="center" spacing={1}>
      <Typography>Already have an account?</Typography>
      <Link href="/demo/login">Sign in instead</Link>
    </Stack>
  </Stack>
));
