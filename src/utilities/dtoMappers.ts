import { LinkStoryblok } from '@sb-types';

export function extractLinkDataFromFirstItem(
  link: LinkStoryblok[] | undefined
) {
  if (link && link.length > 0) {
    const url = link[0].link?.cached_url || ''; 
    return {
      text: link[0].text,
      url: url,
    };
  }
  return undefined;
}
