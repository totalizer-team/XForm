/* eslint-disable no-param-reassign */

import { DEFAULT_VALUE } from '../components';

const _setDefault = (schema) => {
  const DEFAULT_CONFIG = {
    xs: 12,
    default: DEFAULT_VALUE[schema.c],
    label: '',
    helperText: '',
    visible: true,
    disabled: false,
    readOnly: false,
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
    if (typeof itemSchema.schema === 'object') {
      _setDefault(itemSchema);
      _fillDefaults(itemSchema.schema);
      _setObjectDefault(itemSchema);
    } else {
      _setDefault(itemSchema);
    }
  });
  return schema;
};

function deepClone(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  }

  const clone = {};
  Object.keys(obj).forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      // 递归克隆函数
      if (typeof obj[key] === 'function') {
        clone[key] = obj[key].bind(clone);
      } else {
        clone[key] = deepClone(obj[key]);
      }
    }
  });

  return clone;
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
