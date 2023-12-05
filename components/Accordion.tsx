import React from 'react';
import Stack from '@mui/material/Stack';
import { Box, Typography } from '@mui/material';

import theme from '@/theme';
import useAppDimensions from '@/hooks/useAppDimensions';
import { ChevronDown, ChevronUp } from '@/components/Icons';

interface Props {
  children: React.ReactNode;
  icon?: React.ReactNode;
  title: string;
}

export default function Accordion({ icon, title, children }: Props) {
  const [show, setShow] = React.useState(false);
  const { isMobile } = useAppDimensions();

  const { palette } = theme;
  const iconSize = isMobile ? 20 : 28;

  return (
    <Stack
      alignItems="center"
      border={`1px solid ${palette.primary[600]}`}
      borderRadius="10px"
      justifyContent="space-between"
      padding={isMobile ? '10px' : '20px'}
      gap={isMobile ? '5px' : '10px'}
    >
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        onClick={() => setShow(!show)}
        sx={{ cursor: 'pointer' }}
        width="100%"
      >
        <Stack
          direction="row"
          alignItems="center"
          gap={isMobile ? '8px' : '15px'}
        >
          {icon ?? null}
          <Typography
            color="white.main"
            variant={isMobile ? 'body1' : 'h5'}
            className="prevent-select"
          >
            {title}
          </Typography>
        </Stack>

        <Stack height="100%" justifyContent="center" alignItems="center">
          {show ? (
            <ChevronUp size={iconSize} color={palette.primary[600]} />
          ) : (
            <ChevronDown size={iconSize} color={palette.primary[600]} />
          )}
        </Stack>
      </Stack>

      {show && <Box width="100%">{children}</Box>}
    </Stack>
  );
}
