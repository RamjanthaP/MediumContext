import { ISbStoriesParams, getStoryblokApi } from '@storyblok/react/rsc';
import {
  ContactFooterStoryblok,
  MenuStoryblok,
} from '../../component-types-sb';
import { notFound } from 'next/navigation';

export async function getStoryblokPage(path = ['home']) {
  let sbParams = {
    version: 'draft' as const,
    resolve_relations: ['contact_person'], // TODO: Move to just service specific route
  };
  const storyblokApi = getStoryblokApi();
  const storyReq = await storyblokApi
    .get(`cdn/stories/${path.join('/')}`, sbParams)
    .catch((e) => {
      console.error(e);
      notFound();
    });

  return {
    // TODO: This is a hack to get the contact_person to work
    props: {
      story: {
        ...storyReq.data.story,
        contact_person: storyReq.data.rels.at(0)
          ? storyReq.data.rels.at(0)
          : null,
      },
    },
    revalidate: 3600,
  };
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
