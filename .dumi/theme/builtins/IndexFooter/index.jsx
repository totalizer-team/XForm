import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { history } from 'umi';
export default () => {
  return (
    <Box
      sx={{
        pt: 10,
        pb: 10,
        width: 1100,
        margin: '0 auto',
      }}
    >
      <Box
        sx={{
          width: 100,
          height: 100,
          margin: '0 auto',
          margin: '0 auto',
          background: 'url(./logo.png) center center no-repeat',
          backgroundSize: '125% 125%',
        }}
      ></Box>
      <Stack alignItems="center" sx={{ mt: 2 }}>
        <Typography fontSize={28}>Get started now</Typography>
        <Typography fontSize={20} color="textSecondary">
          Build a beautiful, modern website with XForm
        </Typography>
        <Stack direction="row" spacing={2} sx={{ pt: 4 }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => history.push('/guide')}
          >
            Get Started
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => history.push('/demo')}
          >
            Demo
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};
