/**
 * compact: true
 */

import { XBaseForm } from '@totalizer/xform';
import { observer } from 'mobx-react';
import React from 'react';

import schema from './schema';
import store from './store';

export default observer(() => (
  <XBaseForm path="myFormData" store={store} schema={schema} debug />
));
