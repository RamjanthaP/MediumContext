import StoryblokStory from "@storyblok/react/story";
import { getStoryblokPage } from "@/services/getStoryBlokPage";
import Hero from "../components/Hero/Hero";
import { Container } from "@/components/Layout/Container";
import SectionWrapper from "@/components/Layout/SectionWrapper";
import ServiceCard from "@/components/ServiceCard";

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
      <SectionWrapper title="Tjänster">
        <ServiceCard
          title={"hey"}
          description="ddd"
          imageAlt="service"
          imageUrl="https://unsplash.it/400/400"
          link="/"
          key={"hey"}
        ></ServiceCard>
      </SectionWrapper>
      <StoryblokStory story={props.story} />
    </div>
  );
}
