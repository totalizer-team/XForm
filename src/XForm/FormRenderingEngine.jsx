import { useEffect } from 'react';
import Grid from '@mui/material/Grid2';
import { observer } from 'mobx-react';

import { COMPONENTS } from './_CONST';

/**
 * Form Item
 */
const FormItem = observer(({
  path, store,
  schema = {}, // schema
  $$store,
}) => {
  const { c, xs } = schema;
  const Child = COMPONENTS[c];

  console.log('$$$ Item:', path);

  // 注册组件状态
  $$store.registerStatus(path, schema);
  const visible = $$store.getVisible(path);

  useEffect(
    () => () => {
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
    <Grid size={xs || 12}>
      <Child
        path={path}
        store={store}
        $$store={$$store}
        schema={schema}
      />
    </Grid>
  );
});

/**
 * Form
 */
export default observer(({
  path = '',
  store = null,
  schema,
  $$store,
}) => (
  <Grid
    container
    spacing={2}
    sx={{ flexGrow: 1 }}
  >
    {Object.keys(schema).map((key) => (
      <FormItem
        key={key}
        path={`${path}.${key}`}
        store={store}
        schema={schema[key]}
        $$store={$$store}
      />
    ))}
  </Grid>
));