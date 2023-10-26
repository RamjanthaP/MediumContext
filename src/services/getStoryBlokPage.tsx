import { ISbStoriesParams, getStoryblokApi } from "@storyblok/react/rsc";
import { MenuStoryblok } from "../../component-types-sb";
import { notFound, redirect } from "next/navigation";

export async function getStoryblokPage(path = "home") {
  let sbParams = { version: "draft" as const };
  const storyblokApi = getStoryblokApi();
  const storyReq = await storyblokApi
    .get(`cdn/stories/${path}`, sbParams)
    .catch((e) => {
      notFound();
    });

  return {
    props: {
      story: storyReq ? storyReq.data.story : false,
    },
    revalidate: 3600,
  };
}

export async function getStoryblokMenuData(): Promise<MenuStoryblok> {
  let sbParams: ISbStoriesParams = { version: "draft" };
  const storyblokApi = getStoryblokApi();
  const configReq = await storyblokApi
    .get("cdn/stories/settings/menu", sbParams)
    .catch((e) => {
      throw new Error("Hittar inte menyn");
    });
  return configReq.data.story;
}
