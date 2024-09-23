import { useEffect, useState } from 'react';

import { minDesktopScreen } from '@/config';

export function useScreenSize() {
  const [windowSize, setWindowSize] = useState<number>(0);
  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
      setIsDesktop(window.innerWidth >= minDesktopScreen);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return { windowSize, isDesktop, minDesktopScreen };
}
