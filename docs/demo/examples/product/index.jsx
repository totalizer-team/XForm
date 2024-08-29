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
        Add a new product
      </Button>
      <XDrawerForm
        path="myFormData"
        store={store}
        schema={schema}
        open={visible}
        width={800}
        title="Add a new product"
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
