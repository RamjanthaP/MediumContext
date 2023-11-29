import { getStoryblokPage } from '@/services/getStoryBlokPage';
import StoryblokStory from '@storyblok/react/story';

export default async function Home() {
  const { props } = await getStoryblokPage(['home']);

  return (
    <div>
      <StoryblokStory story={props.story} />
    </div>
  );
}
