import { storyblokEditable } from '@storyblok/react/rsc';
import { AssetStoryblok, FeatureStoryblok } from '@sb-types';
import FeatureSection, { FeatureSectionProps } from '@/components/Feature';
import FeatureExpandable, {
  FeatureExpandableProps,
} from '@/components/FeatureExpandable';

const FeatureSb = ({ blok }: FeatureStoryblok) => {
  // We are using this until we decide to split in to 2 components on the CMS end
  if (blok?.expandBody) {
    const componentData = mapFeatureDtoToFeatureExpandableData(blok);
    return (
      <div {...storyblokEditable(blok)}>
        <FeatureExpandable {...componentData} />
      </div>
    );
  } else {
    const componentData = mapFeatureDtoToFeatureData(blok);
    return (
      <div {...storyblokEditable(blok)}>
        <FeatureSection {...componentData} />
      </div>
    );
  }
};
export default FeatureSb;

const mapFeatureDtoToFeatureData = (
  blok: FeatureStoryblok
): FeatureSectionProps => {
  const image: AssetStoryblok | undefined = blok.image;
  return {
    title: blok.title,
    image: image
      ? {
          alt: image.alt || '', // This is mandatory in SB, but our type converter dont know that
          url: image.filename,
        }
      : undefined,
    bgColor: blok.theme || 'default',
    firstButton: blok.ctaPrimary && {
      text: blok.ctaPrimary.at(0)?.text as string, // TODO: This is weird. Lint bug or actual error
      url: '/' + blok?.ctaPrimary.at(0)?.link.cached_url,
    },
    secondButton: blok.secondButton && {
      text: blok?.ctaSecondary?.at(0)?.text,
      url: '/' + blok?.ctaSecondary?.at(0)?.link.cached_url,
    },
    isContentRight: blok?.layout === 'content-right',
    body: blok.body,
  };
};

const mapFeatureDtoToFeatureExpandableData = (
  blok: FeatureStoryblok
): FeatureExpandableProps => {
  const image: AssetStoryblok | undefined = blok.image;
  return {
    title: blok.title,
    image: image
      ? {
          alt: image.alt || '', // This is mandatory in SB, but our type converter dont know that
          url: image.filename,
        }
      : undefined,
    bgColor: blok.theme || 'default',
    isContentRight: blok?.layout === 'content-right',
    body: blok.body,
    expBody: blok?.expandBody,
    expandText: blok?.expandText || 'Läs mer',
  };
};
