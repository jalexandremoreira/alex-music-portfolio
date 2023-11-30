'use client';
import React from 'react';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';

import BG from './BG';
import MusicCard from '@/components/MusicCard';
import useAppDimensions from '@/hooks/useAppDimensions';
import { Album, getAlbums } from '@/services/musicList';

export default function MyMusicPage() {
  const { maxWidthDesktop, paddingXDesktop } = useAppDimensions();
  const [albums, setAlbums] = React.useState<Album[] | null>(null);

  React.useEffect(() => {
    setAlbums(getAlbums());
    document.title = 'Alexandre Moreira - my music';
  }, []);

  return (
    <Stack
      alignItems="center"
      bgcolor="primary.700"
      height="100%"
      justifyContent="center"
      width="100%"
    >
      <BG />

      <Stack
        height="100%"
        gap="40px"
        maxWidth={maxWidthDesktop}
        paddingX={paddingXDesktop}
        paddingTop="100px"
        width="100%"
        zIndex={20}
      >
        {albums
          ?.filter((a) => a.artist === 'Alexandre Moreira')
          .map(({ title, date, description, links }, index) => (
            <MusicCard
              key={index}
              bgcolor="primary.800"
              title={title}
              date={date}
              description={description}
              links={links}
            />
          ))}

        <Box />
      </Stack>
    </Stack>
  );
}
