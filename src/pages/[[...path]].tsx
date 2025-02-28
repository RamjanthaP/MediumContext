import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { HeadMetadata } from '../utilities/HeadMetadata';
import { ISbStoryData } from '@storyblok/react';
import StoryblokStory from '@storyblok/react/story';
import { conformPathParams } from '@/utilities/helper';
import { getPage } from '@/api/pages';

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
    return {
      redirect: {
        destination: '/not-found',
        permanent: false,
      },
    };
  }
};
