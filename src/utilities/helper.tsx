import { ReactElement, RefObject } from 'react';

export function extractLastWord(headline: string) {
  const words = headline.split(' ');
  if (words.length <= 1) return { remaining: headline, lastWord: headline };

  const lastWord = words.pop();
  const remaining = words.join(' ');

  return { remaining, lastWord };
}

/**
 * Scrolls to the ref target element with an offset
 */
export const scrollToTarget = (
  target: RefObject<HTMLElement>,
  offsetTop = 200
) => {
  const top =
    target.current?.offsetTop && target.current?.offsetTop - offsetTop;
  window.scrollTo({ top, behavior: 'smooth' });
};
