'use client';
import React from 'react';
import Stack from '@mui/material/Stack';

import useAppDimensions from '@/hooks/useAppDimensions';
import MusicCard from '@/components/MusicCard';
import { Box } from '@mui/material';
import { Album, getAlbums } from '@/services/musicList';

export default function MyMusicPage() {
  const { maxWidthDesktop, paddingXDesktop } = useAppDimensions();
  const [albums, setAlbums] = React.useState<Album[] | null>(null);

  React.useEffect(() => {
    setAlbums(getAlbums());
  }, []);

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
