import { Box, Stack, Typography } from '@mui/material';

import Header from './header';
import MusicCardLinks from './MusicCardLinks';
import PictureWithBorder from './PictureWithBorder';
import theme from '@/theme';
import { Close } from './Icons';
import { Links } from '@/services/musicList';
import { sintony } from '@/app/layout';

interface Props {
  bgcolor: string;
  title: string;
  date: string;
  description: string;
  links: Links;
  handleClose?: () => void;
  hasClose?: boolean;
}

export default function MusicCard({
  bgcolor,
  title,
  date,
  description,
  links,
  handleClose,
  hasClose,
}: Props) {
  const { palette } = theme;

  const picDimensions = {
    wD: 555,
    hD: 555,
  };

  const picBorder = 16;

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
          picDimensions={picDimensions}
          picBorder={picBorder}
          alt="Alexandre Moreira"
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
}
