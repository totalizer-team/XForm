import { observer } from 'mobx-react';
import { useEffect } from 'react';

import renderMarkdownTypography from '../renderMarkdownTypography';

export default observer(({ path = '', $$store = null }) => {
  const { text = '', fontSize, color } = $$store.context(path);

  const componentsProps = { fontSize, color };

  Object.keys(componentsProps).forEach((key) => {
    if (!componentsProps[key]) delete componentsProps[key];
  });

  console.log('~~~ Enh Typography', path);

  // const render = renderMarkdownTypography(text, componentsProps);

  useEffect(() => {
    $$store.linkage(path);
  }, []);

  return renderMarkdownTypography(text, componentsProps);
});
