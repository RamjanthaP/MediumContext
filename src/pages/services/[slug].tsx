import { Suspense } from 'react';

import {
  getGlobalServiceItems,
  getStoryblokPage,
  getStoryblokPageBySlug,
} from '@/services/getStoryBlokPage';
import StoryblokStory from '@storyblok/react/story';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import { getSlugParam } from '@/utilities/helper';

export default function Page(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <StoryblokStory
          story={props.pageData.props.story}
          title={props.pageData.props.story.name}
          relatedItems={props.relatedItemRequest.content}
          contactPerson={props.pageData.props.story.contact_person}
        />
      </Suspense>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (props) => {
  const path = props?.params?.slug;

  const pageData = await getStoryblokPage(['services/', getSlugParam(path)]);
  const relatedItemRequest = await getGlobalServiceItems();
  return {
    props: {
      pageData,
      relatedItemRequest,
    },
  };
};

export const getStaticPaths = (async () => {
  const paths = await getStoryblokPageBySlug('services/*');
  const childSlugs = paths?.stories
    ?.map((story: { slug: string }) => '/services/' + story.slug)
    .filter((slug: string) => slug !== '/services/services');

  return {
    paths: childSlugs,
    fallback: 'blocking', // In order to use Suspense.
  };
}) satisfies GetStaticPaths;
