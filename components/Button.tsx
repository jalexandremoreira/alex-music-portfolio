import React from 'react';
import Stack from '@mui/material/Stack';
import { Box, Typography } from '@mui/material';

import useAppDimensions from '@/hooks/useAppDimensions';

interface Props {
  icon?: React.ReactNode;
  iconWidth?: string | number;
  title: string;
}

export default function Button({ icon, title, iconWidth }: Props) {
  const { isMobile } = useAppDimensions();

  return (
    <Stack
      alignItems="center"
      bgcolor="primary.800"
      borderRadius="10px"
      direction="row"
      gap={isMobile ? '10px' : '20px'}
      justifyContent="space-between"
      padding={isMobile ? '9px' : '12px'}
      width="100%"
      sx={{
        cursor: 'pointer',
        boxShadow: isMobile
          ? '0px 0px 30px 0px #8A2A44'
          : '0px 0px 45px 0px #8A2A44',
      }}
    >
      {icon ?? null}

      <Typography
        className="drop-shadow prevent-select"
        color="white.main"
        fontWeight="bold"
        variant={isMobile ? 'body1' : 'h5'}
      >
        {title}
      </Typography>

      {icon && <Box width={iconWidth} />}
    </Stack>
  );
}
