import StoryblokStory from '@storyblok/react/story';
import {
  getStoryblokPage,
  getGlobalServiceItems,
} from '@/services/getStoryBlokPage';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { StoryblokComponent } from '@storyblok/react';
import AnimateHeader from '@/components/AnimatedHeader/AnimatedHeader';
import DemoAnimation from '@/components/AnimatedHeader/animations/Demo.svg';

// Return a list of `params` to populate the [slug] dynamic segment
// TODO: Make a fetch to the Storyblok API to get all the slugs we can forsee

export default function Page(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <div>
      
      <AnimateHeader title='Tjänster' svgAnimation={DemoAnimation} />
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
