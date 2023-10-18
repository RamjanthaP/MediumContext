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

// TODO: Update return type when CDN is updated
export async function getStoryblokMenuData(): Promise<ConfigStoryblok> {
  let sbParams: ISbStoriesParams = { version: "draft" };
  const storyblokApi = getStoryblokApi();
  const configReq = await storyblokApi.get(
    "cdn/stories/settings/menu",
    sbParams
  );
  return configReq.data.story;
}
