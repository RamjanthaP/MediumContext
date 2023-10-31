import StoryblokStory from "@storyblok/react/story";
import { getStoryblokPage } from "../../services/getStoryBlokPage";
import { Container } from "@/components/Layout/Container";

export default async function Page({ params }: { params: { path: string } }) {
  const path = params.path;
  const { props } = await getStoryblokPage(path);

  return (
    <div>
      <StoryblokStory story={props.story} />
    </div>
  );
}
