import { StoryblokComponent, storyblokEditable } from '@storyblok/react/rsc';

import { TemplateDefaultStoryblok } from '../../../component-types-sb';

// Used as entry point for all pages in Storyblok
const TemplateDefault = ({ blok }: TemplateDefaultStoryblok) => {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body?.map((nestedBlok: { _uid: string }) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};
export default TemplateDefault;
