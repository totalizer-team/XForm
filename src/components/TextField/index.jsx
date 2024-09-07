import { useState, useMemo, useEffect } from 'react';
import {
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

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
    required = false,

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

  const [showPassword, setShowPassword] = useState(type === 'password');

  // 渲染组件
  const value = $$store.getValue(path);

  useEffect(() => {
    $$store.linkage(path);
  }, [value]);

  const componentProps = { variant, placeholder };
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

  if (type === 'password') {
    InputProps.endAdornment = (
      <InputAdornment position="end">
        <IconButton
          onClick={() => { setShowPassword((show) => !show); }}
          onMouseDown={(e) => e.preventDefault()}
          onMouseUp={(e) => e.preventDefault()}
          edge="end"
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </IconButton>
      </InputAdornment>
    );
  }

  componentProps.InputProps = InputProps;

  return (
    <TextField
      required={required}
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
      type={showPassword ? 'password' : 'text'}
      {...componentProps}
    />
  );
});
