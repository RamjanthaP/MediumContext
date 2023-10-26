import StoryblokStory from "@storyblok/react/story";
import { getStoryblokPage } from "@/services/getStoryBlokPage";
import Hero from "../components/Hero/Hero";
import { Container } from "@/components/Layout/Container";
import { SectionServices } from "../components/Section/Services";
import Placholder from "@/components/DevUtils/Placeholder";

export default async function Home() {
  const { props } = await getStoryblokPage();

  return (
    <div>
      <Container className="bg-discrete">
        <h1 className="text-3xl font-medium">{props.story.name}</h1>
      </Container>

      <StoryblokStory story={props.story} />
    </div>
  );
}
