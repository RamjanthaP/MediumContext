import { getPage } from '@/api/pages';
import { ISbStoryData } from '@storyblok/react';
import StoryblokStory from '@storyblok/react/story';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { conformPathParams } from '@/utilities/helper';

import { HeadMetadata } from '../utilities/HeadMetadata';

interface PageProps {
  isHome: boolean;
  story: ISbStoryData<'templateDefault'>;
}

export default function Page(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { story } = props;
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

    return {
      props: {
        isHome,
        story: pageData.data.story,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      redirect: {
        destination: '/not-found', 
        permanent: false,
      },
};
  }
};
