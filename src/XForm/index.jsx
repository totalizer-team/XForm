import { useMemo, useEffect } from 'react';
import { observer } from 'mobx-react';

import {
  Paper,
  Box, Alert, Drawer, Toolbar, IconButton, Typography, Stack,
  ToggleButtonGroup, ToggleButton,
  Tab,
} from '@mui/material';
import { TabContext, TabPanel, TabList } from '@mui/lab';

import { useTheme } from '@mui/material/styles';
import { deepOrange, blue, grey } from '@mui/material/colors';

// import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
// import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
// import ModeEditIcon from '@mui/icons-material/ModeEdit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardOptionKeyIcon from '@mui/icons-material/KeyboardOptionKey';

import {
  _get, _set, _merge, _default, _repairSchema,
} from './_UTILS';
import $$Store from './_STORE';

import './index.less';

import FormRenderingEngine from './FormRenderingEngine';
import PanelData from './PanelData';
import PanelSchema from './PanelSchema';
import PanelStatus from './PanelStatus';

export const $$get = _get;
export const $$set = _set;
export const $$merge = _merge;
export const $$default = _default;
export const $$repairSchema = _repairSchema;

export default observer(({
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
  const theme = useTheme();
  const isDark = theme?.palette?.mode === 'dark';

  const correctSchema = useMemo(() => _repairSchema(schema), [schema]);

  const $$store = useMemo(() => new $$Store(path, store, correctSchema), []);

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
                $$store.validateAll();
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
            p: 4, flex: 1, overflow: 'auto',
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
        {!!debug
          && (
            <Box
              sx={{
                width: 400,
                display: 'flex',
                height: '100vh',
                flexDirection: 'column',
                borderLeft: 1,
                borderColor: 'divider',
              }}
            >
              <TabContext value={$$store.debugMode}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList
                    sx={{
                      minHeight: 0,
                      '& .MuiTab-root': {
                        p: 1.5,
                        minHeight: 0,
                        minWidth: 0,
                        fontSize: 12,
                      },
                    }}
                    onChange={(e, v) => $$store.setDebugMode(v)}
                  >
                    <Tab
                      icon={<DataSaverOffIcon sx={{ fontSize: 15 }} />}
                      iconPosition="start"
                      label={$$store.debugMode === 'data' ? 'data' : ''}
                      value="data"
                    />
                    <Tab
                      icon={<DesignServicesIcon sx={{ fontSize: 15 }} />}
                      iconPosition="start"
                      label={$$store.debugMode === 'schema' ? 'schema' : ''}
                      value="schema"
                    />
                    <Tab
                      icon={<KeyboardOptionKeyIcon sx={{ fontSize: 15 }} />}
                      iconPosition="start"
                      label={$$store.debugMode === 'status' ? 'status' : ''}
                      value="status"
                    />
                  </TabList>
                </Box>
                <TabPanel
                  value="data"
                  sx={{
                    p: 1,
                    flex: 1,
                    overflow: 'auto',
                  }}
                >
                  <PanelData $$store={$$store} store={store} path={path} />
                </TabPanel>
                <TabPanel
                  value="schema"
                  sx={{
                    p: 1,
                    flex: 1,
                    overflow: 'auto',
                  }}
                >
                  <PanelSchema $$store={$$store} />
                </TabPanel>
                <TabPanel
                  value="status"
                  sx={{
                    p: 1,
                    flex: 1,
                    overflow: 'auto',
                  }}
                >
                  <PanelStatus $$store={$$store} />
                </TabPanel>
              </TabContext>
            </Box>
          )}
      </Stack>
    </Drawer>
  );
});
