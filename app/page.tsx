'use client';
import React from 'react';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';

import PictureWithBorder from '@/components/PictureWithBorder';
import {
  AMHorizontal,
  Bandcamp,
  Instagram,
  Spotify,
  Tiktok,
  Youtube,
} from '@/components/Icons';
import theme from '@/theme';
import Circles from '@/components/home/circles';

export default function MusicPage() {
  React.useEffect(() => {
    document.title = 'Alexandre Moreira';
  }, []);

  const { palette } = theme;

  const hover = {
    transition: 'color 0.3s ease',
    '&:hover': { color: 'primary.800' },
  };
  const picDimensions = {
    wD: 454,
    hD: 636,
  };
  const picBorder = 16;

  return (
    <Stack width="100%" height="100%" direction="row" bgcolor="primary.700">
      <Circles />

      <Stack
        width="50%"
        justifyContent="center"
        alignItems="flex-end"
        paddingRight="3%"
        gap="40px"
        zIndex={20}
      >
        <Stack
          className="drop-shadow"
          gap="20px"
          width={picDimensions.wD + picBorder}
        >
          <AMHorizontal color={palette.white.main} size={400} />

          <Typography color="white.main" variant="h5">
            sound engineer | producer | musician
          </Typography>
        </Stack>
        <PictureWithBorder
          src="/images/alex-trees.png"
          picDimensions={picDimensions}
          picBorder={picBorder}
          alt="Alexandre Moreira"
        />
      </Stack>

      <Stack
        bgcolor="white.200"
        height="100%"
        justifyContent="center"
        paddingLeft="3%"
        paddingTop="134px"
        width="50%"
      >
        <Stack
          justifyContent="space-between"
          height={picDimensions.hD + picBorder}
          zIndex={20}
        >
          <Stack gap="20px">
            {[
              { title: 'my music', link: '/my-music' },
              { title: 'music I recorded', link: '/my-music' },
              { title: 'about me', link: '/my-music' },
              { title: 'contact me', link: '/my-music' },
              { title: 'my studio', link: '/my-music' },
            ].map(({ title, link }, index) => (
              <Link href={link} key={index}>
                <Typography
                  color="primary.main"
                  variant="h3"
                  fontWeight="600"
                  sx={hover}
                >
                  {title}
                </Typography>
              </Link>
            ))}
          </Stack>

          <Stack direction="row" gap={3}>
            {[
              {
                icon: <Instagram size={55} color={palette.primary.main} />,
                link: '#',
              },
              {
                icon: <Tiktok size={55} color={palette.primary.main} />,
                link: '#',
              },
              {
                icon: <Bandcamp size={55} color={palette.primary.main} />,
                link: '#',
              },
              {
                icon: <Spotify size={55} color={palette.primary.main} />,
                link: '#',
              },
              {
                icon: <Youtube size={55} color={palette.primary.main} />,
                link: '#',
              },
            ].map(({ icon, link }, index) => (
              <Link href={link} key={index}>
                {icon}
              </Link>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
