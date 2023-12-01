'use client';
import React from 'react';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import { Box, Modal } from '@mui/material';

import Footer from '@/components/footer/Footer';
import MusicCard from '@/components/MusicCard';
import useAppDimensions from '@/hooks/useAppDimensions';
import { Album, getAlbum, getAlbums } from '@/services/musicList';

export default function MusicIRecordedPage() {
  const {
    isMobile,
    maxWidthDesktop,
    paddingXDesktop,
    paddingTopDesktop,
    paddingTopMobile,
    paddingXMobile,
  } = useAppDimensions();

  const [album, setAlbum] = React.useState<Album | null>(null);
  const [albums, setAlbums] = React.useState<Album[] | null>(null);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setAlbums(getAlbums());
    document.title = 'Alexandre Moreira - music I recorded';
  }, []);

  const handleClose = () => setOpen(false);

  const imageSize = [165, 315];

  if (!isMobile) {
    return (
      <Stack
        alignItems="center"
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
                index={0}
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
          paddingTop={paddingTopDesktop}
          paddingX={paddingXDesktop}
          width="100%"
        >
          {albums?.map(({ links, title, id }, index) => (
            <Box
              key={index}
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
              height={imageSize[1]}
              marginBottom="2vw"
              overflow="hidden"
              width={imageSize[1]}
            >
              <Image
                alt={title}
                height={imageSize[1]}
                src={links.coverArt ?? ''}
                width={imageSize[1]}
                loading={index === 0 ? 'eager' : 'lazy'}
                priority={index === 0}
              />
            </Box>
          ))}

          {albums && albums?.length % 3 > 0 && <Box width={imageSize[1]} />}
        </Stack>

        <Footer colorScheme={1} />
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
      {album && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            overflow: 'auto',
          }}
        >
          <Box
            className="music-card-box"
            sx={{
              all: 'initial',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)',
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
              index={0}
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
        paddingTop={paddingTopMobile}
        paddingX={paddingXMobile}
        width="100%"
      >
        {albums?.map(({ links, title, id }, index) => (
          <Box
            key={index}
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
            height={imageSize[0]}
            marginBottom="2vw"
            overflow="hidden"
            width={imageSize[0]}
          >
            <Image
              alt={title}
              height={imageSize[0]}
              src={links.coverArt ?? ''}
              width={imageSize[0]}
              loading={index === 0 ? 'eager' : 'lazy'}
              priority={index === 0}
            />
          </Box>
        ))}

        {albums && albums?.length % 3 > 0 && <Box width={imageSize[0]} />}
      </Stack>

      <Footer colorScheme={1} />
    </Stack>
  );
}
