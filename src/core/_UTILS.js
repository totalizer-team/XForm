/* eslint-disable no-param-reassign */

import { DEFAULT_VALUE } from '../components';

/**
 * 根据路径读取数据
 * @param {*} obj
 * @param {*} path
 * @param {*} errorHandler
 * @returns
 */
export const _get = (obj, path, errorHandler = () => {}) => {
  try {
    const keys = path.replace(/\[(\d+)\]/g, '.[$1]').split('.');
    for (let i = 0; i < keys.length - 1; i += 1) {
      const key = keys[i];
      if (Array.isArray(obj) && /^\[(\d+)\]$/.test(key)) {
        const index = parseInt(key.match(/^\[(\d+)\]$/)[1], 10);
        obj = obj[index];
      } else {
        obj = obj[key];
      }
    }
    const lastKey = keys[keys.length - 1];
    if (Array.isArray(obj) && /^\[(\d+)\]$/.test(lastKey)) {
      const index = parseInt(lastKey.match(/^\[(\d+)\]$/)[1], 10);
      return obj[index];
    }
    return obj[lastKey];
  } catch (error) {
    errorHandler(error);
    return undefined;
  }
};

/**
 * 根据路径更新数据
 * @param {*} obj 目标对象
 * @param {*} path 路径
 * @param {*} value 赋值
 */
export const _set = (obj, path, value, errorHandler = () => {}) => {
  try {
    const keys = path.replace(/\[(\d+)\]/g, '.[$1]').split('.');
    for (let i = 0; i < keys.length - 1; i += 1) {
      const key = keys[i];
      if (Array.isArray(obj) && /^\[(\d+)\]$/.test(key)) {
        const index = parseInt(key.match(/^\[(\d+)\]$/)[1], 10);
        obj = obj[index];
      } else {
        obj = obj[key];
      }
    }
    const lastKey = keys[keys.length - 1];
    if (Array.isArray(obj) && /^\[(\d+)\]$/.test(lastKey)) {
      const index = parseInt(lastKey.match(/^\[(\d+)\]$/)[1], 10);
      obj[index] = value;
    } else {
      obj[lastKey] = value;
    }
  } catch (error) {
    errorHandler(error);
  }
};

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
    if ([null, undefined].includes(schema[key]))
      schema[key] = DEFAULT_CONFIG[key];
  });
};

const _fillDefaults = (schema) => {
  Object.keys(schema).forEach((key) => {
    const config = schema[key];
    if (typeof config.schema === 'object') {
      _setDefault(config);
      _fillDefaults(config.schema);
    } else {
      _setDefault(config);
    }
  });
  return schema;
};
/**
 * 修正 schema
 * @param {*} schema
 */
export const _repairSchema = (schema) => {
  _fillDefaults(schema);
  return schema;
};

/**
 * 根据配置合并数据，确保数据一致性
 * @param {*} schema
 * @param {*} data
 */
const _setValue = (res, schema, data, parentPath = '') => {
  Object.keys(schema).forEach((key) => {
    const path = parentPath ? `${parentPath}.${key}` : key;
    if (['ListForm'].includes(schema[key].c)) {
      // do somthing
      const value = _get(data, path);
      if (Array.isArray(value)) {
        _set(res, path, []);
        value.forEach((el, i) => {
          _set(res, `${path}[${i}]`, {});
          _setValue(res, schema[key].schema, data, `${path}[${i}]`);
        });
      } else {
        _set(res, path, []);
      }
    } else if (['ObjectForm'].includes(schema[key].c)) {
      _set(res, path, {});
      _setValue(res, schema[key].schema, data, path);
    } else {
      let value = _get(data, path);
      if (value === undefined) {
        value = schema[key].default;
      }
      _set(res, path, value);
    }
  });
};
export const _merge = (schema, data = {}) => {
  const _schema = _repairSchema(schema);
  const res = {};
  _setValue(res, _schema, data, '');
  return res;
};

/**
 * 根据配置构建默认值
 * @param {*} schema
 * @returns
 */
export const _default = (schema) => _merge(schema, {});
