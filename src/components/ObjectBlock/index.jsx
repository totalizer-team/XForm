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
  FormControl, FormLabel,
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
    variant = 'default', // default outlined elevation
    elevation = 1,
    label,
    schema,
  } = $$store.context(path);

  if (variant === 'outlined') {
    return (
      <Paper sx={{ p: 2.5 }} variant="outlined">
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
  }

  if (variant === 'elevation') {
    return (
      <Paper sx={{ p: 2.5 }} variant="elevation" elevation={elevation}>
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
  }

  return (
    <FormControl fullWidth>
      <FormLabel sx={{ mb: 2 }}>{label}</FormLabel>
      <FormRenderingEngine
        path={path}
        schema={schema}
        $$store={$$store}
      />
    </FormControl>
  );
});
