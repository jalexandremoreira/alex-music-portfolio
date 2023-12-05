'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Stack from '@mui/material/Stack';
import { Box, Typography } from '@mui/material';

import AMPattern from '@/components/AMPattern';
import Button from '@/components/Button';
import theme from '@/theme';
import useAppDimensions from '@/hooks/useAppDimensions';
import {
  AMVertical,
  AMHorizontal,
  Website,
  AppleMusic,
  Instagram,
  Bandcamp,
  Spotify,
  Youtube,
} from '@/components/Icons';

export default function ContactMePage() {
  const { isMobile, paddingXMobile } = useAppDimensions();

  const { palette } = theme;

  React.useEffect(() => {
    document.title = `Alexandre Moreira's many links`;
  }, []);

  const iconSize = isMobile ? 32 : 50;

  const links = [
    {
      title: 'website',
      icon: <Website color={palette.white.main} size={iconSize} />,
      link: 'https://alexandremoreira.se',
    },
    {
      title: 'instagram',
      icon: <Instagram color={palette.white.main} size={iconSize} />,
      link: 'https://www.instagram.com/jalexandremoreira/',
    },
    {
      title: 'apple music',
      icon: <AppleMusic color={palette.white.main} size={iconSize} />,
      link: 'https://music.apple.com/se/artist/alexandre-moreira/1519329052?l=en-GB',
    },
    {
      title: 'bandcamp',
      icon: <Bandcamp color={palette.white.main} size={iconSize} />,
      link: 'https://alexandremoreira.bandcamp.com/',
    },
    {
      title: 'spotify',
      icon: <Spotify color={palette.white.main} size={iconSize} />,
      link: 'https://open.spotify.com/artist/4BCSGv1BbuWdsqUd22jRZQ',
    },
    {
      title: 'youtube',
      icon: <Youtube color={palette.white.main} size={iconSize} />,
      link: 'https://www.youtube.com/channel/UCWMDKlLqeulrMs2ItMc_8dw',
    },
  ];

  if (!isMobile)
    return (
      <Stack
        alignItems="center"
        height="100%"
        justifyContent="center"
        width="100%"
      >
        <AMPattern />

        <Stack
          alignItems="center"
          gap="50px"
          justifyContent="center"
          paddingY="20px"
          zIndex={100}
        >
          <Stack justifyContent="stretch" gap="30px" direction="row">
            <Box
              border="3px solid"
              borderColor="secondary.400"
              borderRadius={200}
              overflow="hidden"
              minWidth="190px"
              height={190}
            >
              <Image
                alt="Alex among the trees - portrait"
                height={190}
                src="/images/alex-trees-small.png"
                width={190}
                priority
              />
            </Box>

            <Stack
              gap="5px"
              width="100%"
              className="drop-shadow prevent-select"
            >
              <AMVertical color={palette.white.main} size={290} />

              <Typography color="white.main">
                sound engineer | producer | musician
              </Typography>
            </Stack>
          </Stack>

          <Stack gap="20px" width="100%">
            {links.map(({ title, link, icon }, index) => (
              <Link
                href={link}
                target="_blank"
                key={index}
                style={{ width: '100%' }}
              >
                <Button title={title} icon={icon} iconWidth={iconSize} />
              </Link>
            ))}
          </Stack>
        </Stack>
      </Stack>
    );

  return (
    <Stack width="100%" height="100%">
      <AMPattern />

      <Stack
        alignItems="center"
        gap="30px"
        height="100%"
        justifyContent="center"
        paddingX={paddingXMobile}
        width="100%"
        zIndex={100}
        paddingY={4}
      >
        <Box
          border="3px solid"
          borderColor="secondary.400"
          borderRadius={200}
          overflow="hidden"
          minWidth="190px"
          height={190}
        >
          <Image
            alt="Alex among the trees - portrait"
            height={190}
            src="/images/alex-trees-small.png"
            width={190}
            priority
          />
        </Box>

        <Stack
          gap="5px"
          width="100%"
          className="drop-shadow prevent-select"
          alignItems="center"
        >
          <AMHorizontal color={palette.white.main} size={310} />

          <Typography color="white.main">
            sound engineer | producer | musician
          </Typography>
        </Stack>

        <Stack gap="15px" width="100%">
          {links.map(({ title, link, icon }, index) => (
            <Link
              href={link}
              target="_blank"
              key={index}
              style={{ width: '100%' }}
            >
              <Button title={title} icon={icon} iconWidth={iconSize} />
            </Link>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
}
