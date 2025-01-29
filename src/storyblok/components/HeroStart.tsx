import { HeroStartStoryblok } from '@sb-types';
import { storyblokEditable } from '@storyblok/react';

import { extractLinkDataFromFirstItem } from '@/utilities/dtoMappers';

import HeroStart, { HeroStartProps } from '@/components/HeroStart/HeroStart';

const HeroStartSb = ({ blok }: HeroStartStoryblok) => {
  const componentData = mapHeroStartDtoToData(blok);
  return (
    <div {...storyblokEditable(blok)}>
      <HeroStart {...componentData} />
    </div>
  );
};
export default HeroStartSb;

function mapHeroStartDtoToData(blok: HeroStartStoryblok): HeroStartProps {
  return {
    title: blok.headline || 'Title missing',
    image: blok.asset && {
      url: blok.asset.filename || '',
      alt: blok.asset.alt || 'hero-image',
      className: '',
    },
    mobileImage: blok.mobile_asset && {
      url: blok.mobile_asset.filename || '',
      alt: blok.mobile_asset.alt || 'hero-image-mobile',
      className: '',
    },
    primaryButton: extractLinkDataFromFirstItem(blok.ctaPrimary),
  };
}
