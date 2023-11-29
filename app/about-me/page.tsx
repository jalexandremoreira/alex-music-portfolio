'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Masonry from '@mui/lab/Masonry';
import Stack from '@mui/material/Stack';
import { Box, Typography } from '@mui/material';
import { shuffle } from 'lodash';

import Footer from '@/components/footer/Footer';
import Header from '@/components/header';
import useAppDimensions from '@/hooks/useAppDimensions';
import { getTestimonials, Testimonial } from '@/services/testimonials';

export default function MyMusicPage() {
  const { maxWidthDesktop, paddingXDesktop } = useAppDimensions();

  const [testimonials, setTestimonials] = React.useState<Testimonial[] | null>(
    getTestimonials()
  );

  React.useEffect(() => {
    const tests = getTestimonials() as Testimonial[];
    setTestimonials(shuffle(tests));
    document.title = 'Alexandre Moreira - about me';
  }, []);

  const hover = {
    transition: 'color 0.1s ease',
    '&:hover': { color: 'white.200' },
  };

  return (
    <Stack
      alignItems="center"
      bgcolor="primary.800"
      height="100%"
      justifyContent="center"
      width="100%"
    >
      <Stack
        gap="50px"
        height="100%"
        maxWidth={maxWidthDesktop}
        paddingTop="100px"
        paddingX={paddingXDesktop}
        width="100%"
      >
        <Stack width="100%" direction="row" gap="50px" marginTop="50px">
          <Box
            bgcolor="secondary.400"
            borderRadius="2px"
            height="605px"
            minWidth="454px"
            overflow="hidden"
          >
            <Image
              height={605}
              width={454}
              loading="lazy"
              src="/images/about-me-portrait.png"
              alt="Alexandre Moreira"
            />
          </Box>

          <Stack alignItems="center" gap="50px">
            <Stack width="100%" alignItems="center">
              <Header
                color="white.main"
                variant="h3"
                className="titles"
                text="about me"
              />
            </Stack>

            <Stack width="100%" alignItems="center" gap="30px">
              <Typography color="white.main">
                Alexandre Moreira is a recording, mixing and mastering engineer,
                and a record producer who specializes in arrangements and
                co-writing, recording and mixing. His work spans many genres,
                from Jazz and Classical, to Rock, Metal and Pop.
              </Typography>
              <Typography color="white.main">
                After starting many musical projects and having learned the
                basics of music production, he got his Bachelor&apos;s in Music
                Production and Technologies in the Faculty of Music and
                Performing Arts of Porto (ESMAE). In 2015, he moved to
                Gothenburg, Sweden, where he runs his recording studio. Some of
                his clients include American-Swedish singer-songwriter Jacques
                Labouchere, percussionists Manuel Alcaraz Clemente, Lúcia Viana
                da Silva and Malin Sjökvist, Lebanese prog-metal acts Amadeus
                Awad and Ostura, and the folk duo MónDuo.
              </Typography>
              <Typography color="white.main">
                Aside from his work with other musicians, his own compositions
                can be heard under the name Husky Riders, which is a solo
                project with a wide range of musical genres and influences, that
                features a number of different guests such as
                multi-instrumentalist Ric Byer, Riccardo and Matteo Nicolin,
                Sebastian Sandoval, and is mastered by José Diogo Neves.
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Box bgcolor="secondary.400" width="100%" height="3px" />

        <Stack sx={{ width: '100%' }} gap="50px">
          <Stack width="100%" alignItems="center">
            <Header
              color="white.main"
              variant="h3"
              className="titles"
              text="testimonials"
            />
          </Stack>

          <Masonry
            columns={2}
            spacing={8}
            sx={{
              margin: '0 !important',
              padding: '0 !important',
            }}
          >
            {testimonials ? (
              testimonials.map(
                ({ client, message, role, clientUrl }, index) => (
                  <Stack key={index} gap="10px">
                    <Typography color="white.main" fontStyle="italic">
                      {message}
                    </Typography>

                    <Stack
                      direction="row"
                      width="100%"
                      justifyContent="center"
                      gap="5px"
                    >
                      {clientUrl ? (
                        <Link href={clientUrl} key={index} target="_blank">
                          <Typography
                            color="white.main"
                            fontWeight="bold"
                            sx={hover}
                          >
                            {client}
                          </Typography>
                        </Link>
                      ) : (
                        <Typography
                          color="white.main"
                          fontWeight="bold"
                          sx={hover}
                        >
                          {client}
                        </Typography>
                      )}
                      <Typography color="white.main">|</Typography>
                      <Typography color="white.main">{role}</Typography>
                    </Stack>
                  </Stack>
                )
              )
            ) : (
              <></>
            )}
          </Masonry>
        </Stack>
      </Stack>

      <Footer colorScheme={2} />
    </Stack>
  );
}
