import { useState, useEffect } from 'react';
import * as DeviceDetect from 'react-device-detect';

import useWindowSize from './useWindowSize';

export default function useAppDimensions() {
  const [isMobile, setIsMobile] = useState(false);

  const { width } = useWindowSize();

  const mobileCutoffWidth = 750;

  useEffect(() => {
    if (DeviceDetect.isMobileOnly || width < mobileCutoffWidth) {
      setIsMobile(true);
    } else if (width > mobileCutoffWidth) {
      setIsMobile(false);
    }
  }, [width]);

  const marginBottom = isMobile ? '50px' : '80px';
  const maxWidthDesktop = '1400px';
  const paddingTopDesktop = '100px';
  const paddingTopMobile = '60px';
  const paddingXMobile = '20px';
  const paddingXDesktop = width > 1199 ? '130px' : '5vw';

  return {
    isMobile,
    marginBottom,
    maxWidthDesktop,
    paddingXMobile,
    paddingTopDesktop,
    paddingTopMobile,
    paddingXDesktop,
    width,
  };
}
