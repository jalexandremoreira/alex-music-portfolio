import { useState, useEffect } from 'react';
import * as DeviceDetect from 'react-device-detect';

import useWindowSize from './useWindowSize';

export default function useAppDimensions() {
  const [isMobile, setIsMobile] = useState(false);

  const { width } = useWindowSize();

  useEffect(() => {
    if (DeviceDetect.isMobile) {
      setIsMobile(true);
    }
  }, []);

  const marginBottom = isMobile ? '50px' : '80px';
  const maxWidthDesktop = '1400px';
  const paddingTopDesktop = '120px';
  const paddingTopMobile = '90px';
  const paddingXDesktop = width > 1199 ? '130px' : '5vw';
  const paddingXMobile = '15px';

  return {
    isMobile,
    marginBottom,
    maxWidthDesktop,
    paddingTopDesktop,
    paddingTopMobile,
    paddingXDesktop,
    paddingXMobile,
  };
}
