import React, { useEffect, useRef } from 'react';
import { JSONEditor } from 'vanilla-jsoneditor';

export default function SvelteJSONEditor(props) {
  const refContainer = useRef(null);
  const refEditor = useRef(null);

  useEffect(() => {
    // create editor
    refEditor.current = new JSONEditor({
      target: refContainer.current,
      props: {},
    });

    return () => {
      // destroy editor
      if (refEditor.current) {
        refEditor.current.destroy();
        refEditor.current = null;
      }
    };
  }, []);

  // update props
  useEffect(() => {
    if (refEditor.current) {
      refEditor.current.updateProps(props);
    }
  }, [props]);

  return (
    <div
      className="vanilla-jsoneditor-react"
      style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0 }}
      ref={refContainer}
    ></div>
  );
}
