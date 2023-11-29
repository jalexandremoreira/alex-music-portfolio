import React from 'react';
import { Stack, Typography } from '@mui/material';
import Link from 'next/link';

import Links from '../home/Links';
import theme from '@/theme';

export default function Footer({ colorScheme }: { colorScheme: 1 | 2 }) {
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
      gap="20px"
      paddingY="40px"
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
