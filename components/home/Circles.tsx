import { Box } from '@mui/material';

import theme from '@/theme';
import useAppDimensions from '@/hooks/useAppDimensions';

export default function Circles() {
  const { isMobile } = useAppDimensions();

  const { palette } = theme;

  if (isMobile)
    return (
      <>
        <Box
          className="circle-top"
          height={63}
          overflow="hidden"
          position="absolute"
          right={0}
          width={215}
        >
          <svg width="215" height="63" viewBox="0 0 215 63" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M215 49.9022C193.129 58.3613 169.356 63 144.5 63C87.652 63 36.4712 38.7362 0.748779 0L215 0V49.9022Z"
              fill={palette.primary[600]}
            />
          </svg>
        </Box>

        <Box
          bottom={0}
          className="circle-bot"
          height={97}
          overflow="hidden"
          position="absolute"
          width="100%"
        >
          <svg width="559" height="97" viewBox="0 0 559 97" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 8.2437C42.2315 2.80461 85.2882 0 129 0C282.934 0 428.744 34.781 559 96.9131V97H0L0 8.2437Z"
              fill={palette.primary[600]}
            />
          </svg>
        </Box>
      </>
    );

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
