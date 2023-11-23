import { Box } from '@mui/material';

import theme from '@/theme';

export default function BG() {
  const { palette } = theme;

  return (
    <Box
      overflow="hidden"
      position="absolute"
      right={0}
      top={0}
      width="100%"
      bottom={0}
    >
      <Box
        position="fixed"
        bottom={-20}
        left="50%"
        sx={{
          transform: 'translateX(-50%)',
        }}
      >
        <svg
          width="3803"
          height="641"
          viewBox="0 0 3803 641"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3802.57 641H0C527.657 238.82 1186.58 0 1901.28 0C2615.99 0 3274.91 238.82 3802.57 641Z"
            fill={palette.primary[600]}
          />
        </svg>
      </Box>
    </Box>
  );
}
