import { LinkStoryblok } from '@sb-types';

export function extractLinkDataFromFirstItem(
  link: LinkStoryblok[] | undefined
) {
  return link?.length
    ? {
        text: link[0].text,
        url: link[0].link.cached_url || '',
      }
    : undefined;
}
