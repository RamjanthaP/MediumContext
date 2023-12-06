import React from 'react'
import SwedenMap from '../ServiceItem/animations/map.svg';

export interface MapProps {
  animations: string;
}
const Animation = {
  map: SwedenMap,
};

const Map = ({ animations }: MapProps) => {
  return (
    <div>
      {animations && (
        <object
          className='map-svg'
          data={Animation[animations as keyof typeof Animation].src}
          type='image/svg+xml'
        ></object>
      )}
    </div>
  )
}

export default Map;