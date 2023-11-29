import StoryblokStory from '@storyblok/react/story';
import {
  getStoryblokPage,
  getGlobalServiceItems,
} from '@/services/getStoryBlokPage';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { StoryblokComponent } from '@storyblok/react';
import AnimateHeader from '@/components/AnimatedHeader/AnimatedHeader';
import DemoAnimation from '@/components/AnimatedHeader/animations/Demo.svg';
import { Suspense } from 'react';
import { getSlugParam } from '@/utilities/helper';

// Return a list of `params` to populate the [slug] dynamic segment
// TODO: Make a fetch to the Storyblok API to get all the slugs we can forsee

export default function Page(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  console.log(props.pageData.props.story);
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <StoryblokStory
          story={props.pageData.props.story}
          relatedItems={props.relatedItemRequest.content}
          title={props.pageData.props.story.name}
        />
      </Suspense>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (props) => {
  const path = props?.params?.slug || '';

  const pageData = await getStoryblokPage([
    'services/',
    getSlugParam(props?.params?.slug),
  ]);
  const relatedItemRequest = await getGlobalServiceItems();
  console.log(path);
  return {
    props: {
      pageData,
      relatedItemRequest,
    },
  };
};

export const getStaticPaths = (async () => {
  return {
    paths: ['/services/[slug]'],
    fallback: 'blocking', // false or "blocking"
  };
}) satisfies GetStaticPaths;

/* import { useRouter } from 'next/router';
import { Suspense } from 'react';
import { QueryClient, useQuery } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { fetchData } from '../utils/dataFetching'; // Assuming you have a utility function for fetching data

const DynamicPageContent = ({ data }) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
};

const DynamicPage = ({ data }) => {
  const router = useRouter();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DynamicPageContent data={data} />
    </Suspense>
  );
};

export default DynamicPage;

// Fetch data function (utils/dataFetching.js)
export const fetchData = async (slug) => {
  // Replace this with your actual data fetching logic
  const response = await fetch(`/api/data/${slug}`);
  const data = await response.json();

  return data;
};

// Static site generation with data pre-fetching
export async function getStaticPaths() {
  // Define the paths that should be pre-rendered at build time
  const paths = ['/teams', '/digital'];

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const data = await fetchData(params.slug);

  return {
    props: {
      data,
    },
  };
} */
