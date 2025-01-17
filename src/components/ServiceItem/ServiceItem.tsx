import Image from 'next/image';

import IconForward from '@heroicons/react/24/solid/ArrowRightIcon';

import { AssetProp, BaseLink } from '@/types/common';
import { BaseProps } from '@/types/props';

import Button from '../Button/Button';
import Bounce from './animations/bounce.svg';
import Spin1 from './animations/spin-1.svg';
import Spin2 from './animations/spin-2.svg';

export interface ServiceCardProps extends BaseProps {
  title: string;
  description: string;
  image?: AssetProp;
  animation: string;
  button: BaseLink;
}

const Animation = {
  spin1: Spin1,
  spin2: Spin2,
  bounce: Bounce,
};

const ServiceCard = ({
  title,
  image,
  description,
  button,
  animation,
  className,
}: ServiceCardProps) => (
  <div
    className={`flex flex-row-reverse md:flex-col  overflow-hidden ${className}`}
  >
    <div className={`w-24 h-24 lg:w-full lg:h-24 relative lg:my-8 self-start`}>
      {image && (
        <Image className='object-cover' src={image.url} alt={image.alt} fill />
      )}
      {!image && animation && (
        <object
          className='object-fill w-full h-full'
          data={Animation[animation as keyof typeof Animation].src}
          type='image/svg+xml'
        ></object>
      )}
    </div>
    <div className='flex-grow-1 w-full '>
      <h3 className='text-lg md:text-xl font-bold hyphens-auto'>{title}</h3>
      <div
        className='pt-2 text'
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <div className='mt-4'>
        <Button href={`/${button.url}`} variant='primary' size='small'>
          <span>{button.text}</span>
          <IconForward className='w-4 h-4' />
        </Button>
      </div>
    </div>
  </div>
);

export default ServiceCard;
