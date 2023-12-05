'use client';
import React from 'react';
import Link from 'next/link';
import Stack from '@mui/material/Stack';
import { Box, Typography } from '@mui/material';

import AMPattern from '@/components/AMPattern';
import info from '@/services/personalInfo';
import QR from '@/components/QR';
import theme from '@/theme';
import useAppDimensions from '@/hooks/useAppDimensions';
import { AMVertical, Email, Phone, Website } from '@/components/Icons';

export default function ContactMePage() {
  const { isMobile, paddingXMobile } = useAppDimensions();

  const { palette } = theme;

  React.useEffect(() => {
    document.title = `Alexandre Moreira's very cool business card`;
  }, []);

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
          direction="row"
          gap="50px"
          justifyContent="center"
          width="100%"
          zIndex={100}
        >
          <Stack justifyContent="stretch" gap="50px" alignItems="stretch">
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

          <Stack gap="15px">
            <QR
              bgColor={palette.primary[600]}
              color={palette.primary.main}
              size={350}
            />

            <Link
              href={`https://${info.website}${info.linkTree}`}
              target="_blank"
            >
              <Typography
                textAlign="center"
                color="primary.600"
                fontWeight="bold"
                sx={{
                  transition: 'color 0.1s ease',
                  '&:hover': { color: 'primary.700' },
                }}
              >
                all my links
              </Typography>
            </Link>
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
        <Stack gap="10px" width="100%" className="drop-shadow prevent-select">
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

        <Stack gap="10px">
          <QR
            bgColor={palette.primary[600]}
            color={palette.primary.main}
            size={350}
          />

          <Link
            href={`https://${info.website}${info.linkTree}`}
            target="_blank"
          >
            <Typography
              textAlign="center"
              color="primary.600"
              fontWeight="bold"
              sx={{
                transition: 'color 0.1s ease',
                '&:hover': { color: 'primary.700' },
              }}
            >
              all my links
            </Typography>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
}
