import StoryblokStory from '@storyblok/react/story';
import { getStoryblokPage } from '../../services/getStoryBlokPage';
import AnimateHeader from '@/components/AnimatedHeader/AnimatedHeader';
import { Container } from '@/components/Layout/Container';

export default async function Page({ params }: { params: { path: string[] } }) {
  const path = params.path;
  const { props } = await getStoryblokPage(path);

  return (
    <div>
      <AnimateHeader />
      <Container className='mt-4 md:mt-8'>
        <div className='text-md md:text-lg'>
          Some content. Here comes more content. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Exercitationem, similique quos
          doloremque libero expedita voluptatibus commodi, eveniet ducimus sed
          cumque quas neque fuga mollitia temporibus adipisci molestias, tempore
          possimus? Esse.
        </div>
      </Container>
      <StoryblokStory story={props.story} />
    </div>
  );
}
