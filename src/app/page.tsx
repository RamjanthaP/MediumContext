import StoryblokStory from '@storyblok/react/story';
import { getStoryblokPage } from '@/services/getStoryBlokPage';
import { Container } from '@/components/Layout/Container';

export default async function Home() {
  const { props } = await getStoryblokPage();

  return (
    <div>
      <StoryblokStory story={props.story} />
    </div>
  );
}
