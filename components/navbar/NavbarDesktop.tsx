'use client';

import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

// import NavbarMenu from './NavbarMenu';
import Theme from '@/theme';
import useAppDimensions from '@/hooks/useAppDimensions';
import { AMVertical, RouteIndicator as Indicator } from '../Icons';

export default function Navbar() {
  const { maxWidthDesktop, paddingXDesktop } = useAppDimensions();
  const pathname = usePathname();

  const colors = Theme.palette;

  const navbarColor =
    pathname === '/about-me' || pathname === '/my-studio'
      ? 'primary.800'
      : pathname === '/contact-me'
      ? 'primary.main'
      : 'primary.700';

  return (
    <Stack
      alignItems="center"
      bgcolor={navbarColor}
      id="navbar"
      justifyContent="center"
      left={0}
      paddingTop="30px"
      paddingY="12px"
      top={0}
      width="100%"
      zIndex={100}
      // position="sticky"
    >
      <Box
        alignItems="center"
        className="drop-shadow"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        gap="20%"
        margin="auto"
        maxWidth={maxWidthDesktop}
        paddingX={paddingXDesktop}
        width="100%"
      >
        <Link href="/">
          <AMVertical color={colors.white.main} size={120} />
        </Link>

        <Stack
          className="user-link"
          direction="row"
          flex={1}
          height="100%"
          justifyContent="space-between"
          spacing="10px"
        >
          {[
            { title: 'my music', link: '/my-music' },
            { title: 'music I recorded', link: '/music-i-recorded' },
            { title: 'about me', link: '/about-me' },
            { title: 'my studio', link: '/my-studio' },
            { title: 'contact me', link: '/contact-me' },
          ].map(({ title, link }, index) => (
            <Stack key={index} alignItems="center">
              <Link href={link}>
                <Typography color="white.main" variant="h6" fontWeight="bold">
                  {title}
                </Typography>
              </Link>

              {pathname === link && (
                <Indicator color={colors.white.main} size={60} />
              )}
            </Stack>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}
