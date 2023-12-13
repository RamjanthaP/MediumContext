import { OfficeCardStoryblok } from '@sb-types';
import { storyblokEditable } from '@storyblok/react';

import OfficeCard from '../../components/OfficeCard/OfficeCard';

const OfficeCardSb = ({ blok }: OfficeCardStoryblok) => {
  const componentData = mapOfficeCard(blok);
  return (
    <div {...storyblokEditable(blok)}>
      <OfficeCard {...componentData} />
    </div>
  );
};
export default OfficeCardSb;

function mapOfficeCard(blok: OfficeCardStoryblok) {
  return {
    offices: blok || 'office',
  };
}
