import { RefObject } from 'react';

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

export const colorDots = (title: string) => {
  const parts = title.split('.').map((part, index, array) =>
    index !== array.length - 1 ? (
      <>
        <span key={index}>{part}</span>
        <span className='text-primary-500' key={index}>
          .
        </span>
      </>
    ) : (
      <span key={index}>{part}</span>
    )
  );
  return <>{parts}</>;
}