import { getStoryblokApi } from "@storyblok/react/rsc";

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

export async function getStoryblokConfig() {
  let sbParams = { version: "draft" as const };
  const storyblokApi = getStoryblokApi();
  const configReq = await storyblokApi.get("cdn/stories/config", sbParams);
  return configReq ? configReq.data.story : false;
}
