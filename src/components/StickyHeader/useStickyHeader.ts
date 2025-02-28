import { RefObject, useEffect, useState } from 'react';

interface useStickyHeaderConfig {
  heroRef: RefObject<HTMLElement>;
  headerRef: RefObject<HTMLElement>;
  offsetHeight?: number;
  stickyFromStart: boolean;
}

export function useStickyHeader(config: useStickyHeaderConfig) {
  const { headerRef, heroRef, stickyFromStart } = config;
  const offsetHeight = config.offsetHeight ?? 70;

  const [isHeaderSticky, setIsHeaderSticky] = useState(stickyFromStart);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current && headerRef.current) {
        const heroBottom =
          heroRef.current.offsetTop + heroRef.current.offsetHeight;
        setIsHeaderSticky(
          window.scrollY >
            heroBottom - headerRef.current.offsetHeight + offsetHeight
        );
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return { isHeaderSticky };
}
