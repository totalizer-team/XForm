import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import { history } from 'umi';
import './index.less';
export default () => {
  return (
    <Box
      sx={{
        display: 'flex',
        pt: 10,
        pb: 10,
        width: 1100,
        margin: '0 auto',
      }}
    >
      <Box
        sx={{
          width: 300,
          height: 300,
          margin: '0 auto',
          background: 'url(./logo.png) center center no-repeat',
          backgroundSize: '125% 125%',
        }}
      ></Box>
      <Box sx={{ width: 800, p: 1, pl: 3 }}>
        <Typography fontSize={62} fontWeight="bold">
          XForm
        </Typography>
        <Typography fontSize={22}>
          React components for building web forms using{' '}
          <strong>Material UI</strong> and <strong>Mobx</strong>, based on a{' '}
          <strong>JSON schema</strong>.
        </Typography>
        <Typography color="textSecondary" sx={{ mt: 1 }}>
          A formal version will be available soon.
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
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
            onClick={() => history.push('/examples')}
          >
            Examples
          </Button>
          <Button
            variant="text"
            size="large"
            onClick={() => history.push('/aboutus')}
          >
            About us
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
