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
 * 排序
 */
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
  arrayMove,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
/**
 * 状态管理
 */

import { observer } from 'mobx-react';
/**
 * 依赖组建
 */
import FormRenderingEngine from '../../FormRenderingEngine';

import { _default } from '../../_UTILS';
/**
 * 子组件
 */
const XItem = observer(({
  path, store, record, schema, onDelete, $$store,
}) => {
  const theme = useTheme();
  const isDark = theme?.palette?.mode === 'dark';

  const { _key } = record;
  const {
    attributes,
    listeners,
    setNodeRef,
    isDragging,
    transform,
    transition,
  } = useSortable({ id: _key });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    ...(isDragging
      ? {
        position: 'relative',
        zIndex: 9999,
      }
      : {}),
  };

  return (
    <Stack
      ref={setNodeRef}
      style={style}
      direction="row"
      justifyContent="start"
      alignItems="start"
      sx={{
        width: '100%',
      }}
      spacing={1}
    >
      <IconButton
        {...attributes}
        {...listeners}
        sx={{
          cursor: 'move',
        }}
      >
        <DragIndicatorIcon fontSize="small" />
      </IconButton>
      <FormRenderingEngine
        path={path}
        store={store}
        schema={schema}
        $$store={$$store}
      />
      <Stack direction="row">
        <IconButton onClick={onDelete}>
          <DeleteOutlineIcon />
        </IconButton>
      </Stack>

    </Stack>
  );
});

/**
 * 主组建
 */
export default observer(({
  path, store, schema, $$store,
}) => {
  const { label } = schema;
  const _schema = schema.schema;

  const noKeyData = store.$$get(path);
  const keys = useRef([]);

  let data = [];
  if (keys.current.length !== noKeyData.length) {
    data = noKeyData.map((el, i) => ({
      ...el,
      _key: i + 1,
    }));
  } else {
    data = noKeyData.map((el, i) => ({
      ...el,
      _key: keys.current[i],
    }));
  }

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const changeHandler = (newData) => {
    keys.current = newData.map((el) => el._key);
    const result = newData.map((el) => {
      const { _key, ...others } = el;
      return others;
    });
    store.$$set(path, result);
    $$store.setTick();
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={(e) => {
        const { active, over } = e;
        if (active.id !== over.id) {
          const oldIndex = data.findIndex((el) => el._key === active.id);
          const newIndex = data.findIndex((el) => el._key === over.id);
          const newData = arrayMove(data, oldIndex, newIndex);
          changeHandler(newData);
        }
      }}
    >
      <SortableContext
        items={data.map((el) => el._key)}
        strategy={verticalListSortingStrategy}
      >
        <Stack
          direction="column"
          spacing={0}
          sx={{
            width: '100%',
            border: 1,
            borderColor: 'divider',
            borderRadius: 1,
          }}
        >
          <Box sx={{
            p: 2,
            width: '100%',
            borderBottom: 1,
            borderColor: 'divider',
          }}
          >
            <Typography>{label}</Typography>
          </Box>
          <Box sx={{ p: 1 }}>
            {data.map((el, i) => (
              <XItem
                path={`${path}[${i}]`}
                store={store}
                key={el._key}
                record={el}
                schema={_schema}
                onDelete={() => {
                  const res = [...data];
                  res.splice(i, 1);
                  changeHandler(res);
                }}
                $$store={$$store}
              />
            ))}
          </Box>
          <Stack sx={{ pt: 1, pb: 2 }}>
            <Button
              onClick={() => {
                const res = [...data];
                let _key = 1;
                data.forEach((el) => {
                  if (el._key >= _key) _key = el._key;
                });
                _key += 1;
                res.push({
                  _key,
                  ..._default(_schema),
                });
                changeHandler(res);
              }}
              variant="outlined"
              sx={{
                mr: 1,
                ml: 1,
                borderStyle: 'dashed',
              }}
              startIcon={<AddIcon />}
            >
              ADD
            </Button>
          </Stack>
        </Stack>
      </SortableContext>
    </DndContext>
  );
});
