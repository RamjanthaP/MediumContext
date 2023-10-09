import StoryblokStory from "@storyblok/react/story";
import Footer from "../components/Footer";
import { getStoryblokPage } from "../../services/getStoryBlokPage";
import Config from "../components/Menu/Config";

export default async function Page({ params }: { params: { path: string } }) {
  const path = params.path;
  const { props } = await getStoryblokPage(path);
  return (
    <div>
      <Config blok={props.config} />
      <StoryblokStory story={props.story} />
      <Footer />
    </div>
  );
}
