import { ISbStoriesParams, getStoryblokApi } from '@storyblok/react/rsc';
import {
  ContactFooterStoryblok,
  MenuStoryblok,
} from '../../component-types-sb';

export async function getStoryblokPage(path: string[]) {
  let sbParams = {
    version: 'draft' as const,
    resolve_relations: ['contact_person'], // TODO: Move to just service specific route
  };
  const storyblokApi = getStoryblokApi();
  try {
    const storyReq = await storyblokApi
      .get(`cdn/stories/${path.join('/')}`, sbParams);
    return {
      props: {
        story: {
          ...storyReq.data.story,
          contact_person: storyReq.data.rels.at(0) || null,
        },
      },
      revalidate: 3600,
    };
  } catch (e) {
    console.error(e);
    // Throw an error to trigger Next.js's custom 404 page
    throw new Error('Page not found');
  }
}

export async function getStoryblokMenuData(): Promise<MenuStoryblok> {
  let sbParams: ISbStoriesParams = { version: 'draft' };
  const storyblokApi = getStoryblokApi();
  const configReq = await storyblokApi
    .get('cdn/stories/settings/menu', sbParams)
    .catch((e) => {
      console.error(e);
      throw new Error('Hittar inte menyn');
    });
  return configReq.data.story;
}

export async function getStoryblokFooterData(): Promise<ContactFooterStoryblok> {
  let sbParams: ISbStoriesParams = { version: 'draft' };
  const storyblokApi = getStoryblokApi();
  const configReq = await storyblokApi
    .get('cdn/stories/settings/footer', sbParams)
    .catch((e) => {
      console.error(e);
      throw new Error('Hittar inte footer');
    });
  return configReq.data.story;
}

export async function getGlobalServiceItems(): Promise<ContactFooterStoryblok> {
  let sbParams: ISbStoriesParams = { version: 'draft' };
  const storyblokApi = getStoryblokApi();
  const configReq = await storyblokApi
    .get('cdn/stories/global-content/related-services', {
      ...sbParams,
    })
    .catch((e) => {
      console.error(e);
      throw new Error('Hittar inte footer');
    });
  return configReq.data.story;
}

export const getStoryblokPageBySlug = async (slugPattern: string) => {
  let sbParams: ISbStoriesParams = { version: 'draft' };
  const storyblokApi = getStoryblokApi();
  const configReq = await storyblokApi
    .get('cdn/stories', {
      ...sbParams,
      by_slugs: slugPattern,
    })
    .catch((e) => {
      console.error(e);
      throw new Error('Hittar inte sidor med slug ' + slugPattern);
    });
  return configReq.data;
};
