import {
  ISbResult,
  ISbStoriesParams,
  getStoryblokApi,
} from '@storyblok/react/rsc';

export let storyblockBaseParams = {
  version: process.env.STORYBLOK_API_ENVIRONMENT,
} satisfies ISbStoriesParams;

export const revalidateTime = 10;

export const apiClient = (
  path: string,
  errorMessage: string,
  paramOptions: ISbStoriesParams = storyblockBaseParams
): Promise<ISbResult> => {
  const storyblokApi = getStoryblokApi();

  return storyblokApi.get(path, paramOptions).catch((e) => {
    console.error(e);
    throw new Error(errorMessage);
  });
};
