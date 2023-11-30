'use client';
import React from 'react';
import Link from 'next/link';
import Stack from '@mui/material/Stack';
import { Box, Typography } from '@mui/material';

import Accordion from '@/components/Accordion';
import Header from '@/components/header';
import Links from '@/components/home/Links';
import QR from '@/components/QR';
import theme from '@/theme';
import useAppDimensions from '@/hooks/useAppDimensions';
import { Email, Phone } from '@/components/Icons';

export default function ContactMePage() {
  const { maxWidthDesktop, paddingXDesktop } = useAppDimensions();

  const { palette } = theme;

  return (
    <Stack
      alignItems="center"
      bgcolor="primary.main"
      height="100%"
      justifyContent="center"
      width="100%"
    >
      <Stack
        alignItems="center"
        direction="row"
        gap="50px"
        justifyContent="center"
        marginBottom="60px"
        maxWidth={maxWidthDesktop}
        paddingTop="100px"
        paddingX={paddingXDesktop}
        width="100%"
      >
        <Stack maxWidth="40%" gap="40px">
          <Header
            className="titles prevent-select"
            color="white.main"
            text="let's chat!"
            variant="h3"
          />

          <Typography
            color="white.main"
            variant="h5"
            className="prevent-select"
          >
            For information regarding services, fees, availability or
            information regarding the studio, please contact me
          </Typography>

          <Stack gap="20px">
            <Accordion
              icon={<Phone size={28} color={palette.primary[600]} />}
              title="phone number"
            >
              <Typography color="white.main" variant="h5">
                +46 (0)76 837 56 62
              </Typography>
            </Accordion>

            <Accordion
              icon={<Email size={28} color={palette.primary[600]} />}
              title="email"
            >
              <Typography color="white.main" variant="h5">
                alexmoreiramusic@gmail.com
              </Typography>
            </Accordion>
          </Stack>

          <Links
            color={palette.primary[600]}
            hoverColor={palette.primary[700]}
            spaceBetween
          />
        </Stack>

        <Box bgcolor="primary.600" width="2px" height="100%" />

        <Stack gap="20px">
          <QR
            bgColor={palette.primary[600]}
            color={palette.primary.main}
            size={350}
          />

          <Link href="https://linktr.ee/jalexandremoreira" target="_blank">
            <Typography
              textAlign="center"
              color="primary.600"
              fontWeight="bold"
              sx={{
                transition: 'color 0.1s ease',
                '&:hover': { color: 'primary.700' },
              }}
            >
              linktr.ee/jalexandremoreira
            </Typography>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}
