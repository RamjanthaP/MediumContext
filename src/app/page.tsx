import { getStoryblokApi } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default async function Home() {
  const { data } = await fetchData();

  return (
    <div>
      <Navigation />
      <StoryblokStory story={data.story} />
      <Footer />
    </div>
  );
}

export async function fetchData() {
  let sbParams = { version: "draft" as const };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams);
}