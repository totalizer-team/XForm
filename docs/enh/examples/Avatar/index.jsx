import { XBaseForm } from '@totalizer/xform';
import { observer } from 'mobx-react';

import schema from './schema.jsx';
import store from './store.js';

export default observer(() => (
  <XBaseForm path="myFormData" store={store} schema={schema} debug />
));
