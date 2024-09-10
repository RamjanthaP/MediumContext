import React from 'react';

import Image from 'next/image';

import { ArrowRightIcon as ButtonIcon } from '@heroicons/react/24/outline';

import PlaceholderImageLinkoping from '../../../public/assets/linkoping-maps.png';
import PlaceholderImageLjungby from '../../../public/assets/ljungby-maps.png';
import PlaceholderImageStockholm from '../../../public/assets/stockholm-maps.png';
import styles from './office-card-map.module.css';

export interface Address {
  address?: string;
  city?: string;
}

const OfficeCardMap = ({ city }: Address) => {
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
        className={`absolute top-0 right-0 left-0 bottom-0 rounded-3xl  ${styles.mapCtaWrapper}`}
      >
        <span
          className={`relative top-1/2 -translate-y-1/2 flex flex-row p-4 font-bold text-xl text-secondary-50 ${styles.mapCta}`}
        >
          Öppna i google maps
          <ButtonIcon className='w-5 h-5 ml-2  -rotate-45 inline-block' />
        </span>
      </div>
    </>
  );
};

export default OfficeCardMap;
