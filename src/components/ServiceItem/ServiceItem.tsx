import Image from 'next/image';
import Spin1 from './animations/spin-1.svg';
import Spin2 from './animations/spin-2.svg';
import Bounce from './animations/bounce.svg';
import IconForward from '@heroicons/react/24/solid/ArrowRightIcon';
import Link from 'next/link';
import { BaseLink, ImageProps } from '@/types/common';
import { BaseProps } from '@/types/props';

export interface ServiceCardProps extends BaseProps {
  title: string;
  description: string;
  image: ImageProps;
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
      <h3 className='text-lg md:text-xl  font-bold'>{title}</h3>
      <div
        className='pt-2 text'
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <div className='mt-4'>
        <Link
          href={button.url}
          className='bg-primary-500 text-white cursor-pointer text-sm px-4 py-2  inline-flex gap-1 items-center flex-grow-0 rounded-full hocus:border-lime-500 hocus:text-lime-500 outline-none'
        >
          <span>{button.text}</span>
          <IconForward className='w-4 h-4' />
        </Link>
      </div>
    </div>
  </div>
);

export default ServiceCard;
