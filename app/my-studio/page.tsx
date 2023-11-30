'use client';
import Stack from '@mui/material/Stack';
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from '@mui/material';

import Accordion from '@/components/Accordion';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header';
import useAppDimensions from '@/hooks/useAppDimensions';
import PictureWithBorder from '@/components/PictureWithBorder';
import theme from '@/theme';
import { Guitar, Microphone } from '@/components/Icons';
import { getInstruments, getRecGear } from '@/services/gearList';

export default function MyStudioPage() {
  const { maxWidthDesktop, paddingXDesktop } = useAppDimensions();

  const { palette } = theme;

  const picDimensions = {
    wD: 503,
    hD: 503,
  };
  const picBorder = 16;

  return (
    <Stack
      alignItems="center"
      bgcolor="primary.800"
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
        paddingTop="100px"
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
              <Typography color="white.main">
                Hello one and all, and welcome to our cosy corner, in the heart
                of trendy Ringön, near the city center in Gothenburg. We&apos;re
                not your average studio; we&apos;re a diverse bunch of laid-back
                and neurodiverse folks who are passionate about making and
                playing music. The studio features high ceilings, vintage drum
                sets, a marimba, a xylophone, and a parade of hand percussion
                instruments, as well as electric basses, electric and acoustic
                guitars, a unique sounding vertical piano, and a midi controller
                for all your virtual instrument needs!
              </Typography>

              <Typography color="white.main">
                Whether you&apos;re a solo artist, a band, or just a music
                enthusiast looking to explore new sounds, our studio is the
                perfect playground for your sonic adventures. We&apos;ve got the
                gear to make your recordings sound top-notch, and the space to
                let your creativity soar. It&apos;s not just a studio; it&apos;s
                a community where music comes to life. So, if you&apos;re ready
                to make magic happen, swing by, say hi, and let&apos;s make some
                sweet tunes together! 🎵✨
              </Typography>
            </Stack>
          </Stack>

          <PictureWithBorder
            src="/images/my-studio.png"
            picDimensions={picDimensions}
            picBorder={picBorder}
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
