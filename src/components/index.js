/**
 * 引入基础组件
 */
import Checkbox from './Checkbox';
import Checked from './Checked';
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

/**
 * 引入结构组件
 */
import ArrayList from './ArrayList';
import ObjectBlock from './ObjectBlock';

/**
 * 引入增强组件
 */
import EnhFormButton from './Enh/FormButton';
import EnhFormTitle from './Enh/FormTitle';
import EnhLink from './Enh/Link';
import EnhTypography from './Enh/Typography';
import EnhAvatar from './Enh/Avatar';

const COMPONENTS = {};
const DEFAULT_VALUE = {};

/**
 * 注册一个组件，注册后可在 schema 中使用
 * @param {*} name 组件名称
 * @param {*} c 组件
 * @param {*} d  默认值
 * @param {*} t  用来表示如何处理该组件的数据，可选值 'base' 'object' 'array' 'info'
 */
const registerComponent = (name, c, defaultValue, type = 'base') => {
  // COMPONENTS[name] = c;
  // DEFAULT_VALUE[name] = defaultValue;

  COMPONENTS[name] = {
    c,
    defaultValue,
    type,
  };
};
/**
 * 基础组件
 */
registerComponent('TextField', TextField, '');
registerComponent('Select', Select, '');
registerComponent('MultipleSelect', MultipleSelect, []);
registerComponent('Radio', Radio, '');
registerComponent('Checked', Checked, false);
registerComponent('Checkbox', Checkbox, []);
registerComponent('DatePicker', DatePicker, '');
registerComponent('TimePicker', TimePicker, '');
registerComponent('DateTimePicker', DateTimePicker, '');
registerComponent('Switch', Switch, false);
registerComponent('Rating', Rating, 0);
registerComponent('Slider', Slider, 0);

/**
 * 结构组件
 */
registerComponent('ArrayList', ArrayList, [], 'array');
registerComponent('ObjectBlock', ObjectBlock, {}, 'object');

/**
 * 增强组件
 */

registerComponent('Enh.FormTitle', EnhFormTitle, '', 'Enh');
registerComponent('Enh.Link', EnhLink, '', 'Enh');
registerComponent('Enh.Typography', EnhTypography, '', 'Enh');
registerComponent('Enh.FormButton', EnhFormButton, '', 'Enh');
registerComponent('Enh.Avatar', EnhAvatar, '', 'Enh');

export default COMPONENTS;

// export { COMPONENTS, DEFAULT_VALUE };
