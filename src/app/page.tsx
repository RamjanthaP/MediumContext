import StoryblokStory from "@storyblok/react/story";
import { getStoryblokPage } from "@/services/getStoryBlokPage";
import Hero from "../components/Hero/Hero";
import { Container } from "@/components/Layout/Container";

export default async function Home() {
  const { props } = await getStoryblokPage();

  return (
    <div>
      <Container className="bg-discrete">
        <h1 className="text-3xl font-medium">{props.story.name}</h1>
      </Container>
      <Hero
        headLine={props.story.content.body[1].headline}
        imageUrl="/assets/Hero.png"
        primaryButtonTitle="Transparent"
        secondaryButtonTitle="Green"
      />
      <StoryblokStory story={props.story} />
    </div>
  );
}
