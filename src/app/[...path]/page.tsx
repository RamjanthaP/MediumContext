import StoryblokStory from '@storyblok/react/story';
import { getStoryblokPage } from '../../services/getStoryBlokPage';

export default async function Page({ params }: { params: { path: string[] } }) {
  const path = params.path;
  const { props } = await getStoryblokPage(path);

  return (
    <div>
      <StoryblokStory
        story={props.story}
        contactPerson={props.story.contact_person}
        title={props.story.name}
      />
    </div>
  );
}
