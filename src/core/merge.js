import _get from './get';
import _repair from './repair';
import _set from './set';

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
export default (schema, data = {}) => {
  const _schema = _repair(schema);
  const res = {};
  _setValue(res, _schema, data, '');
  return res;
};
