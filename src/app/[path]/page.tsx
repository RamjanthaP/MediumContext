import StoryblokStory from "@storyblok/react/story";
import { getStoryblokPage } from "../../services/getStoryBlokPage";
import { Container } from "@/components/Layout/Container";

export default async function Page({ params }: { params: { path: string } }) {
  const path = params.path;
  const { props } = await getStoryblokPage(path);

  return (
    <div>
      <Container className="bg-discrete">
        <h1 className="text-3xl font-medium">{props.story.name}</h1>
      </Container>

      <StoryblokStory story={props.story} />
    </div>
  );
}
