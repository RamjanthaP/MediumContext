import { ISbStoriesParams, getStoryblokApi } from '@storyblok/react/rsc';
import {
  ContactFooterStoryblok,
  MenuStoryblok,
} from '../../component-types-sb';
import { notFound, redirect } from 'next/navigation';
import { storyHasRelationForProp, replaceProperty } from './service-utilities';

export async function getStoryblokPage(path = ['home']) {
  let sbParams = {
    version: 'draft' as const,
    resolve_relations: ['contact_person'], // TODO: Move to just service specific route
  };
  const storyblokApi = getStoryblokApi();
  const storyReq = await storyblokApi
    .get(`cdn/stories/${path.join('/')}`, sbParams)
    .catch((e) => {
      notFound();
    });

  // Declare default story open to mods
  let remappedStory = storyReq.data.story;

  // Overwrite it we have a relation for contact_person
  if (storyHasRelationForProp(storyReq.data, 'contact_person')) {
    remappedStory = replaceProperty(
      storyReq.data.story.content,
      'contact_person',
      storyReq.data.rels.at(0)
    );
  }
  return {
    props: {
      story: remappedStory,
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
      throw new Error('Hittar inte footer');
    });
  return configReq.data.story;
}
