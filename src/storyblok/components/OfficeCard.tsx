import { storyblokEditable } from '@storyblok/react';

import OfficeCard from '../../components/OfficeCard/OfficeCard';

const OfficeCardSb = ({ blok }: any) => {
  const componentData = mapOfficeCard(blok);
  return (
    <div {...storyblokEditable(blok)}>
      <OfficeCard {...componentData} />
    </div>
  );
};
export default OfficeCardSb;

function mapOfficeCard(blok: any): any {
  return {
    animations: blok.animations || 'office',
  };
}
