import { storyblokEditable } from '@storyblok/react';
import Map, { MapProps } from '../../components/Map/Map';
import { MapBlockStoryblok } from '@sb-types';

const MapSb = ({ blok }: MapBlockStoryblok) => {
  const componentData = mapSwedenMapTOtoData(blok);
  return (
    <div {...storyblokEditable(blok)}>
      <Map {...componentData} />
    </div>
  );
};
export default MapSb;

function mapSwedenMapTOtoData(blok: MapBlockStoryblok
): MapProps {
  return {
    animations: blok.animations || 'map',
  };
}