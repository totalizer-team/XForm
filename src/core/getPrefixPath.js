function removeLastArraySuffix(str) {
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

function removeRoot(path, root) {
  return path.replace(new RegExp(`${root}.`, ''), '');
}

export default (path, root) => removeLastArraySuffix(removeRoot(path, root));
