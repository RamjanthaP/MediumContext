
import {
  getStoryblokPage,
  getGlobalServiceItems,
} from '../services/getStoryBlokPage';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { StoryblokComponent } from '@storyblok/react';
import { conformPathParams } from '@/utilities/helper';
import StoryblokStory from '@storyblok/react/story';

// Return a list of `params` to populate the [slug] dynamic segment
// TODO: Make a fetch to the Storyblok API to get all the slugs we can forsee
export async function generateStaticParams() {
  const slugs = [
    'om-amaceit',
    'karriar',
    'kontakta-oss',
    'services',
    'services/digitalisering',
  ];

  return slugs.map((slug) => ({
    slug,
  }));
}
export default function Page(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const relatedItemRequest = props.relatedItemRequest.content
  const pageData = props.pageData.props.story

  return (
    <div>
      {props.isHome &&
        <>
          <div className='p-8 h-[400px] flex items-center justify-center bg-primary-100'>
            Här är en header. Ersätt sen
          </div>
          <StoryblokComponent blok={relatedItemRequest} />
        </>}
      <StoryblokStory story={pageData} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (props) => {
  const path = props?.params?.path || ['home'];
  const cleanPath = conformPathParams(path)
  const isHome = JSON.stringify(cleanPath) === JSON.stringify(['home'])

  const pageData = await getStoryblokPage(cleanPath);
  const relatedItemRequest = await getGlobalServiceItems();
  return {
    props: {
      isHome,
      pageData,
      relatedItemRequest,
    },
  };
};
