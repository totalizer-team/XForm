import { useMemo } from 'react';
import { observer } from 'mobx-react';

import { Stack, Box } from '@mui/material';

import {
  _repairSchema,
} from './core/_UTILS';
import $$Store from './core/_STORE';

import FormRenderingEngine from './engine/FormRenderingEngine';
import Dashboard from './debug/Dashboard';

const XBaseForm = observer(({
  path = '',
  store = null,
  schema,
  debug = false,
}) => {
  const correctSchema = useMemo(() => _repairSchema(schema), [schema]);
  const $$store = useMemo(() => new $$Store(path, store, correctSchema), []);

  if (debug) {
    return (
      <Stack direction="row">
        <Box sx={{ width: '60%', p: 4 }}>
          <FormRenderingEngine
            path={path}
            store={store}
            schema={correctSchema}
            $$store={$$store}
          />
        </Box>
        <Dashboard store={store} $$store={$$store} path={path} width="40%" height={400} />
      </Stack>
    );
  }

  return (
    <FormRenderingEngine
      path={path}
      store={store}
      schema={correctSchema}
      $$store={$$store}
    />
  );
});

export { XBaseForm };
