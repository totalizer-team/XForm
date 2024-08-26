import Checkbox from './Checkbox';
import MultipleSelect from './MultipleSelect';
import Radio from './Radio';
import Select from './Select';
import TextField from './TextField';

import ArrayList from './ArrayList';
import ObjectBlock from './ObjectBlock';

const COMPONENTS = {};
const DEFAULT_VALUE = {};

const registerComponent = (name, c, defaultValue) => {
  COMPONENTS[name] = c;
  DEFAULT_VALUE[name] = defaultValue;
};

registerComponent('TextField', TextField, '');
registerComponent('Select', Select, '');
registerComponent('MultipleSelect', MultipleSelect, []);
registerComponent('Radio', Radio, '');
registerComponent('Checkbox', Checkbox, []);

registerComponent('ArrayList', ArrayList, []);
registerComponent('ObjectBlock', ObjectBlock, {});

export { COMPONENTS, DEFAULT_VALUE };
