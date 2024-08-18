import { observer } from 'mobx-react';

import {
  Paper,
  Box, Alert, Drawer, Toolbar, IconButton, Typography, Stack,
  ToggleButtonGroup, ToggleButton,
  Tab,
} from '@mui/material';
import { TabContext, TabPanel, TabList } from '@mui/lab';

import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import KeyboardOptionKeyIcon from '@mui/icons-material/KeyboardOptionKey';

import './Dashboard.less';

import DashboardData from './DashboardData';
import DashboardSchema from './DashboardSchema';
import DashboardStatus from './DashboardStatus';

export default observer(({
  path = '',
  store = null,
  $$store = null,
}) => (
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
          p: 2,
          flex: 1,
          overflow: 'auto',
        }}
      >
        <DashboardData $$store={$$store} store={store} path={path} />
      </TabPanel>
      <TabPanel
        value="schema"
        sx={{
          p: 2,
          flex: 1,
          overflow: 'auto',
        }}
      >
        <DashboardSchema $$store={$$store} />
      </TabPanel>
      <TabPanel
        value="status"
        sx={{
          p: 2,
          flex: 1,
          overflow: 'auto',
        }}
      >
        <DashboardStatus $$store={$$store} />
      </TabPanel>
    </TabContext>
  </Box>

));
