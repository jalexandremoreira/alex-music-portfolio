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
  const {
    isMobile,
    maxWidthDesktop,
    paddingTopDesktop,
    paddingTopMobile,
    paddingXDesktop,
    paddingXMobile,
  } = useAppDimensions();

  const { palette } = theme;

  const info = {
    email: 'alexmoreiramusic@gmail.com',
    mobile: '+46 (0)76 837 56 62',
    moreInfo: `For information regarding services, fees, availability or information regarding the studio, please contact me`,
    link: 'linktr.ee/jalexandremoreira',
  };

  if (!isMobile)
    return (
      <Stack
        alignItems="center"
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
          paddingTop={paddingTopDesktop}
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
              {info.moreInfo}
            </Typography>

            <Stack gap="20px">
              <Accordion
                icon={<Phone size={28} color={palette.primary[600]} />}
                title="phone number"
              >
                <Typography color="white.main" variant="h5">
                  {info.mobile}
                </Typography>
              </Accordion>

              <Accordion
                icon={<Email size={28} color={palette.primary[600]} />}
                title="email"
              >
                <Typography color="white.main" variant="h5">
                  {info.email}
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

            <Link href={`https://${info.link}`} target="_blank">
              <Typography
                textAlign="center"
                color="primary.600"
                fontWeight="bold"
                sx={{
                  transition: 'color 0.1s ease',
                  '&:hover': { color: 'primary.700' },
                }}
              >
                {info.link}
              </Typography>
            </Link>
          </Stack>
        </Stack>
      </Stack>
    );

  return (
    <Stack
      alignItems="center"
      gap="20px"
      justifyContent="center"
      paddingTop={paddingTopMobile}
      paddingX={paddingXMobile}
      width="100%"
    >
      <QR
        bgColor={palette.primary[600]}
        color={palette.primary.main}
        size={350}
      />

      <Link href={`https://${info.link}`} target="_blank">
        <Typography
          textAlign="center"
          color="primary.600"
          fontWeight="bold"
          sx={{
            transition: 'color 0.1s ease',
            '&:hover': { color: 'primary.700' },
          }}
        >
          {info.link}
        </Typography>
      </Link>

      <Box bgcolor="primary.600" height="2px" width="100%" />

      <Stack alignItems="center">
        <Header
          className="titles prevent-select"
          color="white.main"
          text="let's chat!"
          variant="h4"
        />
      </Stack>

      <Typography color="white.main" className="prevent-select">
        {info.moreInfo}
      </Typography>

      <Stack gap="20px" width="100%">
        <Accordion
          icon={<Phone size={20} color={palette.primary[600]} />}
          title="phone number"
        >
          <Typography color="white.main">{info.mobile}</Typography>
        </Accordion>

        <Accordion
          icon={<Email size={20} color={palette.primary[600]} />}
          title="email"
        >
          <Typography color="white.main">{info.email}</Typography>
        </Accordion>
      </Stack>

      <Stack width="100%">
        <Links
          color={palette.primary[600]}
          hoverColor={palette.primary[700]}
          spaceBetween
        />
      </Stack>

      <Box />
    </Stack>
  );
}
