import { Suspense } from 'react';

import { getGlobalServiceItems } from '@/api/blocks';
import { getPage } from '@/api/pages';
import { ISbStory, StoryblokComponent } from '@storyblok/react';
import StoryblokStory from '@storyblok/react/story';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { conformPathParams } from '@/utilities/helper';

import { GridProps } from '@/components/Grid/Grid';

import { HeadMetadata } from '../utilities/HeadMetadata';

export default function Page(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { relatedItems, story, isHome } = props;
  return (
    <div>
      <HeadMetadata title={story.name} />
      {isHome && (
        <>
          <div className='p-8 h-[400px] flex items-center justify-center bg-primary-100'>
            Här är en header. Ersätt sen
          </div>
          <StoryblokComponent blok={relatedItems} />
        </>
      )}
      <div className='bg-primary-400 h-48 w-48 absolute top-0 right-0 z-50'></div>
      <StoryblokStory story={story} />
    </div>
  );
}
interface PageProps {
  isHome: boolean;
  story: ISbStory['data'];
  relatedItems: GridProps;
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
