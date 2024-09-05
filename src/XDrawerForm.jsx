import { useMemo } from 'react';
import { observer } from 'mobx-react';

import {
  Box, Drawer, Toolbar, IconButton, Typography, Stack,
} from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import _repair from './core/repair';

import $$Store from './core/Store';

import FormRenderingEngine from './engine/FormRenderingEngine';

import Dashboard from './debug/Dashboard';

const XDrawerForm = observer(({
  path = '',
  store = null,
  schema,

  width = 600,

  open = false,
  anchor = 'left',
  title = '',
  debug = false,
  onClose = () => { },
  onSave = () => { },
}) => {
  const correctSchema = useMemo(() => _repair(schema), [schema]);

  const $$store = useMemo(() => new $$Store(path, store, schema), []);

  return (
    <Drawer
      open={open}
      onClose={onClose}
      anchor={anchor}
    >
      <Stack
        direction="row"
        alignItems="start"
      >
        <Stack
          sx={{
            width,
            display: 'flex',
            height: '100vh',
            flexDirection: 'column',
            borderLeft: 1,
            borderColor: 'divider',
          }}
        >
          <Toolbar
            sx={{
              position: 'sticky',
              top: 0,
              zIndex: 10,
              borderBottom: 1,
              borderColor: 'divider',
            }}
          >
            <IconButton
              sx={{ mr: 2 }}
              onClick={() => {
                onClose();
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            <Typography component="div" sx={{ flexGrow: 1 }}>
              {title}
            </Typography>
            <Stack direction="row">
              <IconButton onClick={() => {
                $$store.validateForm();
                if ($$store.isCorrect) {
                  onSave();
                }
              }}
              >
                <SaveIcon />
              </IconButton>
              <IconButton disabled>
                <MoreVertIcon />
              </IconButton>
            </Stack>
          </Toolbar>

          <Box sx={{
            p: 4,
            flex: 1,
            overflow: 'auto',
          }}
          >
            <FormRenderingEngine
              path={path}
              store={store}
              schema={correctSchema}
              $$store={$$store}
            />
          </Box>

        </Stack>
        {!!debug && <Dashboard store={store} $$store={$$store} path={path} />}
      </Stack>
    </Drawer>
  );
});

export { XDrawerForm };
