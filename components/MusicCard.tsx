import { Stack, Typography } from '@mui/material';

import PictureWithBorder from './PictureWithBorder';
import Header from './header';

interface Props {
  bgcolor: string;
  title: string;
  date: string;
  description: string;
  pic: string;
}

export default function MusicCard({
  bgcolor,
  title,
  date,
  description,
  pic,
}: Props) {
  const picDimensions = {
    wD: 555,
    hD: 555,
  };
  const picBorder = 16;

  return (
    <Stack
      direction="row"
      padding="20px"
      borderRadius="2px"
      bgcolor={bgcolor}
      justifyContent="space-between"
      gap="20px"
    >
      <PictureWithBorder
        src={pic}
        picDimensions={picDimensions}
        picBorder={picBorder}
        alt="Alexandre Moreira"
      />

      <Stack justifyContent="space-between" height="100%" flexGrow={1}>
        <Stack gap={4}>
          <Header
            color="white.main"
            variant="h3"
            className="titles"
            text={title}
          />

          <Stack gap={2}>
            <Typography color="white.main" variant="h5">
              {date}
            </Typography>

            <Typography color="white.main" variant="h5">
              {description}
            </Typography>
          </Stack>
        </Stack>

        <Typography color="white.main" variant="h5">
          some links here
        </Typography>
      </Stack>
    </Stack>
  );
}
