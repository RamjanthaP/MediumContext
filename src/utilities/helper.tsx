import { RefObject } from 'react';

import { GridProps } from '@/components/Grid/Grid';

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

/**
 *
 * @param path Returns a string array from a string or string array
 * @returns
 */
export function conformPathParams(path: string | string[]) {
  if (Array.isArray(path)) {
    return path;
  }
  return [path];
}

/**
 *
 * @param path Returns a string from a string or string array
 * @returns
 */
export const convertPath = (path: string | string[] | undefined): string => {
  if (!path) return '';
  if (typeof path === 'string') return path.toLowerCase();
  return Array.isArray(path) && path.length > 0 ? path[0].toLowerCase() : '';
};
export function stripTitleFromGrid(grid: GridProps) {
  return {
    ...grid,
    title: '',
  };
}
