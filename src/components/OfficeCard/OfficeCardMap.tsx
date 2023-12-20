import React, { useState } from 'react';

import Image from 'next/image';

import PlaceholderImageLinkoping from '../../../public/assets/linkoping.png';
import PlaceholderImageLjungby from '../../../public/assets/ljungby.png';
import PlaceholderImageStockholm from '../../../public/assets/stockholm.png';

export interface Address {
  address?: string;
  city?: string;
}

const OfficeCardMap = ({ address, city }: Address) => {
  const [hover, setHover] = useState(false);
  let placeholderImage;
  switch (city) {
    case 'Ljungby':
      placeholderImage = PlaceholderImageLjungby;
      break;
    case 'Stockholm':
      placeholderImage = PlaceholderImageStockholm;
      break;
    case 'Linköping':
      placeholderImage = PlaceholderImageLinkoping;
      break;
    default:
      placeholderImage = PlaceholderImageLjungby;
  }

  return (
    <>
      <Image
        className={`w-full rounded-3xl md:h-[18.75rem] object-cover`}
        src={placeholderImage}
        alt={'Karta över kontoret i ' + city}
      />
      <div
        className='absolute top-0 right-0 left-0 bottom-0 hover:bg-[rgba(0,0,0,0.6)]'
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {hover && (
          <span className='relative top-1/2 -translate-y-1/2 flex p-4 font-bold text-xl'>
            Öppna karta på google maps
          </span>
        )}
      </div>
    </>
  );
};

export default OfficeCardMap;
