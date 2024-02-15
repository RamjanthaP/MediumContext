import { FeatureStoryblok } from '@sb-types';
import { storyblokEditable } from '@storyblok/react/rsc';
import NewsCard from '@/components/NewsCard/NewsCard';

const NewsSb = ({ blok }: FeatureStoryblok) => {
  const componentData = mapNewsToData(blok);

  return (
    <div {...storyblokEditable(blok)}>
      {componentData.map((item) => (
        <NewsCard key={item.uid} {...item} />
      ))}
      </div>
    );
  
};
export default NewsSb;

const mapNewsToData = (blok :any) => {
  const { block } = blok;

  if (!Array.isArray(block)) {
    console.error('Expected block to be an array');
    return [];
  }

  // Map each item in the block to a new structure
  return block.map(item => {
    const { link, image, title, caption } = item;
    console.log(link)

    const mappedItem = {
      uid: item._uid,
      title: title,
      caption: caption,
      link: link, 
      image: image && {
        alt: image.alt || '',
        url: image.filename,
      },
    };

    return mappedItem;
  });
};
