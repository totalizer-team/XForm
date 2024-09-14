import { observer } from 'mobx-react';

import { Avatar, AvatarGroup, Stack } from '@mui/material';
import React from 'react';

export default observer(({ path = '', $$store = null }) => {
  console.log('~~~ Avatar', path);

  if (!$$store) return null;

  const {
    c,
    xs,
    label,
    disabled,
    required,
    helperText,
    errorMsg,
    visible,

    /**
     * componentProps
     */
    src,
    content,
    size,
    bgColor,
    total,
    max,
  } = $$store?.context?.(path) || {};

  const isGroup = Array.isArray(src);
  const currentSxProps = {
    sx: {
      height: size,
      width: size,
      bgcolor: bgColor,
    },
  };

  if (!isGroup) {
    return (
      <Stack direction="row" justifyContent="center">
        <Avatar src={src} {...currentSxProps}>
          {content}
        </Avatar>
      </Stack>
    );
  } else {
    const isImageAvatarGroup = !!src?.length;
    if (!isImageAvatarGroup) return null;
    const currentArr = src;
    return (
      <Stack direction="row" justifyContent="center">
        <AvatarGroup max={max} total={total}>
          {currentArr.map((item) => (
            <Avatar
              key={item}
              src={isImageAvatarGroup ? item : undefined}
              {...currentSxProps}
            />
          ))}
        </AvatarGroup>
      </Stack>
    );
  }
});
