import GitHubIcon from '@mui/icons-material/GitHub';
import { Avatar, Box, Link, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';

export default () => {
  const users = [
    {
      avatar: 'https://avatars.githubusercontent.com/u/7948534?v=4',
      name: '张博',
      nickname: '云亿',
      github: 'https://github.com/Z8264',
      intro:
        'Founder of Totalizer-Team, a full-stack development architect, also the creator of XForm and various other open-source libraries.',
    },
    {
      avatar: '',
      name: '1**',
      nickname: '**',
      github: '**',
      intro: 'Front-end Senior Technical Specialist',
    },
    {
      avatar: '',
      name: '2**',
      nickname: '**',
      github: '**',
      intro: 'Front-end Senior Technical Specialist',
    },
    ,
    {
      avatar: '',
      name: '3**',
      nickname: '**',
      github: '**',
      intro: 'Front-end Senior Technical Specialist',
    },
  ];
  return (
    <>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Stack
          spacing={1}
          sx={{
            width: 1100,
            margin: '0 auto',
            pt: 15,
            pb: 15,
          }}
          textAlign="center"
        >
          <Typography fontSize={52} color="textPrimary">
            Totalizer-Team
          </Typography>
          <Typography fontSize={24} color="textSecondary">
            Our mission is to empower everyone to easily develop applications.
          </Typography>
        </Stack>
      </Box>
      <Stack
        spacing={8}
        sx={{
          width: 1100,
          margin: '0 auto',
          pt: 10,
          pb: 10,
        }}
      >
        <Typography fontSize={32} textAlign="center">
          Technical Steering Committee
        </Typography>
        <Grid container spacing={4}>
          {users.map((user) => {
            return (
              <Grid size={3} key={user.name}>
                <Stack spacing={2} textAlign="center" alignItems="ceenter">
                  <Avatar
                    src={user.avatar}
                    style={{
                      width: 250,
                      height: 250,
                      margin: '0 auto',
                      border: '5px solid #def',
                      boxShadow: '0 0 0 5px #08c',
                    }}
                  ></Avatar>
                  <Typography fontSize={24}>{user.name}</Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <GitHubIcon fontSize="small" />
                    <Link href={user.github} target="_blank">
                      @{user.nickname}
                    </Link>
                  </Stack>
                  <Typography>{user.intro}</Typography>
                </Stack>
              </Grid>
            );
          })}
        </Grid>
      </Stack>
      <Box sx={{ p: 10 }}></Box>
    </>
  );
};
