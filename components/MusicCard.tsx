import { Box, Stack, Typography } from '@mui/material';

import Header from './header';
import MusicCardLinks from './MusicCardLinks';
import PictureWithBorder from './PictureWithBorder';
import theme from '@/theme';
import useAppDimensions from '@/hooks/useAppDimensions';
import { Close } from './Icons';
import { Links } from '@/services/musicList';
import { sintony } from '@/app/layout';

interface Props {
  bgcolor: string;
  date: string;
  description: string;
  handleClose?: () => void;
  hasClose?: boolean;
  index: number;
  links: Links;
  title: string;
}

export default function MusicCard({
  bgcolor,
  date,
  description,
  handleClose,
  hasClose,
  index,
  links,
  title,
}: Props) {
  const { palette } = theme;

  const { isMobile } = useAppDimensions();

  const picDimensions = [
    {
      wD: 318,
      hD: 318,
    },
    {
      wD: 555,
      hD: 555,
    },
  ];

  const picBorder = [10, 16];

  if (!isMobile)
    return (
      <Stack
        alignItems="stretch"
        bgcolor={bgcolor}
        borderRadius="2px"
        direction="row"
        gap="20px"
        justifyContent="space-between"
        padding="20px"
        width="100%"
      >
        {links.coverArt && (
          <PictureWithBorder
            src={links.coverArt}
            picDimensions={picDimensions[1]}
            picBorder={picBorder[1]}
            alt="Alexandre Moreira"
            priority={index === 0 ? true : false}
          />
        )}
        <Stack justifyContent="space-between" flexGrow={1}>
          <Stack gap={4}>
            <Stack
              direction="row"
              width="100%"
              justifyContent="space-between"
              gap="30px"
            >
              <Header
                color="white.main"
                variant="h3"
                className="titles"
                text={title}
              />

              {hasClose && (
                <Box
                  sx={{
                    '&:hover': {
                      cursor: 'pointer',
                    },
                  }}
                  onClick={handleClose}
                  paddingTop={1}
                >
                  <Close color={palette.white.main} size={30} />
                </Box>
              )}
            </Stack>

            <Stack gap={2}>
              <Typography color="white.main" variant="h5" style={sintony.style}>
                {date}
              </Typography>

              <Typography color="white.main" variant="h5" style={sintony.style}>
                {description}
              </Typography>
            </Stack>
          </Stack>

          <MusicCardLinks
            spotify={links.spotify}
            appleMusic={links.appleMusic}
            bandCamp={links.bandCamp}
          />
        </Stack>
      </Stack>
    );

  return (
    <Stack
      alignItems="center"
      bgcolor={bgcolor}
      borderRadius="2px"
      gap="20px"
      justifyContent="space-between"
      padding="10px"
      width="100%"
    >
      <Stack>
        {hasClose && (
          <Stack direction="row" width="100%" justifyContent="flex-end">
            <Box
              sx={{
                '&:hover': {
                  cursor: 'pointer',
                },
              }}
              onClick={handleClose}
              paddingTop={1}
            >
              <Close color={palette.white.main} size={20} />
            </Box>
          </Stack>
        )}

        {links.coverArt && (
          <PictureWithBorder
            src={links.coverArt}
            picDimensions={picDimensions[0]}
            picBorder={picBorder[0]}
            alt="Alexandre Moreira"
            priority={index === 0 ? true : false}
          />
        )}
      </Stack>

      <Stack width="100%">
        <Header
          color="white.main"
          variant="h5"
          className="titles"
          text={title}
        />
      </Stack>

      <Stack gap={1}>
        <Typography color="white.main" style={sintony.style}>
          {date}
        </Typography>

        <Typography color="white.main" style={sintony.style}>
          {description}
        </Typography>
      </Stack>

      <MusicCardLinks
        spotify={links.spotify}
        appleMusic={links.appleMusic}
        bandCamp={links.bandCamp}
      />
    </Stack>
  );
}
