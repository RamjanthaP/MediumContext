import StoryblokStory from '@storyblok/react/story';
import { getStoryblokPage, getRelatedItems } from '../../services/getStoryBlokPage';

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
export default async function Page({ params }: { params: { path: string[] } }) {
  const path = params.path;
  const { props } = await getStoryblokPage(path);
  const relatedItemRequest = await getRelatedItems()

  return (
    <div>
      <h1 className='text-3xl'>Korven</h1>
      <StoryblokStory
        story={props.story}
        contactPerson={props.story.contact_person}
        title={props.story.name}
        relatedItem={relatedItemRequest}
      />
    </div>
  );
}
