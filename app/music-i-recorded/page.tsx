'use client';
import Stack from '@mui/material/Stack';

import useAppDimensions from '@/hooks/useAppDimensions';
import MusicCard from '@/components/MusicCard';
import { Box } from '@mui/material';

export default function MyMusicPage() {
  const { maxWidthDesktop, paddingXDesktop } = useAppDimensions();

  return (
    <Stack
      alignItems="center"
      bgcolor="primary.700"
      height="100%"
      justifyContent="center"
      width="100%"
    >
      <Stack
        height="100%"
        gap="40px"
        maxWidth={maxWidthDesktop}
        paddingX={paddingXDesktop}
        paddingTop="100px"
        width="100%"
      >
        {[
          {
            title: `I'm Doing This For The Money`,
            date: 'December 2021',
            description:
              'Recorded between 2020 and 2021 at my studio, and various other places around the world. Inspired by my love of many different genres of music, and of comedy. An accurate representation of my fucked up sense of humour.',
            links: ['#'],
            pic: '/images/im-doing-this-for-the-money.png',
          },
          {
            title: 'Can We Go Out Yet?',
            date: 'June 2020',
            description: `According to pandemic me: "It's 2020. Shit's crazy. Self-imposed quarantine is getting old. Can we go out yet?"`,
            links: ['#'],
            pic: '/images/can-we-go-out-yet.png',
          },
        ].map(({ title, date, description, pic }, index) => (
          <MusicCard
            key={index}
            bgcolor="primary.800"
            title={title}
            date={date}
            description={description}
            pic={pic}
          />
        ))}

        <Box />
      </Stack>
    </Stack>
  );
}
