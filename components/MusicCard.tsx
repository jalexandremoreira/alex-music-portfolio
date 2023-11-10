import { Stack, Typography } from '@mui/material';

import PictureWithBorder from './PictureWithBorder';

interface Props {
  bgcolor: string;
  title: string;
  date: string;
  description: string;
}

export default function MusicCard({
  bgcolor,
  title,
  date,
  description,
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
        src="/images/im-doing-this-for-the-money.png"
        picDimensions={picDimensions}
        picBorder={picBorder}
        alt="Alexandre Moreira"
      />

      <Stack justifyContent="space-between" height="100%" flexGrow={1}>
        <Stack gap={4}>
          <Typography color="white.main" variant="h5">
            {title}
          </Typography>

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
