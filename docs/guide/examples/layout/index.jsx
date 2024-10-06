import { XBaseForm } from '@totalizer/xform';
import { observer } from 'mobx-react';
import React from 'react';

import schema from './schema';
import store from './store';

export default observer(() => (
  <XBaseForm store={store} path="myFormData" schema={schema} />
));
