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
import FormRenderingEngine from '../../engine/FormRenderingEngine';

import _merge from '../../core/merge';
/**
 * 子组件
 */
const XItem = observer(({
  path, record, schema, onDelete, $$store,
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
          position: 'relative',
          top: 14,
          cursor: 'move',
        }}
        size="small"
      >
        <DragIndicatorIcon fontSize="small" />
      </IconButton>
      <FormRenderingEngine
        path={path}
        schema={schema}
        $$store={$$store}
      />
      <Stack
        direction="row"
        sx={{
          position: 'relative',
          top: 14,
        }}
      >
        <IconButton onClick={onDelete} size="small">
          <DeleteOutlineIcon fontSize="small" />
        </IconButton>
      </Stack>

    </Stack>
  );
});

/**
 * 主组组件
 */
export default observer(({
  path, $$store,
}) => {
  const {
    variant = 'default', // default outlined elevation
    elevation = 1,
    label, addText = '', schema,
  } = $$store.context(path);

  const noKeyData = $$store.getValue(path);
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
    $$store.setValue(path, result);
    $$store.setTick();
  };

  const isDefault = !['outlined', 'elevation'].includes(variant);
  let paperProps = {};
  if (variant === 'elevation') {
    paperProps = { elevation };
  }
  return (
    <Paper sx={{ p: isDefault ? 0 : 2.5 }} variant={variant} {...paperProps}>
      {isDefault ? <FormLabel sx={{ mb: 2 }}>{label}</FormLabel>
        : (
          <Stack sx={{ pt: 0, pb: 2.5 }}>
            <Typography fontSize={18}>
              {label}
            </Typography>
          </Stack>
        )}

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
          <Stack sx={{ pt: 2 }} spacing={1}>
            {data.map((el, i) => (
              <XItem
                path={`${path}[${i}]`}
                key={el._key}
                record={el}
                schema={schema}
                onDelete={() => {
                  const res = [...data];
                  res.splice(i, 1);
                  changeHandler(res);
                }}
                $$store={$$store}
              />
            ))}

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
                  ..._merge(schema, {}),
                });
                changeHandler(res);
              }}
              variant="outlined"
              sx={{

                borderStyle: 'dashed',
              }}
              startIcon={<AddIcon />}
              disableRipple
            >
              {addText || 'ADD'}
            </Button>
          </Stack>
        </SortableContext>
      </DndContext>
    </Paper>
  );
});
