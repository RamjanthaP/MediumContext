import StoryblokStory from '@storyblok/react/story';
import { getStoryblokPage, getRelatedItems } from '@/services/getStoryBlokPage';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

// Return a list of `params` to populate the [slug] dynamic segment
// TODO: Make a fetch to the Storyblok API to get all the slugs we can forsee

export default function Page(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <StoryblokStory
        story={props.pageData.props.story}
      />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await getStoryblokPage();
  const relatedItemRequest = await getRelatedItems();
  return {
    props: {
      pageData,
      relatedItemRequest
    }
  }
}