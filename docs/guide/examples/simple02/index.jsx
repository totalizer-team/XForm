import { XBaseForm } from '@totalizer/xform';
import { observer } from 'mobx-react';

import store from './store';
import schema from './schema';

export default observer(() => {
  const { myFormData } = store;
  return (
    <>
      <XBaseForm
        store={store}
        path="myFormData"
        schema={schema}
      />
      <br />
      <p>Data changes are displayed synchronously:</p>
      <p>{JSON.stringify(myFormData)}</p>
    </>
  );
});
