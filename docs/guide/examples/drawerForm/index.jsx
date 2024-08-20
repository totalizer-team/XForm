import { Button } from '@mui/material';
import { XDrawerForm } from '@totalizer/xform';
import { observer } from 'mobx-react';

import schema from './schema';
import store from './store';

export default observer(() => {
  const { visible } = store;

  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          store.openDrawer();
        }}
      >
        打开表单
      </Button>
      <XDrawerForm
        path="myFormData"
        store={store}
        schema={schema}
        open={visible}
        title="抽屉表单"
        onSave={() => {
          console.log('save');
        }}
        onClose={() => {
          store.closeDrawer();
        }}
        debug
      />
    </>
  );
});
