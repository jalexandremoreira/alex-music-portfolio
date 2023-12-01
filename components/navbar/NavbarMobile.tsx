import React from 'react';
import { Box, Button, Drawer, Stack, Typography } from '@mui/material';
import { usePathname } from 'next/navigation';

import Link from 'next/link';
import useAppDimensions from '../../hooks/useAppDimensions';
import {
  AMHorizontal,
  Close,
  MenuHamburger,
  RouteIndicator as Indicator,
} from '../Icons';
import Theme from '@/theme';
import { NavLinkProps } from './Navbar';

export default function NavbarMobile({
  navLinks,
}: {
  navLinks: NavLinkProps[];
}) {
  const pathname = usePathname();
  const { paddingXMobile } = useAppDimensions();

  const [open, setOpen] = React.useState(false);

  const colors = Theme.palette;

  const handleClose = () => setOpen(false);

  const navbarColor =
    pathname === '/about-me' || pathname === '/my-studio'
      ? 'primary.800'
      : pathname === '/contact-me'
      ? 'primary.main'
      : 'primary.700';

  const Header = () => (
    <Stack
      alignItems="center"
      justifyContent="space-between"
      direction="row"
      onClick={() => {
        console.log('clicked');
        setOpen(!open);
      }}
      width="100%"
    >
      <Box
        onClick={(e) => {
          console.log(e);
          e.stopPropagation();
          handleClose();
        }}
      >
        <Link href="/">
          <AMHorizontal color={colors.white.main} size={220} />
        </Link>
      </Box>

      {open ? (
        <Close size={36} color={colors.white.main} />
      ) : (
        <MenuHamburger size={36} color={colors.white.main} />
      )}
    </Stack>
  );

  return (
    <Stack
      position="sticky"
      sx={{
        alignItems: 'center',
        backgroundColor: navbarColor,
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: '1000',
      }}
    >
      <Box
        sx={{
          border: 'none',
          paddingX: paddingXMobile,
          paddingY: '10px',
          width: '100%',
        }}
      >
        <Header />
      </Box>

      <Drawer
        anchor="top"
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            backgroundColor: navbarColor,
          },
        }}
      >
        <Stack
          sx={{
            border: 'none',
            paddingX: paddingXMobile,
            paddingY: '10px',
            width: '100%',
          }}
          spacing="15px"
        >
          <Header />

          <Box width="100%" height="1px" bgcolor="white.main" />

          <Box onClick={handleClose}>
            <Stack
              className="user-link"
              flex={1}
              height="100%"
              justifyContent="space-between"
              gap="10px"
              alignItems="flex-start"
            >
              {navLinks.map(({ title, link }, index) => (
                <Stack key={index} alignItems="center">
                  <Link href={link}>
                    <Typography
                      color="white.main"
                      variant="h6"
                      fontWeight="bold"
                    >
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
      </Drawer>
    </Stack>
  );
}
