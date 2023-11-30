import { getStaticProps } from '@/pages/services';
import { InferGetStaticPropsType } from 'next';
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

/**
 *
 * @param path Returns a string from a string or string array
 * @returns
 */
export function getSlugParam(path: string | string[] | undefined) {
  if (!path) return '';
  if (typeof path === 'string') return path;
  return path.join('/');
}
export const processPath = (path: string | string[] | undefined): string => {
  if (!path) return '';
  if (typeof path === 'string') return path.toLowerCase();
  return Array.isArray(path) && path.length > 0 ? path[0].toLowerCase() : '';
};

export const filterRelatedItems = (path: string | string[] | undefined, relatedItemRequest: InferGetStaticPropsType<typeof getStaticProps>) => {
  let url = processPath(path)
  const filteredColumns = relatedItemRequest.content.columns.filter((column: { title: string; }) =>
    column.title.toLowerCase() !== url.toLowerCase()
  );

  return {
    ...relatedItemRequest,
    content: {
      ...relatedItemRequest.content,
      columns: filteredColumns
    }
  };
}