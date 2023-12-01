import React from 'react';
import Link from 'next/link';
import { Stack, Typography } from '@mui/material';

import Links from '../home/Links';
import theme from '@/theme';
import useAppDimensions from '@/hooks/useAppDimensions';

export default function Footer({ colorScheme }: { colorScheme: 1 | 2 }) {
  const { isMobile } = useAppDimensions();

  const { palette } = theme;

  const mainColor = colorScheme === 1 ? 'primary.main' : 'primary.600';
  const hoverColor = colorScheme === 1 ? 'primary.800' : 'primary.700';

  const hover = {
    transition: 'color 0.1s ease',
    '&:hover': { color: hoverColor },
  };

  return (
    <Stack
      alignItems="center"
      bgcolor="transparent"
      gap={isMobile ? '15px' : '20px'}
      paddingY={isMobile ? '25px' : '40px'}
      width="100%"
    >
      <Link href="/contact-me">
        <Typography color={mainColor} fontWeight="bold" sx={hover}>
          contact me or inquiries
        </Typography>
      </Link>

      <Links
        color={colorScheme === 1 ? palette.primary.main : palette.primary[600]}
        hoverColor={
          colorScheme === 1 ? palette.primary[800] : palette.primary[700]
        }
      />
    </Stack>
  );
}
