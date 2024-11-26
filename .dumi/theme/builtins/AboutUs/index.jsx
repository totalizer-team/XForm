import GitHubIcon from '@mui/icons-material/GitHub';
import { Avatar, Box, Link, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import React from 'react';

export default function AboutUs() {
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
      avatar: 'https://avatars.githubusercontent.com/u/6291670?v=4',
      name: '聂绎静',
      nickname: 'sanshuiyijing',
      github: 'https://github.com/sanshuiyijing',
      intro: 'Front-end Senior Technical Specialist',
    },
    {
      avatar: 'https://avatars.githubusercontent.com/u/13548092?v=4',
      name: '贾子灵',
      nickname: 'jzllove9',
      github: 'https://github.com/jzllove9',
      intro: 'Front-end Senior Technical Specialist',
    },
    {
      avatar: 'https://avatars.githubusercontent.com/u/10071557?v=4',
      name: '陈贽',
      nickname: 'sandii chen',
      github: 'https://github.com/sandii',
      intro: 'Front-end Senior Technical Specialist',
    },
  ];
  const mumbers = [
    {
      avatar: '--',
      name: '--',
      nickname: '--',
      github: 'https://github.com/Z8264',
      intro: 'Front-end Senior Technical Specialist',
    },
    {
      avatar: '--',
      name: '--',
      nickname: '--',
      github: 'https://github.com/Z8264',
      intro: 'Front-end Senior Technical Specialist',
    },
    {
      avatar: '--',
      name: '--',
      nickname: '--',
      github: 'https://github.com/Z8264',
      intro: 'Front-end Senior Technical Specialist',
    },
    {
      avatar: '--',
      name: '--',
      nickname: '--',
      github: 'https://github.com/Z8264',
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
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Stack
          spacing={5}
          sx={{
            width: 1100,
            margin: '0 auto',
            pt: 5,
            pb: 5,
          }}
        >
          <Typography fontSize={24} textAlign="center">
            Technical Steering Committee
          </Typography>
          <Grid container spacing={4}>
            {users.map((user) => {
              return (
                <Grid size={3} key={user.name}>
                  <Stack spacing={2} textAlign="center" alignItems="ceenter">
                    <Box sx={{ position: 'relative', height: 220 }}>
                      <Avatar
                        src={user.avatar}
                        style={{
                          width: 200,
                          height: 200,
                          margin: '0 auto',
                          border: '5px solid #def',
                          boxShadow: '0 0 0 5px #08c',
                        }}
                      ></Avatar>
                      <Typography
                        fontSize={20}
                        sx={{
                          position: 'absolute',
                          bottom: 0,
                          left: '50%',
                          background: '#fff',
                          border: '3px solid #def',
                          boxShadow: '0 0 0 3px #08c',
                          borderRadius: 2,
                          width: 150,
                          transform: 'translateX(-50%)',
                        }}
                      >
                        {user.name}
                      </Typography>
                    </Box>
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
      </Box>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Stack
          spacing={5}
          sx={{
            width: 1100,
            margin: '0 auto',
            pt: 5,
            pb: 5,
          }}
        >
          <Typography fontSize={24} textAlign="center">
            Support Team
          </Typography>
          <Grid container spacing={4}>
            {mumbers.map((user) => {
              return (
                <Grid size={3} key={user.name}>
                  <Stack spacing={2} textAlign="center" alignItems="ceenter">
                    <Box sx={{ position: 'relative', height: 220 }}>
                      <Avatar
                        src={user.avatar}
                        style={{
                          width: 200,
                          height: 200,
                          margin: '0 auto',
                          border: '5px solid #def',
                          boxShadow: '0 0 0 5px #08c',
                        }}
                      ></Avatar>
                      <Typography
                        fontSize={20}
                        sx={{
                          position: 'absolute',
                          bottom: 0,
                          left: '50%',
                          background: '#fff',
                          border: '3px solid #def',
                          boxShadow: '0 0 0 3px #08c',
                          borderRadius: 2,
                          width: 150,
                          transform: 'translateX(-50%)',
                        }}
                      >
                        {user.name}
                      </Typography>
                    </Box>
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
      </Box>
    </>
  );
}
