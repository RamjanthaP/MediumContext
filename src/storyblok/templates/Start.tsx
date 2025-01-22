import { StoryblokComponent, storyblokEditable } from '@storyblok/react/rsc';

// Used as entry point for all pages in Storyblok
const TemplateStart = ({ blok }: TemplateDefaultStoryblok) => {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.StartHero?.map((nestedBlok: { _uid: string }) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
      {blok.body?.map((nestedBlok: { _uid: string }) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};
export default TemplateStart;
