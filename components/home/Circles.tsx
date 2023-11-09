import { Box } from '@mui/material';

import theme from '@/theme';
import useWindowSize from '@/hooks/useWindowSize';

export default function Circles() {
  const { palette } = theme;
  const { width } = useWindowSize();

  return (
    <Box
      overflow="hidden"
      position="absolute"
      right={0}
      top={0}
      width="50%"
      bottom={0}
    >
      <Box position="absolute" top={0} right={0}>
        <svg width="455" height="215" viewBox="0 0 455 215" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.440277 0H455V151.5C406.152 191.203 343.855 215 276 215C142.948 215 31.2663 123.505 0.440277 0Z"
            fill={palette.primary[600]}
          />
        </svg>
      </Box>

      {/* <Box position="absolute" top={-400} right={-130}>

        <svg width="630" height="630" viewBox="0 0 568 568" fill="none">
          <circle cx="284" cy="284" r="284" fill={palette.primary[600]} />
        </svg>
      </Box> */}

      {/* <Box position="absolute" bottom={-1940} left={-450}>
        <svg width="2336" height="2335" viewBox="0 0 2336 2335" fill="none">
          <circle cx="1168" cy="1168" r="1168" fill={palette.primary[600]} />
        </svg>
      </Box> */}

      <Box position="absolute" bottom={-20} left={0}>
        <svg width="992" height="421" viewBox="0 0 992 421" fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M991.818 421H0L0 3.68477C30.8451 1.24375 62.0274 0 93.5002 0C454.618 0 777.476 163.742 991.818 421Z"
            fill={palette.primary[600]}
          />
        </svg>
      </Box>
    </Box>
  );
}
