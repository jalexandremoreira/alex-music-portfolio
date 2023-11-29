'use client';
import React from 'react';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import { Box, Modal } from '@mui/material';

import Footer from '@/components/footer/Footer';
import MusicCard from '@/components/MusicCard';
import useAppDimensions from '@/hooks/useAppDimensions';
import { Album, getAlbum, getAlbums } from '@/services/musicList';

export default function MyMusicPage() {
  const { maxWidthDesktop, paddingXDesktop } = useAppDimensions();

  const [album, setAlbum] = React.useState<Album | null>(null);
  const [albums, setAlbums] = React.useState<Album[] | null>(null);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setAlbums(getAlbums());
    document.title = 'Alexandre Moreira - music I recorded';
  }, []);

  const handleClose = () => setOpen(false);

  return (
    <Stack
      alignItems="center"
      bgcolor="primary.700"
      height="100%"
      justifyContent="center"
      width="100%"
    >
      {album && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              all: 'initial',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              minWidth: 1050,
              border: 'none',
            }}
          >
            <MusicCard
              bgcolor="primary.800"
              title={album.title}
              date={album.date}
              description={album.description}
              links={album.links}
              handleClose={handleClose}
              hasClose
            />
          </Box>
        </Modal>
      )}

      <Stack
        direction="row"
        flexWrap="wrap"
        gap="1vw"
        height="100%"
        justifyContent="space-between"
        marginBottom="60px"
        maxWidth={maxWidthDesktop}
        paddingTop="100px"
        paddingX={paddingXDesktop}
        width="100%"
      >
        {albums?.map(({ links, title, id }) => (
          <Box
            key={id}
            onClick={() => {
              setOpen(true);
              setAlbum(getAlbum(id));
            }}
            sx={{
              '&:hover': {
                cursor: 'pointer',
              },
            }}
            bgcolor="secondary.400"
            borderRadius="2px"
            className="music-card"
            height={315}
            marginBottom="2vw"
            overflow="hidden"
            width={315}
          >
            <Image
              alt={title}
              height={315}
              src={links.coverArt ?? ''}
              width={315}
              loading="lazy"
            />
          </Box>
        ))}

        {albums && albums?.length % 3 > 0 && <Box width={315} />}
      </Stack>

      <Footer colorScheme={1} />
    </Stack>
  );
}
