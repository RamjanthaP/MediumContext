import React from 'react';

import { BaseProps } from '@/types/props';

import { handleUrlForGoogleMaps } from '@/utilities/helper';

import Button from '../Button/Button';
import OfficeCardMap from './OfficeCardMap';

export interface OfficeCardProps extends BaseProps {
  city: string;
  streetadress: string;
  zip: string;
  coordinates: {
    longitude: string;
    latitude: string;
    zoom: string;
  };
}

const OfficeCard = ({
  city,
  streetadress,
  zip,
  coordinates,
}: OfficeCardProps) => {
  return (
    <div className='pt-12'>
      <div className='pb-4'>
        <h3 className='font-semibold text-xxl pb-2'>{city}</h3>
        <p className='text-lg'>{streetadress}</p>
        <p className='text-lg'>{zip}</p>
        <p className='text-lg'>{city}</p>
      </div>
      <div className='w-full hidden md:block'>
        <a
          href={handleUrlForGoogleMaps({
            city,
            streetadress,
            zip,
            coordinates,
          })}
          target='_blank'
          className='relative flex items-center'
          aria-label={`Länk till google maps för kontoret i ${city}`}
        >
          <div className='w-full h-full max-h-80 relative'>
            <OfficeCardMap address={streetadress} city={city} />
          </div>
        </a>
      </div>
      <div className='block md:hidden'>
        <Button
          element='Link'
          variant='default'
          className='text-sm md:hidden'
          size='small'
          transparent
          href='/'
        >
          Öppna i Google Maps
        </Button>
      </div>
    </div>
  );
};

export default OfficeCard;
