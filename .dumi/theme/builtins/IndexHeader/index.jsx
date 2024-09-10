import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { history } from 'umi';
import './index.less';
export default () => {
  return (
    <Box
      sx={{
        display: 'flex',
        pt: 4,
        pb: 10,
        width: 900,
        margin: '0 auto',
      }}
    >
      <Box
        sx={{
          width: 250,
          height: 250,
          margin: '0 auto',
          background: 'url(./logo.png) center center no-repeat',
          backgroundSize: '125% 125%',
        }}
      ></Box>
      <Box sx={{ width: 650, p: 1 }}>
        <Typography fontSize={62} fontWeight="bold">
          XForm
        </Typography>
        <Typography fontSize={22}>
          React components for building web forms using{' '}
          <strong>Material UI</strong> and <strong>MobX</strong>, based on a{' '}
          <strong>JSON schema</strong>.
        </Typography>
        <Typography color="textSecondary">
          A formal version will be available soon.
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => history.push('/guide')}
          >
            What is XForm?
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => history.push('/demo')}
          >
            Playground
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
