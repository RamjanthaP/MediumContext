import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { AssetProp } from '@/types/common';
import { BaseProps } from '@/types/props';

import PageSection from '../PageSection/PageSection';

interface NewsCardProps extends BaseProps {
  uid: any;
  title?: string;
  image?: AssetProp;
  caption?: string;
  link?: {
    id: string;
    url: string;
    target: string;
    linktype: string;
    fieldtype: string;
    cached_url: string;
  };
  index: number;
}

const NewsCard = ({ title, image, caption, link, index }: NewsCardProps) => {
  const isLayoutReversed = index % 2 !== 0;
  return (
    <PageSection
      className={`flex gap-4 md:gap-12 lg:gap-20 w-full ${
        isLayoutReversed ? 'flex-row-reverse bg-discrete' : 'bg-default'
      }`}
    >
      <div
        className={`md:flex -w-full sm:flex sm:flex-col  justify-between sm:w-full ${
          isLayoutReversed ? 'flex-row-reverse bg-discrete' : 'bg-default'
        }`}
      >
        {image && (
          <div className='md:w-5/12 bg-discrete rounded-4xl w-full lg:w-50 aspect-square relative overflow-hidden'>
            <Image
              src={image.url}
              alt={image.alt || 'image'}
              fill
              className='object-cover'
            />
          </div>
        )}
        <div className='flex flex-col md:w-1/2 md:justify-center'>
          {title && (
            <h3 className='text-xxl lg:text-3xl font-bold my-4'>{title}</h3>
          )}
          {caption && <p className='mb-5 text-md lg:text-lg'>{caption}</p>}
          {link && link.linktype === 'url' && (
            <a
              href={link.url}
              rel='noopener noreferrer'
              target='_blank'
              className='hover:underline decoration-primary-500'
            >
              Read more
            </a>
          )}
          {link && link.linktype === 'story' && (
            <Link
              href={link && link.cached_url}
              className='hover:underline decoration-primary-500'
            >
              Read more
            </Link>
          )}
        </div>
      </div>
    </PageSection>
  );
};

export default NewsCard;
