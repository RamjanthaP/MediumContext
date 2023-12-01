import {
  getStoryblokPage,
  getGlobalServiceItems,
} from '@/services/getStoryBlokPage';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { StoryblokComponent } from '@storyblok/react';

export default function Home(
  props: InferGetStaticPropsType<typeof getStaticProps>
  ,
) {
  const relatedItemRequest = props.relatedItemRequest.content
  const pageData = props.pageData.props.story.content

  const updatedPageDataBody = pageData.body?.map((nestedBlok: { _uid: string }, index : number) => {
    if (index === 1 && relatedItemRequest && relatedItemRequest.columns) {
      return { ...nestedBlok, columns: relatedItemRequest.columns };
    }
    return nestedBlok;
  });

  return (
    <div>
      {updatedPageDataBody?.map((nestedBlok: { _uid: string }) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pageData = await getStoryblokPage(['/home']);
  const relatedItemRequest = await getGlobalServiceItems();
  return {
    props: {
      pageData,
      relatedItemRequest,
    },
  };
};
