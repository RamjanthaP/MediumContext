import { ReUsableSectionStoryblok } from '@sb-types';
import { StoryblokComponent, storyblokEditable } from '@storyblok/react';

/**
 * Component that renders a reusable section from global content
 *
 */
const ReUseableSection = ({ blok }: { blok: ReUsableSectionStoryblok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <StoryblokComponent blok={blok.content.content} />
    </div>
  );
};
export default ReUseableSection;
