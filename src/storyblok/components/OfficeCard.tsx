import { OfficesStoryblok } from '@sb-types';
import { storyblokEditable } from '@storyblok/react';

import OfficeCard, {
  OfficeCardProps,
} from '../../components/OfficeCard/OfficeCard';

const OfficeCardSb = ({ blok }: OfficesStoryblok) => {
  const componentData = mapOfficeCard(blok);
  return (
    <div className='max-w-xs' {...storyblokEditable(blok)}>
      <OfficeCard {...componentData} />
    </div>
  );
};
export default OfficeCardSb;

function mapOfficeCard(blok: OfficesStoryblok): OfficeCardProps {
  const { longitude, latitude, zoom, ...officeData } = blok;
  return {
    coordinates: { longitude, latitude, zoom },
    ...officeData,
  };
}
