import { PersonStoryblok } from '@sb-types';
import { ISbStories, ISbStoryData } from '@storyblok/react/rsc';

import { apiClient } from './apiClient';
import { storyblockBaseParams } from './apiClient';
import { revalidateTime } from './apiClient';
import { StoryBlokRequest } from './types';

export type PageRequest = StoryBlokRequest<{
  story: ISbStoryData<'templateDefault'>;
}>;

export async function getPage(path: string[]): Promise<PageRequest> {
  const request = await apiClient(
    `cdn/stories/${path.join('/')}`,
    `Hittar inte sidor med slug ${path.join('/')}`,
    { ...storyblockBaseParams, resolve_relations: 'reUsableSection.content' }
  );

  return {
    data: {
      story: request.data.story,
    },
    revalidate: revalidateTime,
  };
}

export type ServicePageRequest = StoryBlokRequest<{
  story: ISbStoryData<'templateService'>;
  contact_person?: PersonStoryblok;
}>;

export async function getServicePage(
  subPath: string
): Promise<ServicePageRequest> {
  const servicesBasePath = 'services';

  const request = await apiClient(
    `cdn/stories/${servicesBasePath}/${subPath}`,
    `Hittar inte sidor med slug "services/${subPath}"`,
    { ...storyblockBaseParams, resolve_relations: ['contact_person'] }
  );
  const contact_person = request.data.rels.at(0) || null;
  return {
    data: {
      story: request.data.story,
      contact_person,
    },
    revalidate: revalidateTime,
  };
}

export type PagesRequest = StoryBlokRequest<ISbStories['data']>;

export const getPagesBySlugPattern = async (
  slugPattern: string
): Promise<PagesRequest> => {
  const request = await apiClient(
    'cdn/stories',
    `Hittar inte sidor med slug ${slugPattern}`,
    { ...storyblockBaseParams, by_slugs: slugPattern }
  );
  return { data: request.data, revalidate: revalidateTime };
};
