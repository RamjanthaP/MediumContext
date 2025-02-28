import { LinkStoryblok } from '@sb-types';

export function extractLinkDataFromFirstItem(
  link: LinkStoryblok[] | undefined
) {
  if (link && link.length > 0) {
    const firstLink = link[0];
    const url = firstLink.link?.cached_url || '';
    return {
      text: firstLink.text,
      url: url,
    };
  }
  return undefined;
}
