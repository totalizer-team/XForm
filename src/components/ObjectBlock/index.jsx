import { useRef } from 'react';
/**
 * UI
 */
import {
  Button,
  Avatar,
  Stack,
  Box,
  Paper,
  IconButton, Typography,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  CardContent,
  TableContainer, Table, TableHead,
  TableBody, TableRow, TableCell,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { deepOrange } from '@mui/material/colors';
/**
 * 状态管理
 */

import { observer } from 'mobx-react';
/**
 * 依赖组建
 */
import FormRenderingEngine from '../../engine/FormRenderingEngine';

export default observer(({
  path, $$store,
}) => {
  const {
    variant = 'outlined', // text outlined elevation
    label,
    schema,
  } = $$store.context(path);
  return (
    <Paper sx={{ p: 2.5 }} variant="elevation" elevation={1}>
      <Stack sx={{ pt: 0, pb: 2.5 }}>
        <Typography fontSize={18}>
          {label}
        </Typography>
      </Stack>
      <FormRenderingEngine
        path={path}
        schema={schema}
        $$store={$$store}
      />
    </Paper>
  );
});
