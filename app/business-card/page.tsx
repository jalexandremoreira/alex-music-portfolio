'use client';
import React from 'react';
import Link from 'next/link';
import Stack from '@mui/material/Stack';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import QR from '@/components/QR';
import theme from '@/theme';
import useAppDimensions from '@/hooks/useAppDimensions';
import { AMVertical, Email, Phone, Website } from '@/components/Icons';

export default function ContactMePage() {
  const { isMobile, paddingXMobile } = useAppDimensions();

  const { palette } = theme;

  const info = {
    email: 'alexmoreiramusic@gmail.com',
    mobile: '+46 (0)76 837 56 62',
    website: 'www.alexandremoreira.se',
  };

  if (!isMobile)
    return (
      <Stack
        alignItems="center"
        height="100%"
        justifyContent="center"
        width="100%"
      >
        <Box height="100%" overflow="hidden" position="absolute" width="100%">
          <Image
            alt="Alexandre Moreira"
            width={5900}
            height={4255}
            priority
            src="/images/am-bg.png"
            style={{
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
            }}
          />
        </Box>

        <Stack
          alignItems="center"
          direction="row"
          gap="50px"
          justifyContent="center"
          width="100%"
          zIndex={100}
        >
          <Stack justifyContent="stretch" gap="50px" alignItems="stretch">
            <Stack gap="5px" width="100%">
              <AMVertical color={palette.white.main} size={290} />

              <Typography color="white.main">
                sound engineer | producer | musician
              </Typography>
            </Stack>

            <Stack gap="10px" width="100%">
              <Stack direction="row" gap="10px" alignItems="center">
                <Phone color={palette.white.main} size={24} />

                <Typography color="white.main" variant="h6">
                  {info.mobile}
                </Typography>
              </Stack>

              <Stack direction="row" gap="10px" alignItems="center">
                <Email color={palette.white.main} size={24} />

                <Typography color="white.main" variant="h6">
                  {info.email}
                </Typography>
              </Stack>

              <Stack direction="row" gap="10px" alignItems="center">
                <Website color={palette.white.main} size={24} />

                <Link href={`https://${info.website}`} target="_blank">
                  <Typography
                    textAlign="center"
                    color="white.main"
                    fontWeight="bold"
                    sx={{
                      transition: 'color 0.1s ease',
                      '&:hover': { color: 'white.300' },
                    }}
                    variant="h6"
                  >
                    {info.website}
                  </Typography>
                </Link>
              </Stack>
            </Stack>
          </Stack>
          <Box bgcolor="primary.600" width="2px" height="100%" />
          <QR
            bgColor={palette.primary[600]}
            color={palette.primary.main}
            size={350}
          />
        </Stack>
      </Stack>
    );

  return (
    <Stack width="100%" height="100%">
      <Box height="100%" overflow="hidden" position="absolute" width="100%">
        <Image
          alt="Alexandre Moreira"
          width={5900}
          height={4255}
          priority
          src="/images/am-bg.png"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
          }}
        />
      </Box>

      <Stack
        alignItems="center"
        gap="30px"
        height="100%"
        justifyContent="center"
        paddingX={paddingXMobile}
        width="100%"
        zIndex={100}
      >
        <Stack gap="10px" width="100%">
          <AMVertical color={palette.white.main} size={240} />

          <Typography color="white.main">
            sound engineer | producer | musician
          </Typography>
        </Stack>

        <Stack gap="10px" width="100%">
          <Stack direction="row" gap="10px" alignItems="center">
            <Phone color={palette.white.main} size={24} />

            <Typography color="white.main">{info.mobile}</Typography>
          </Stack>

          <Stack direction="row" gap="10px" alignItems="center">
            <Email color={palette.white.main} size={24} />

            <Typography color="white.main">{info.email}</Typography>
          </Stack>

          <Stack direction="row" gap="10px" alignItems="center">
            <Website color={palette.white.main} size={24} />

            <Link href={`https://${info.website}`} target="_blank">
              <Typography
                textAlign="center"
                color="white.main"
                fontWeight="bold"
                sx={{
                  transition: 'color 0.1s ease',
                  '&:hover': { color: 'white.300' },
                }}
              >
                {info.website}
              </Typography>
            </Link>
          </Stack>
        </Stack>

        <Box bgcolor="primary.600" height="2px" width="100%" />

        <QR
          bgColor={palette.primary[600]}
          color={palette.primary.main}
          size={350}
        />
      </Stack>
    </Stack>
  );
}
