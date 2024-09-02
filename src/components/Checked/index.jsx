import { useMemo, useEffect } from 'react';
import {
  Stack,
  Typography,
  Link,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  ListItemText,
  RadioGroup,
} from '@mui/material';
import { observer } from 'mobx-react';

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

export default observer(({ path = '', $$store = null }) => {
  const {
    label = '',
    title = '',
    disabled,
    helperText,
    errorMsg,
  } = $$store.context(path);

  console.log('~~~ Checked', path, errorMsg);

  const value = $$store.getValue(path);

  const renderTitle = useMemo(() => {
    if (typeof title === 'string') {
      const array = parseString(title);
      return (
        <Typography color={disabled ? 'textDisabled' : 'textPrimary'}>
          {array.map((el, i) => {
            if (Array.isArray(el)) {
              return <Link href={el[1]} key={i}>{el[0]}</Link>;
            }
            return el;
          })}
        </Typography>
      );
    }

    return title;
  }, [title]);

  useEffect(() => {
    $$store.linkage(path);
  }, [value]);

  const componentsProps = {};

  return (
    <FormControl error={!!errorMsg}>
      <FormLabel disabled={disabled}>{label}</FormLabel>
      <FormControlLabel
        control={(
          <Checkbox
            checked={value}
            onChange={(e, v) => {
              $$store.setValue(path, v);
              $$store.validate(path);
            }}
          />
          )}
        label={renderTitle}
        disabled={disabled}
      />

      <FormHelperText>{errorMsg || helperText}</FormHelperText>
    </FormControl>
  );
});
