import { getGlobalServiceItems } from '@/api/blocks';
import { getPage } from '@/api/pages';
import { GridStoryblok } from '@sb-types';
import { ISbStoryData } from '@storyblok/react';
import StoryblokStory from '@storyblok/react/story';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { HeadMetadata } from '@/utilities/HeadMetadata';

import PageSection from '@/components/PageSection/PageSection';

type ServiceItem = {
  _uid: string;
  title: string;
  description: string | unknown;
  animation?: string;
  button?: { url: string };
};

type PageProps = {
  story: ISbStoryData<'templateDefault'>;
  relatedItems: GridStoryblok;
};

export default function Page(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { story, relatedItems } = props;

  const serviceItems = (relatedItems?.columns ?? []) as unknown as ServiceItem[];

  return (
    <div>
      <HeadMetadata title={'Tjänster inom .NET, React och Typescript'} />

      <StoryblokStory story={story} />

      <PageSection
        title='Våra tjänstekoncept'
        theme='default'
        data-component='services-table'
      >
        <div className='overflow-x-auto' data-testid='services-table'>
          <table className='w-full border-collapse text-left'>
            <thead>
            <tr className='border-b border-primary-200'>
              <th className='py-4 pr-4 font-bold'>Tjänst</th>
              <th className='py-4 pr-4 font-bold'>Beskrivning</th>
              <th className='py-4 font-bold'>Läs mer</th>
            </tr>
            </thead>
            <tbody>
            {serviceItems.map((item) => (
              <tr
                key={item._uid}
                className='border-b border-primary-100 align-top'
              >
                <td className='py-4 pr-4 font-semibold'>{item.title}</td>
                <td className='py-4 pr-4'>
                  {typeof item.description === 'string' ? item.description : ''}
                </td>
                <td className='py-4'>
                  {item.button?.url && (
                    <a
                      href={`/${item.button.url}`}
                      className='text-primary-600 underline'
                    >
                      {item.title}
                    </a>
                  )}
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </PageSection>
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