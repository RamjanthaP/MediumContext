import { storyblokEditable } from '@storyblok/react';
import Map, { MapProps } from '../../components/Map/Map';
import { MapStoryblok } from '@sb-types';

const MapSb = ({ blok }: MapStoryblok) => {
  const componentData = mapSwedenMapTOtoData(blok);
  return (
    <div {...storyblokEditable(blok)}>
      <Map {...componentData} />
    </div>
  );
};
export default MapSb;

function mapSwedenMapTOtoData(blok: MapStoryblok
): MapProps {
  return {
    animations: blok.animations || 'map',
  };
}