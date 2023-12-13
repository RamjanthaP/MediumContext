import React, { useState } from 'react';

import Image from 'next/image';

import { OfficeCardStoryblok } from '@sb-types';

import PlaceholderImage from '../../../public/hero-images/shape_40.png';
import Button from '../Button/Button';

export interface OfficeCardProps extends OfficeCardStoryblok {
  component?: string;
  _uid?: string;
}

const OfficeCard = (componentData: OfficeCardProps) => {
  const office = componentData.blok;

  const imageStyle = {
    borderRadius: '2rem',
    width: '100%',
    height: '100%',
    maxWidth: '21.25rem',
    maxHeight: '21.25rem',
  };

  return (
    <div className='pt-12 '>
      <div className='w-full hidden md:block'>
        <a href='/' className='relative flex items-center justify-center'>
          <Image src={PlaceholderImage} style={imageStyle} alt='' />
          <span className='hidden'>Länk till google maps</span>
        </a>
      </div>
      <div className='pb-4'>
        <h3 className='font-semibold text-xxl pb-2'>{office.city}</h3>
        <p className='text-lg'>{office.streetadress}</p>
        <p className='text-lg'>{office.zip}</p>
        <p className='text-lg'>{office.city}</p>
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
