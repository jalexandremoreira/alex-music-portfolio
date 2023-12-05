import Image from 'next/image';
import { Box } from '@mui/material';

import useAppDimensions from '@/hooks/useAppDimensions';

export default function AMPattern() {
  const { isMobile } = useAppDimensions();

  if (!isMobile)
    return (
      <Box height="100%" overflow="hidden" position="absolute" width="100%">
        <Image
          alt="Alexandre Moreira"
          width={5900}
          height={4255}
          priority
          src="/images/am-bg.png"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
          }}
        />
      </Box>
    );

  return (
    <Box height="100%" overflow="hidden" position="absolute" width="100%">
      <Image
        alt="Alexandre Moreira"
        width={5900}
        height={4255}
        priority
        src="/images/am-bg.png"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
        }}
      />
    </Box>
  );
}
