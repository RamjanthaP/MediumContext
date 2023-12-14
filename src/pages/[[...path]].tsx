import { StoryblokComponent } from '@storyblok/react';
import StoryblokStory from '@storyblok/react/story';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { conformPathParams } from '@/utilities/helper';

import {
  getGlobalServiceItems,
  getStoryblokPage,
} from '../services/getStoryBlokPage';
import { HeadMetadata } from '../utilities/HeadMetadata';

export default function Page(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const relatedItemRequest = props.relatedItemRequest.content;
  const pageData = props.pageData.props.story;

  return (
    <div>
      <HeadMetadata title={props.pageData.props.story.name} />
      {props.isHome && (
        <>
          <div className='p-8 h-[400px] flex items-center justify-center bg-primary-100'>
            Här är en header. Ersätt sen
          </div>
          <StoryblokComponent blok={relatedItemRequest} />
        </>
      )}
      <StoryblokStory story={pageData} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (props) => {
  try {
    const path = props?.params?.path || ['home'];
    const cleanPath = conformPathParams(path);
    const isHome = JSON.stringify(cleanPath) === JSON.stringify(['home']);

    const pageData = await getStoryblokPage(cleanPath);
    const relatedItemRequest = await getGlobalServiceItems();

    return {
      props: {
        isHome,
        pageData,
        relatedItemRequest,
      },
    };
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }
};
