import StoryblokStory from "@storyblok/react/story";
import Footer from "./components/Footer";
import { getStoryblokPage } from "@/services/getStoryBlokPage";
import Config from "./components/Menu/Config";

export default async function Home() {
  const { props } = await getStoryblokPage();

  return (
    <div>
      <StoryblokStory story={props.story} />
    </div>
  );
}
