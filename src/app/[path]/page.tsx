import { ISbResult } from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useStoryblokPage } from "./useStoryBlokPage";

export default async function Page({ params }: { params: { path: string } }) {
  const path = params.path;
  const { data } = await useStoryblokPage(path);
  return (
    <div>
      <Navigation />
      <StoryblokStory story={data.story} />
      <Footer />
    </div>
  );
}
