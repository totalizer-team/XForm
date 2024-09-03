export function removeLastArraySuffix(str) {
  if (!str) return '';
  const parts = str.split('.');
  let lastArrayPart = null;
  for (let i = parts.length - 1; i >= 0; i--) {
    if (/^\w+\[\d+\]$/.test(parts[i])) {
      lastArrayPart = parts[i];
      break;
    }
  }
  if (!lastArrayPart) {
    return str;
  }
  const lastArrayIndex = parts.indexOf(lastArrayPart);
  const resultParts = parts.slice(0, lastArrayIndex + 1);
  const resultStr = resultParts.join('.');
  return resultStr;
}

export function removeRoot(path, root) {
  if (!path) return '';
  if (!root) return path;
  // 动态生成正则表达式前转换可能出现的特殊字符，避免影响正则表达式使用
  const escapedRoot = root.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return path.replace(new RegExp(`${escapedRoot}.`, ''), '');
}

export default (path, root) => removeLastArraySuffix(removeRoot(path, root));
