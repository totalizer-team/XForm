import { useMemo, useEffect } from 'react';
import {
  TextField,
  InputAdornment,
} from '@mui/material';
import { observer } from 'mobx-react';

export default observer(({
  path = '', // 数据路径
  $$store = null, // 状态管理
}) => {
  console.log('~~~ TextField', path);

  const {
    label,
    disabled,
    readOnly,
    helperText,
    errorMsg,

    /** 拓展参数： */
    placeholder = '',
    variant = 'outlined',
    type = 'text',
    multiline,
    rows,
    minRows,
    maxRows,
    endAdornment = '',
    startAdornment = '',
  } = $$store.context(path);

  // 渲染组件
  const value = $$store.getValue(path);

  useEffect(() => {
    $$store.linkage(path);
  }, [value]);

  const componentProps = { variant, type, placeholder };
  if (multiline === true) {
    componentProps.multiline = multiline;
    if (rows) componentProps.rows = rows;
    else {
      if (minRows) componentProps.minRows = minRows;
      if (maxRows) componentProps.maxRows = maxRows;
    }
  }
  const InputProps = {};
  if (endAdornment) {
    InputProps.endAdornment = <InputAdornment position="end">{endAdornment}</InputAdornment>;
  }
  if (startAdornment) {
    InputProps.startAdornment = <InputAdornment position="start">{startAdornment}</InputAdornment>;
  }
  componentProps.InputProps = InputProps;

  return (
    <TextField
      value={value}
      onChange={(e) => {
        $$store.setValue(path, e.target.value);
      }}
      label={label}
      fullWidth
      disabled={disabled}
      inputProps={{
        readOnly,
      }}
      onFocus={() => $$store.clearErrorMsg(path)}
      onBlur={() => $$store.validate(path)}
      error={!!errorMsg}
      helperText={errorMsg || helperText}
      {...componentProps}
    />
  );
});
