
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

const _setEnhDefault = (schema) => {
  const DEFAULT_CONFIG = {
    visible: true,
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

// 写一个校验函数
function isValidSchema(schema, key) {
  let errorMessage = '';
  if (typeof schema !== 'object' || Array.isArray(schema)) {
    errorMessage = `The schema must be in JSON format; it cannot be an array or a string.`;
  }
  else if (!Object.prototype.hasOwnProperty.call(schema, 'c') || typeof schema.c !== 'string') {
    errorMessage = ` The component name is missing.`;
  }
  else if (!Object.prototype.hasOwnProperty.call(COMPONENTS, schema.c)) {
    errorMessage = `The component "${schema.c}" does not exist.`;
  } else {
    // 校验嵌套的 schema 属性
    const { type } = COMPONENTS[schema.c];
    if (['object', 'array'].includes(type)) {
      if (!Object.prototype.hasOwnProperty.call(schema, 'schema')) {
        errorMessage = `The component "${schema.c}" is missing the schema property.`;
      } else if (typeof schema.schema !== 'object' || Array.isArray(schema.schema)) {
        errorMessage = `The schema property of component "${schema.c}" must be in JSON format.`;
      }
    } else {
      if (Object.prototype.hasOwnProperty.call(schema, 'schema')) {
        errorMessage = `The "schema" attribute cannot be set for component ${schema.c}.`;
      }
    }
  }

  if (errorMessage) {
    return {
      c: 'Enh.ErrorAlert',
      name: key,
      errorMessage,
      visible: true,

    }
  }
  return true;
}


const _fillDefaults = (schema) => {


  Object.keys(schema).forEach((key) => {
    const itemSchema = schema[key];

    // 校验 itemSchema
    const res = isValidSchema(itemSchema, key)
    if (res !== true) {
      schema[key] = res;
      return;
    }

    const { type } = COMPONENTS[itemSchema.c];

    if (type === 'Enh') _setEnhDefault(itemSchema);
    else if (type === 'object') {
      _setDefault(itemSchema);
      _fillDefaults(itemSchema.schema, key);
      _setObjectDefault(itemSchema);
    } else if (type === 'array') {
      _setDefault(itemSchema);
      _fillDefaults(itemSchema.schema, key);
    } else {
      _setDefault(itemSchema, key);
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
  if (typeof schema !== 'object' || Array.isArray(schema)) {
    return 'The schema must be in JSON format; it cannot be an array or a string.'
  }
  return _fillDefaults(deepClone(schema))

};
