'use client';

import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

// import NavbarMenu from './NavbarMenu';
import Theme from '@/theme';
import useAppDimensions from '@/hooks/useAppDimensions';
import { RouteIndicator as Indicator } from '../Icons';

export default function Navbar() {
  const { maxWidthDesktop, paddingXDesktop } = useAppDimensions();
  const pathname = usePathname();

  const colors = Theme.palette;

  const navbarId =
    pathname === '/' ? 'navbar-desktop-gradient' : 'navbar-desktop-solid';

  return (
    <Stack
      alignItems="center"
      className="navbar navbar-desktop"
      id={navbarId}
      justifyContent="center"
      left={0}
      maxHeight="115px"
      paddingTop="30px"
      paddingY="12px"
      top={0}
      width="100vw"
      zIndex={100}
    >
      <Box
        alignItems="center"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        margin="auto"
        maxWidth={maxWidthDesktop}
        paddingX={paddingXDesktop}
        width="100%"
      >
        <Link href="/">
          <Typography variant="h2" color="white.main">
            xano
          </Typography>
        </Link>

        {pathname !== '/' && (
          <Stack
            className="user-link"
            direction="row"
            justifyContent="space-between"
            spacing="10px"
            height="100%"
            marginTop="4px"
          >
            {[{ title: 'my-music', link: '/my-music' }].map(
              ({ title, link }, index) => (
                <Stack key={index} direction="row" spacing="10px">
                  <Stack direction="column" alignItems="center">
                    <Link href={link}>
                      <Typography color="white.main" variant="h4">
                        {title}
                      </Typography>
                    </Link>

                    {pathname === link && (
                      <Indicator color={colors.primary.main} size={60} />
                    )}
                  </Stack>

                  {index !== 2 && (
                    <Typography color="white.main" variant="h4">
                      |
                    </Typography>
                  )}
                </Stack>
              )
            )}
          </Stack>
        )}

        {/* <Stack
          className="user-link"
          direction="row"
          justifyContent="space-between"
          spacing={1}
        >
          {[
            {
              icon: <Instagram color={colors.white.main} size={35} />,
              link: 'https://www.instagram.com/ines.cruz.8/?hl=en',
            },
            {
              icon: <LinkedIn color={colors.white.main} size={35} />,
              link: 'https://www.linkedin.com/in/in%C3%AAs-cruz-03b9b1133/',
            },
            {
              icon: <Facebook color={colors.white.main} size={35} />,
              link: 'https://www.facebook.com/ines.cruz.77',
            },
          ].map(({ icon, link }, index) => (
            <Link href={link} key={index}>
              <a target="_blank">{icon}</a>
            </Link>
          ))}
        </Stack> */}
      </Box>
    </Stack>
  );
}
