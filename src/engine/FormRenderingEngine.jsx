import Grid from '@mui/material/Grid2';
import { observer } from 'mobx-react';
import React, { useEffect } from 'react';

import COMPONENTS from '../components';
/**
 * Form Item
 */
const FormItem = observer(
  ({
    path,
    schema = {}, // schema
    $$store,
  }) => {
    console.log('~~~ FormItem', path);

    const { c, xs, justifyContent = '', alignItems = '' } = schema;
    const Child = COMPONENTS[c].c;

    // 注册组件状态
    $$store.registerStatus(path, schema);

    const { visible } = $$store.context(path);

    useEffect(
      () => () => {
        console.log('========remove', path);
        // 移除该路径下的组件状态
        // Bug：受到  <React.StrictMode> 影响，组件会触发多次，导致触发 destroyStatus
        $$store.destroyStatus(path);
      },
      [path],
    );

    useEffect(() => {
      // 重置组件状态
      // Bug：resetStatus 在 DrawerForm 中会导致初始状态值被重置，从而导致被赋予的值无效化
      // 考虑改变 DrawerForm 初始化值的时机
      // $$store.resetStatus(path, visible);
    }, [visible]);

    if (!visible) return '';

    let sx = {};
    if (justifyContent || alignItems) {
      sx = {
        display: 'flex',
        justifyContent,
        alignItems,
      };
    }

    return (
      <Grid size={xs || 12} sx={sx}>
        <Child path={path} $$store={$$store} />
      </Grid>
    );
  },
);

/**
 * Form
 */
export default observer(({ path = '', schema, $$store }) => {
  console.log('~~~ FormEngine', path);

  useEffect(() => {
    $$store.formLoaded();
    return () => {
      $$store.formDestroy();
    };
  }, []);
  return (
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      {Object.keys(schema).map((key) => (
        <FormItem
          key={key}
          path={`${path}.${key}`}
          schema={schema[key]}
          $$store={$$store}
        />
      ))}
    </Grid>
  );
});
