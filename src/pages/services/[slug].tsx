import StoryblokStory from '@storyblok/react/story';
import {
  getStoryblokPage,
  getGlobalServiceItems,
  getStoryblokPageBySlug,
} from '@/services/getStoryBlokPage';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import { Suspense } from 'react';
import {  convertPath, getSlugParam } from '@/utilities/helper';
import { useRouter } from 'next/router';

export default function Page(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const route = useRouter()
  const path = route?.query?.slug

  const filterRelatedItems = (path: string | string[] | undefined, relatedItemRequest: InferGetStaticPropsType<typeof getStaticProps>) => {
    let url = convertPath(path)
    const filteredColumns = relatedItemRequest.content.columns.filter((column: { title: string; }) =>
      column.title.toLowerCase() !== url.toLowerCase()
    );

    return {
      ...relatedItemRequest,
      content: {
        ...relatedItemRequest.content,
        columns: filteredColumns
      }
    };
  }

  const filteredColumns = filterRelatedItems(path, props.relatedItemRequest)

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <StoryblokStory
          story={props.pageData.props.story}
          title={props.pageData.props.story.name}
          relatedItems={filteredColumns.content}
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
