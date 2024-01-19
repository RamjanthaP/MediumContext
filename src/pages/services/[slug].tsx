import { Suspense } from 'react';

import { getGlobalServiceItems } from '@/api/blocks';
import { getServicePage } from '@/api/pages';
import { GridStoryblok, PersonStoryblok } from '@sb-types';
import { ISbStoryData } from '@storyblok/react';
import StoryblokStory from '@storyblok/react/story';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { HeadMetadata } from '@/utilities/HeadMetadata';
import { getSlugParam } from '@/utilities/helper';
import { filterOutItemWithSameUrl } from '@/utilities/relatedItems';

type PageProps = {
  story: ISbStoryData<'templateService'>;
  relatedItems: GridStoryblok;
  contactPerson?: PersonStoryblok;
};

export default function Page(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { relatedItems, story, contactPerson } = props;
  const title = story.name;

  return (
    <div>
      <HeadMetadata
        title={`${story.name} - en av alla de IT-tjänster Amaceit erbjuder`}
      />
      <Suspense fallback={<div>Loading...</div>}>
        <StoryblokStory
          story={story}
          title={title}
          contactPerson={contactPerson}
          relatedItems={relatedItems.content}
        />
      </Suspense>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  props
) => {
  try {
    const path = props?.params?.slug;

    const pageData = await getServicePage(getSlugParam(path));
    const relatedItemRequest = await getGlobalServiceItems();
    const relatedItems = filterOutItemWithSameUrl(
      'services/' + getSlugParam(path),
      relatedItemRequest.data
    );
    return {
      props: {
        story: pageData.data.story,
        contactPerson: pageData.data.contact_person,
        relatedItems,
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
