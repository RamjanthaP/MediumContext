import { ISbStoriesParams, getStoryblokApi } from "@storyblok/react/rsc";
import { ConfigStoryblok } from "../../component-types-sb";

export async function getStoryblokPage(path = "home") {
  let sbParams = { version: "draft" as const };
  const storyblokApi = getStoryblokApi();
  const storyReq = await storyblokApi.get(`cdn/stories/${path}`, sbParams);

  return {
    props: {
      story: storyReq ? storyReq.data.story : false,
    },
    revalidate: 3600,
  };
}

export async function getStoryblokConfig(): Promise<ConfigStoryblok> {
  let sbParams: ISbStoriesParams = { version: "draft" };
  const storyblokApi = getStoryblokApi();
  const configReq = await storyblokApi.get(
    "cdn/stories/settings/config",
    sbParams
  );
  return configReq.data.story;
}
