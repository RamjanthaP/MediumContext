import { storyblokEditable } from '@storyblok/react/rsc';
import { AssetStoryblok, FeatureStoryblok } from '@sb-types';
import FeatureSection, { FeatureSectionProps } from '@/components/Feature';

const FeatureSb = ({ blok }: FeatureStoryblok) => {
  const componentData = mapFeatureDtoToData(blok);
  return (
    <div {...storyblokEditable(blok)}>
      <FeatureSection {...componentData} />
    </div>
  );
};
export default FeatureSb;

const mapFeatureDtoToData = (blok: FeatureStoryblok): FeatureSectionProps => {
  const image: AssetStoryblok | undefined = blok.image;
  return {
    title: blok.title,
    imageUrl: image?.filename, // TODO: Refactor to ImageInterface
    imageAlt: image?.alt,
    bgColor: blok.theme || 'default',
    firstButton: blok?.ctaPrimary?.at(0)?.text, // TODO: Refactor to BaseLink
    secondButton: blok?.ctaSecondary?.at(0)?.text,
    isContentRight: blok?.layout === 'content-right',
    body: blok.body,
  };
};
