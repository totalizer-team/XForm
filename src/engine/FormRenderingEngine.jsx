import { useEffect, useRef } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { observer } from 'mobx-react';

import { COMPONENTS } from '../components';

/**
 * Form Item
 */
const FormItem = observer(({
  path,
  schema = {}, // schema
  $$store,
}) => {
  console.log('~~~ FormItem', path);

  const { c, xs } = schema;
  const Child = COMPONENTS[c];

  // 注册组件状态
  $$store.registerStatus(path, schema);

  const { visible } = $$store.context(path);

  useEffect(
    () => () => {
      console.log('========remove', path);
      // 移除该路径下的组件状态
      $$store.destroyStatus(path);
    },
    [path],
  );

  useEffect(() => {
    $$store.resetStatus(path, visible);
  }, [visible]);

  if (!visible) return '';

  return (
    <Grid xs={xs || 12}>
      <Child
        path={path}
        $$store={$$store}
      />
    </Grid>
  );
});

/**
 * Form
 */
export default observer(({
  path = '',
  schema,
  $$store,
}) => {
  console.log('~~~ FormEngine', path);

  useEffect(() => {
    $$store.init();
    return () => {
      $$store.destroy();
    };
  }, []);
  return (
    <Grid
      container
      spacing={2}
      sx={{ flexGrow: 1 }}
    >
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
