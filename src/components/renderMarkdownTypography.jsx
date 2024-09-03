import {
  Typography,
  Link,
} from '@mui/material';

const parseString = (input) => {
  const regex = /(\[([^\]]+)\]\(([^)]+)\))/g;
  const result = [];
  let lastIndex = 0;

  // 使用正则表达式匹配
  let match;
  while ((match = regex.exec(input)) !== null) {
    // 添加匹配前的文本部分
    if (lastIndex < match.index) {
      result.push(input.slice(lastIndex, match.index));
    }

    // 添加匹配的内容 (名称和链接)
    result.push([match[2], match[3]]);
    lastIndex = regex.lastIndex;
  }

  // 添加剩余的文本部分（如果有的话）
  if (lastIndex < input.length) {
    result.push(input.slice(lastIndex));
  }

  return result;
};

const renderMarkdownTypography = (text, componentProps) => {
  if (typeof text === 'string') {
    const array = parseString(text);
    return (
      <Typography {...componentProps}>
        {array.map((el, i) => {
          if (Array.isArray(el)) {
            return <Link href={el[1]} key={i}>{el[0]}</Link>;
          }
          return el;
        })}
      </Typography>
    );
  }
  return text;
};

export default renderMarkdownTypography;
