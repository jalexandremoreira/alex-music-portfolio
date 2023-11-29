import React from 'react';
import Stack from '@mui/material/Stack';
import { Box, Typography } from '@mui/material';

import theme from '@/theme';
import { ChevronDown, ChevronUp } from '@/components/Icons';

interface Props {
  icon: React.ReactNode;
  title: string;
  body: string;
}

export default function Accordion({ icon, title, body }: Props) {
  const [show, setShow] = React.useState(false);

  const { palette } = theme;

  return (
    <Stack
      alignItems="center"
      border={`1px solid ${palette.primary[600]}`}
      borderRadius="10px"
      gap="20px"
      justifyContent="space-between"
      padding="20px"
    >
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        onClick={() => setShow(!show)}
        sx={{ cursor: 'pointer' }}
        width="100%"
      >
        <Stack direction="row" alignItems="center" gap="15px">
          {icon}

          <Typography color="white.main" variant="h5">
            {title}
          </Typography>
        </Stack>

        <Stack height="100%" justifyContent="center" alignItems="center">
          {show ? (
            <ChevronUp size={28} color={palette.primary[600]} />
          ) : (
            <ChevronDown size={28} color={palette.primary[600]} />
          )}
        </Stack>
      </Stack>

      {show && (
        <Box width="100%">
          <Typography color="white.main" variant="h5">
            {body}
          </Typography>
        </Box>
      )}
    </Stack>
  );
}
