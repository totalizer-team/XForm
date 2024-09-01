import { useMemo } from 'react';
import { observer } from 'mobx-react';

import { Stack, Box, Button } from '@mui/material';

import _repair from './core/repair';

import $$Store from './core/Store';

import FormRenderingEngine from './engine/FormRenderingEngine';
import Dashboard from './debug/Dashboard';

const FormButton = observer(({
  $$store = null,
  hasSubmit = false,
  submitText = 'Submit',
  onSubmit = () => {},
}) => {
  if (hasSubmit) {
    return (
      <Button
        variant="contained"
        // size="large"
        onClick={() => {
          $$store.validateAll();
          if ($$store.isCorrect) {
            onSubmit();
          }
        }}
      >
        {submitText}
      </Button>
    );
  }

  return '';
});

const XBaseForm = observer(({
  path = '',
  store = null,
  schema,
  debug = false,

  hasSubmit = false,
  submitText = 'Submit',
  onSubmit = () => {},
}) => {
  console.log('~~~ XBaseForm');

  const correctSchema = useMemo(() => _repair(schema), [schema]);
  const $$store = useMemo(() => new $$Store(path, store, schema), [path, store, schema]);

  if (debug) {
    return (
      <Box sx={{ position: 'relative', width: '100%' }}>
        <Box sx={{
          width: '60%', minHeight: 400, p: 4, boxSizing: 'border-box',
        }}
        >
          <Stack spacing={2}>
            <FormRenderingEngine
              path={path}
              store={store}
              schema={correctSchema}
              $$store={$$store}
            />
            <FormButton
              $$store={$$store}
              hasSubmit={hasSubmit}
              submitText={submitText}
              onSubmit={onSubmit}
            />
          </Stack>
        </Box>
        <Box sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '40%',
        }}
        >
          <Dashboard store={store} $$store={$$store} path={path} width="100%" height="100%" />
        </Box>
      </Box>
    );
  }

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <FormRenderingEngine
        path={path}
        store={store}
        schema={correctSchema}
        $$store={$$store}
      />
      <FormButton
        $$store={$$store}
        hasSubmit={hasSubmit}
        submitText={submitText}
        onSubmit={onSubmit}
      />
    </Stack>
  );
});

export { XBaseForm };
