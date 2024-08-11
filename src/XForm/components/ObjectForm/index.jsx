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
import FormRenderingEngine from '../../FormRenderingEngine';

export default observer(({
  path, store, schema, $$store,
}) => {
  const _schema = schema.schema;
  const { label } = schema;
  return (
    <>
      <Stack sx={{ pt: 1, pb: 1.5 }}>
        <Typography>
          {label}
          :
        </Typography>
      </Stack>
      <FormRenderingEngine
        path={path}
        store={store}
        schema={_schema}
        $$store={$$store}
      />
    </>
  );
});
