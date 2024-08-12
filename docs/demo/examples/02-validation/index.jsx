import { XBaseForm } from '@totalizer/xform';
import { observer } from 'mobx-react';

import store from './store';
import schema from './schema';

export default observer(() => {
  const { myFormData } = store;
  return (
    <>
      <XBaseForm
        path="myFormData"
        store={store}
        schema={schema}
      />

      <p>数据同步：</p>
      <p>{JSON.stringify(myFormData)}</p>
    </>
  );
})
