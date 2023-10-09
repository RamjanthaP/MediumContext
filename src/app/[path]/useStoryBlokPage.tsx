import { getStoryblokApi } from "@storyblok/react/rsc";

export async function useStoryblokPage(path = "home") {
  let sbParams = { version: "draft" as const };
  const storyblokApi = getStoryblokApi();
  const data = await storyblokApi.get(`cdn/stories/${path}`, sbParams);
  return data;
}
