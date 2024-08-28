import Checkbox from './Checkbox';
import DatePicker from './DatePicker';
import DateTimePicker from './DateTimePicker';
import MultipleSelect from './MultipleSelect';
import Radio from './Radio';
import Rating from './Rating';
import Select from './Select';
import Slider from './Slider';
import Switch from './Switch';
import TextField from './TextField';
import TimePicker from './TimePicker';

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
registerComponent('DatePicker', DatePicker, '');
registerComponent('TimePicker', TimePicker, '');
registerComponent('DateTimePicker', DateTimePicker, '');
registerComponent('Switch', Switch, false);
registerComponent('Rating', Rating, 0);
registerComponent('Slider', Slider, 0);

registerComponent('ArrayList', ArrayList, []);
registerComponent('ObjectBlock', ObjectBlock, {});

export { COMPONENTS, DEFAULT_VALUE };
