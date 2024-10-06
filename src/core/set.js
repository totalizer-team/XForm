 
/**
 * 根据路径更新数据
 * @param {*} obj 目标对象
 * @param {*} path 路径
 * @param {*} value 赋值
 */
export default (obj, path, value, errorHandler = () => {}) => {
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
