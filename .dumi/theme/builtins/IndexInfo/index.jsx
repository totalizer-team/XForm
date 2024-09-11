import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import ShutterSpeedIcon from '@mui/icons-material/ShutterSpeed';
import { Box, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';

import './index.less';
export default () => {
  const infos = [
    {
      icon: <ArchitectureIcon sx={{ fontSize: 120 }} color="disabled" />,
      title: 'User-Friendly',
      text: 'Requires less code and is straightforward, offering greater extensibility and a wealth of use cases.',
    },
    {
      icon: <ShutterSpeedIcon sx={{ fontSize: 120 }} color="disabled" />,
      title: 'Enhanced Performance',
      text: 'Isolates component re-renders to significantly boost form performance.',
    },
    {
      icon: <AirplanemodeActiveIcon sx={{ fontSize: 120 }} color="disabled" />,
      title: 'Increased Productivity',
      text: 'Enables the rapid development of enterprise-level products, ensuring an exceptional user experience',
    },
  ];
  return (
    <Box
      sx={{
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <Grid
        container
        spacing={4}
        sx={{
          width: 1100,
          margin: '0 auto',
          pt: 15,
          pb: 20,
        }}
      >
        {infos.map((el) => {
          return (
            <Grid size={4} key={el.title}>
              <Stack alignItems="center" textAlign="center" spacing={1}>
                {el.icon}
                <Typography fontSize={24} color="textPrimary" sx={{ pt: 2 }}>
                  {el.title}
                </Typography>
                <Typography fontSize={14} color="textSecondary">
                  {el.text}
                </Typography>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
