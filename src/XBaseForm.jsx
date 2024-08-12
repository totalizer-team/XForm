import { useMemo } from 'react';
import { observer } from 'mobx-react';

import {
  _repairSchema,
} from './core/_UTILS';
import $$Store from './core/_STORE';

import FormRenderingEngine from './engine/FormRenderingEngine';

const XBaseForm = observer(({
  path = '',
  store = null,
  schema,
}) => {
  const correctSchema = useMemo(() => _repairSchema(schema), [schema]);
  const $$store = useMemo(() => new $$Store(path, store, correctSchema), []);

  return (
    <FormRenderingEngine
      path={path}
      store={store}
      schema={correctSchema}
      $$store={$$store}
    />
  );
});

export { XBaseForm };
