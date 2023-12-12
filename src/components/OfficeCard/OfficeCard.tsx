import React from 'react';

import Button from '../Button/Button';

const OfficeCard = (componentData) => {
  console.log(componentData.blok);
  const office = componentData.blok;
  return (
    <div className='pt-12 '>
      <div className='pb-4'>
        <h3 className='font-semibold text-xxl pb-2'>{office.city}</h3>
        <p className='text-lg'>{office.streetadress}</p>
        <p className='text-lg'>{office.zip}</p>
        <p className='text-lg'>{office.city}</p>
      </div>
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
  );
};

export default OfficeCard;
