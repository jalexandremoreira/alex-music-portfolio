'use client';

import React from 'react';
import Stack from '@mui/material/Stack';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';

import Accordion from '@/components/Accordion';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header';
import PictureWithBorder from '@/components/PictureWithBorder';
import theme from '@/theme';
import useAppDimensions from '@/hooks/useAppDimensions';
import { Guitar, Microphone } from '@/components/Icons';
import { getInstruments, getRecGear } from '@/services/gearList';

export default function MyStudioPage() {
  const {
    isMobile,
    maxWidthDesktop,
    paddingTopDesktop,
    paddingTopMobile,
    paddingXDesktop,
    paddingXMobile,
  } = useAppDimensions();

  React.useEffect(() => {
    document.title = 'Alexandre Moreira - my studio :)';
  }, []);

  const { palette } = theme;

  const picDimensions = [
    {
      wD: 338,
      hD: 338,
    },
    {
      wD: 503,
      hD: 503,
    },
  ];

  const picBorder = [10, 16];

  const text = [
    `Hello one and all, and welcome to our cosy corner, in the heart of trendy Ringön, near the city center in Gothenburg. We're not your average studio; we're a diverse bunch of laid-back and neurodiverse folks who are passionate about making and playing music. The studio features high ceilings, vintage drum sets, a marimba, a xylophone, and a parade of hand percussion instruments, as well as electric basses, electric and acoustic guitars, a unique sounding vertical piano, and a midi controller for all your virtual instrument needs!`,
    `Whether you're a solo artist, a band, or just a music enthusiast looking to explore new sounds, our studio is the perfect playground for your sonic adventures. We've got the gear to make your recordings sound top-notch, and the space to let your creativity soar. It's not just a studio; it's a community where music comes to life. So, if you're ready to make magic happen, swing by, say hi, and let's make some sweet tunes together! 🎵✨`,
  ];

  if (!isMobile) {
    return (
      <Stack
        alignItems="center"
        height="100%"
        justifyContent="center"
        width="100%"
      >
        <Stack
          height="100%"
          gap="50px"
          marginTop="50px"
          maxWidth={maxWidthDesktop}
          paddingX={paddingXDesktop}
          paddingTop={paddingTopDesktop}
          width="100%"
          zIndex={20}
        >
          <Stack direction="row" gap="80px">
            <Stack gap="50px" flex={1}>
              <Stack width="100%" alignItems="center">
                <Header
                  color="white.main"
                  variant="h3"
                  className="titles"
                  text="my studio"
                />
              </Stack>

              <Stack gap="20px">
                {text.map((item, index) => (
                  <Typography color="white.main" key={index}>
                    {item}
                  </Typography>
                ))}
              </Stack>
            </Stack>

            <PictureWithBorder
              src="/images/my-studio.png"
              picDimensions={picDimensions[1]}
              picBorder={picBorder[1]}
              alt="Picture of my studio"
            />
          </Stack>

          <Stack width="100%" alignItems="center">
            <Header
              color="white.main"
              variant="h3"
              className="titles"
              text="available gear"
            />
          </Stack>

          <Stack width="100%" gap="20px">
            <Accordion
              title="recording gear"
              icon={<Microphone size={28} color={palette.white.main} />}
            >
              <Table aria-label="recording gear table">
                <TableBody>
                  {getRecGear().map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <Typography color="white.main">{row.name}</Typography>
                      </TableCell>

                      <TableCell align="right">
                        <Typography color="white.main">
                          {row.amount === 'various'
                            ? 'various'
                            : `x${row.amount}`}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Accordion>

            <Accordion
              title="available instruments"
              icon={<Guitar size={28} color={palette.white.main} />}
            >
              <Table aria-label="recording gear table">
                <TableBody>
                  {getInstruments().map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        <Typography color="white.main">{row.name}</Typography>
                      </TableCell>

                      <TableCell align="right">
                        <Typography color="white.main">
                          {row.amount === 'various'
                            ? 'various'
                            : `x${row.amount}`}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Accordion>
          </Stack>
        </Stack>

        <Footer colorScheme={2} />
      </Stack>
    );
  }

  return (
    <Stack
      alignItems="center"
      height="100%"
      justifyContent="center"
      width="100%"
    >
      <Stack
        alignItems="center"
        gap="20px"
        height="100%"
        paddingTop={paddingTopMobile}
        paddingX={paddingXMobile}
        width="100%"
        zIndex={20}
      >
        <Header
          color="white.main"
          variant="h4"
          className="titles"
          text="my studio"
        />

        <Stack gap="20px">
          {text.map((item, index) => (
            <Typography color="white.main" key={index}>
              {item}
            </Typography>
          ))}
        </Stack>

        <PictureWithBorder
          src="/images/my-studio.png"
          picDimensions={picDimensions[0]}
          picBorder={picBorder[0]}
          alt="Picture of my studio"
        />

        <Header
          color="white.main"
          variant="h4"
          className="titles"
          text="available gear"
        />

        <Stack width="100%" gap="15px">
          <Accordion
            title="recording gear"
            icon={<Microphone size={20} color={palette.white.main} />}
          >
            <Table aria-label="recording gear table">
              <TableBody>
                {getRecGear().map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <Typography color="white.main" variant="body2">
                        {row.name}
                      </Typography>
                    </TableCell>

                    <TableCell align="right">
                      <Typography color="white.main" variant="body2">
                        {row.amount === 'various'
                          ? 'various'
                          : `x${row.amount}`}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Accordion>

          <Accordion
            title="available instruments"
            icon={<Guitar size={20} color={palette.white.main} />}
          >
            <Table aria-label="recording gear table">
              <TableBody>
                {getInstruments().map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      <Typography color="white.main" variant="body2">
                        {row.name}
                      </Typography>
                    </TableCell>

                    <TableCell align="right">
                      <Typography color="white.main" variant="body2">
                        {row.amount === 'various'
                          ? 'various'
                          : `x${row.amount}`}
                      </Typography>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Accordion>
        </Stack>
      </Stack>

      <Footer colorScheme={2} />
    </Stack>
  );
}
