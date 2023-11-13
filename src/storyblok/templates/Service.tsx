import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import { TemplateServiceStoryblok } from '../../../component-types-sb';

// Used as entry point for all pages in Storyblok
const TemplateService = ({ blok }: TemplateServiceStoryblok) => {
  console.log(blok);
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body?.map((nestedBlok: { _uid: string }) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};
export default TemplateService;
