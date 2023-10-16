import StoryblokStory from "@storyblok/react/story";
import { getStoryblokPage } from "@/services/getStoryBlokPage";
import Hero from "../components/Hero/Hero";

export default async function Home() {
  const { props } = await getStoryblokPage();

  return (
    <div>
      <h1 className="text-3xl font-medium">{props.story.name}</h1>
      <Hero blok={props.story} />
      <StoryblokStory story={props.story} />
    </div>
  );
}
