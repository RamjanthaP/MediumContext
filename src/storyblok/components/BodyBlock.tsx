import { BodyStoryblok } from '@sb-types';
import { renderRichText, storyblokEditable } from '@storyblok/react/rsc';

import BodyBlock, { BodyBlockProps } from '@/components/BodyBlock/BodyBlock';

const BodyBlockSb = ({ blok }: BodyStoryblok) => {
  const componentData = mapBodyBlockDtoToData(blok);
  return (
    <div {...storyblokEditable(blok)}>
      <BodyBlock {...componentData} />
    </div>
  );
};
export default BodyBlockSb;

const mapBodyBlockDtoToData = (blok: BodyStoryblok): BodyBlockProps => {
  return {
    intro: renderRichText(blok.intro),
    content: renderRichText(blok.body),
  };
};
