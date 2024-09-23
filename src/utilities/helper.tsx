import { RefObject } from 'react';

import { GridProps } from '@/components/Grid/Grid';
import { OfficeCardProps } from '@/components/OfficeCard/OfficeCard';

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

/**
 *
 * @param city
 * @param streetadress
 * @param zip
 * @param coordinates
 * Returns url to google maps that leads to clicked office on contact page
 * @returns
 */

export const handleUrlForGoogleMaps = ({
  city,
  streetadress,
  zip,
  coordinates,
}: OfficeCardProps) => {
  const googleMapsUrl = `https://www.google.com/maps/place/${streetadress},+${zip}+${city}/${coordinates.longitude},${coordinates.latitude},${coordinates.zoom}`;
  return googleMapsUrl;
};

export function getRandomInInterval(min: number, max: number): number {
  // Ensure min is less than max
  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomArrayKeys(array: string | number[]): string {
  return `${array[Math.floor(Math.random() * array.length)]}`;
}
