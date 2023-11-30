'use client';
import React from 'react';
import Link from 'next/link';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';

import Circles from '@/components/home/Circles';
import Links from '@/components/home/Links';
import PictureWithBorder from '@/components/PictureWithBorder';
import theme from '@/theme';
import { AMHorizontal } from '@/components/Icons';
import useAppDimensions from '@/hooks/useAppDimensions';

export default function MusicPage() {
  React.useEffect(() => {
    document.title = 'Alexandre Moreira';
  }, []);

  const { isMobile, paddingMobile } = useAppDimensions();

  const { palette } = theme;

  const hover = {
    transition: 'color 0.1s ease',
    '&:hover': { color: 'primary.800' },
  };
  const picDimensions = [
    {
      wD: 340,
      hD: 476,
    },
    {
      wD: 454,
      hD: 636,
    },
  ];
  const picBorder = 16;

  if (!isMobile) {
    return (
      <Stack
        width="100%"
        height="100%"
        direction="row"
        className="prevent-select"
      >
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
            width={picDimensions[1].wD + picBorder}
          >
            <AMHorizontal color={palette.white.main} size={400} />

            <Typography color="white.main" variant="h5">
              sound engineer | producer | musician
            </Typography>
          </Stack>
          <PictureWithBorder
            src="/images/alex-trees.png"
            picDimensions={picDimensions[1]}
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
            height={picDimensions[1].hD + picBorder}
            zIndex={20}
          >
            <Stack gap="20px">
              {[
                { title: 'my music', link: '/my-music' },
                { title: 'music I recorded', link: '/music-i-recorded' },
                { title: 'about me', link: '/about-me' },
                { title: 'my studio', link: '/my-studio' },
                { title: 'contact me', link: 'contact-me' },
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

            <Links
              color={palette.primary.main}
              hoverColor={palette.primary[800]}
            />
          </Stack>
        </Stack>
      </Stack>
    );
  }

  return (
    <Stack width="100%" height="100%" className="prevent-select">
      <Stack
        alignItems="center"
        width="100%"
        zIndex={20}
        padding={paddingMobile}
        gap="20px"
      >
        <Stack
          alignItems="center"
          className="drop-shadow"
          gap="15px"
          width="100%"
        >
          <AMHorizontal color={palette.white.main} size={300} />

          <Typography color="white.main">
            sound engineer | producer | musician
          </Typography>
        </Stack>

        <PictureWithBorder
          src="/images/alex-trees.png"
          picDimensions={picDimensions[0]}
          picBorder={picBorder}
          alt="Alexandre Moreira"
        />
      </Stack>

      <Stack bgcolor="white.200" flex={1} width="100%">
        <Circles />

        <Stack paddingY={paddingMobile} paddingX="40px" gap="50px" zIndex={20}>
          <Stack gap="10px">
            {[
              { title: 'my music', link: '/my-music' },
              { title: 'music I recorded', link: '/music-i-recorded' },
              { title: 'about me', link: '/about-me' },
              { title: 'my studio', link: '/my-studio' },
              { title: 'contact me', link: 'contact-me' },
            ].map(({ title, link }, index) => (
              <Link href={link} key={index}>
                <Typography
                  color="primary.main"
                  variant="h5"
                  fontWeight="600"
                  sx={hover}
                >
                  {title}
                </Typography>
              </Link>
            ))}
          </Stack>

          <Stack width="100%" alignItems="center">
            <Links
              color={palette.primary.main}
              hoverColor={palette.primary[800]}
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
