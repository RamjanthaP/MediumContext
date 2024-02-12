import { AssetStoryblok, FeatureStoryblok } from '@sb-types';
import { storyblokEditable } from '@storyblok/react/rsc';

import FeatureExpandable from '@/components/Feature/FeatureExpandable';


const NewsSb = ({ blok }: FeatureStoryblok) => {
    const componentData = mapNewsToData(blok);
  return (
      <div {...storyblokEditable(blok)}>
      <FeatureExpandable {...componentData} />
      </div>
    );
  
};
export default NewsSb;

const mapNewsToData = (
  blok: any
) => {
  const image: AssetStoryblok | undefined = blok.image;
  return {
    title: blok.title,
    image: image
      ? {
        alt: image.alt || '', 
        url: image.filename,
      }
      : undefined,
    body: blok.caption,
    exBody: {
      expandText: blok.link && blok.link.text || blok?.link.cached_url,
    }
    
  };
};
