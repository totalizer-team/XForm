/* eslint-disable no-param-reassign */
import dayjs from 'dayjs';
import COMPONENTS from '../components';

const _setDefault = (schema) => {
  const DEFAULT_CONFIG = {
    xs: 12,
    default: COMPONENTS[schema.c].defaultValue,
    label: '',
    helperText: '',
    visible: true,
    disabled: false,
  };

  Object.keys(DEFAULT_CONFIG).forEach((key) => {
    if ([null, undefined].includes(schema[key])) {
      schema[key] = DEFAULT_CONFIG[key];
    }
  });
};

const _setObjectDefault = (config) => {
  config.default = {};
  Object.keys(config.schema).forEach((key) => {
    config.default[key] = config.schema[key].default;
  });
};

const _fillDefaults = (schema) => {
  Object.keys(schema).forEach((key) => {
    const itemSchema = schema[key];

    const { type } = COMPONENTS[itemSchema.c];
    if (type === 'object') {
      _setDefault(itemSchema);
      _fillDefaults(itemSchema.schema);
      _setObjectDefault(itemSchema);
    } else if (type === 'array') {
      _setDefault(itemSchema);
      _fillDefaults(itemSchema.schema);
    } else {
      _setDefault(itemSchema);
    }
  });
  return schema;
};

function deepClone(obj) {
  // 基本数据类型（null, number, string, boolean, undefined）
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // 处理 Date 对象
  if (obj instanceof Date) {
    return new Date(obj);
  }

  // 处理 dayjs 对象
  if (dayjs.isDayjs(obj)) {
    return dayjs(obj); // 重新实例化一个 dayjs 对象
  }

  // 处理数组
  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  }

  // 处理对象
  const clonedObj = {};
  Object.keys(obj).forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  });

  return clonedObj;
}

/**
 * 修正 schema
 * @param {*} schema
 */
export default (schema) => {
  const _schema = deepClone(schema);
  _fillDefaults(_schema);
  return _schema;
};
