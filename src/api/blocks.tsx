import {
  ContactFooterStoryblok,
  GridStoryblok,
  MenuStoryblok,
} from '@sb-types';

import { apiClient } from './apiClient';
import { revalidateTime } from './apiClient';
import { StoryBlokRequest } from './types';

export type MenuRequest = StoryBlokRequest<MenuStoryblok>;

export async function getMenuData(): Promise<MenuRequest> {
  const request = await apiClient(
    'cdn/stories/settings/menu',
    'Hittar inte menyn'
  );
  return { data: request.data.story, revalidate: revalidateTime };
}

type FooterRequest = StoryBlokRequest<ContactFooterStoryblok>;

export async function getFooterData(): Promise<FooterRequest> {
  const request = await apiClient(
    'cdn/stories/settings/footer',
    'Hittar inte footer'
  );
  return { data: request.data.story, revalidate: revalidateTime };
}

type GlobalServiceRequest = StoryBlokRequest<GridStoryblok>;

export async function getGlobalServiceItems(): Promise<GlobalServiceRequest> {
  const request = await apiClient(
    'cdn/stories/global-content/related-services',
    'Hittar inte relaterade tjänster'
  );
  return { data: request.data.story, revalidate: revalidateTime };
}
