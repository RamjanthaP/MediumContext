import {
  getGlobalServiceItems,
  getStoryblokPage,
} from '@/services/getStoryBlokPage';
import { StoryblokComponent } from '@storyblok/react';
import StoryblokStory from '@storyblok/react/story';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { HeadMetadata } from '@/utilities/HeadMetadata';

// Return a list of `params` to populate the [slug] dynamic segment
// TODO: Make a fetch to the Storyblok API to get all the slugs we can forsee

export default function Page(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <div>
      <HeadMetadata title={'Tjänster inom .NET, React och Typescript'} />
      <div className='p-8 h-[400px] flex items-center justify-center bg-primary-100'>
        Här är en header. Ersätt sen
      </div>
      {/* TODO: Se till att vi kan toggla bort titel på blocket */}
      <StoryblokComponent blok={props.relatedItemRequest.content} />
      <StoryblokStory story={props.pageData.props.story} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await getStoryblokPage(['services']);
  const relatedItemRequest = await getGlobalServiceItems();
  return {
    props: {
      pageData,
      relatedItemRequest,
    },
  };
};
