 
/**
 * 根据路径读取数据
 * @param {*} obj
 * @param {*} path
 * @param {*} errorHandler
 * @returns
 */
export default (obj, path, errorHandler = () => {}) => {
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
