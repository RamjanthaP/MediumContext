import { getGlobalServiceItems } from '@/api/blocks';
import { getPage } from '@/api/pages';
import { ISbStoryData, StoryblokComponent } from '@storyblok/react';
import StoryblokStory from '@storyblok/react/story';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { conformPathParams } from '@/utilities/helper';

import { GridProps } from '@/components/Grid/Grid';

import { HeadMetadata } from '../utilities/HeadMetadata';

interface PageProps {
  isHome: boolean;
  story: ISbStoryData<'templateDefault'>;
  relatedItems: GridProps;
}

export default function Page(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { relatedItems, story, isHome } = props;
  return (
    <div>
      <HeadMetadata title={story.name} />

      <StoryblokStory story={story} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  props
) => {
  try {
    const path = props?.params?.path || ['home'];
    const cleanPath = conformPathParams(path);
    const isHome = JSON.stringify(cleanPath) === JSON.stringify(['home']);

    const pageData = await getPage(cleanPath);
    const relatedItemRequest = await getGlobalServiceItems();

    return {
      props: {
        isHome,
        story: pageData.data.story,
        relatedItems: relatedItemRequest.data.content,
      },
    };
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }
};
