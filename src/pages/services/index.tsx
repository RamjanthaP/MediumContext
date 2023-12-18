import { getGlobalServiceItems } from '@/api/blocks';
import { getPage } from '@/api/pages';
import { ISbStoryData, StoryblokComponent } from '@storyblok/react';
import StoryblokStory from '@storyblok/react/story';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { HeadMetadata } from '@/utilities/HeadMetadata';
import { stripTitleFromGrid } from '@/utilities/helper';

import { GridProps } from '@/components/Grid/Grid';

type PageProps = {
  story: ISbStoryData<'templateDefault'>;
  relatedItems: GridProps;
};

export default function Page(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { relatedItems, story } = props;

  return (
    <div>
      <HeadMetadata title={'Tjänster inom .NET, React och Typescript'} />
      <div className='p-8 h-[400px] flex items-center justify-center bg-primary-100'>
        Här är en header. Ersätt sen
      </div>
      <StoryblokComponent blok={stripTitleFromGrid(relatedItems)} />
      <StoryblokStory story={story} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  try {
    const pageData = await getPage(['services']);
    const relatedItemRequest = await getGlobalServiceItems();
    return {
      props: {
        story: pageData.data.story,
        relatedItems: relatedItemRequest.data.content,
      },
    };
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }
};
