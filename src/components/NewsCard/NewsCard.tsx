import React from 'react';
import Image from 'next/image';
import { BaseProps } from '@/types/props';
import { ImageProps } from '@/types/common';
import Link from 'next/link';
import PageSection from '../PageSection/PageSection';

interface NewsCardProps extends BaseProps {
  title?: string;
  image?: ImageProps;
  caption?: string;
  link?:any; // Assuming link is just a URL string for simplicity
}

const NewsCard = ({
  title,
  image,
  caption,
  link,
}: NewsCardProps) => {
  return (
    <PageSection className="flex gap-4 md:gap-12 lg:gap-20 w-full">
      <div className='md:flex -w-full sm:flex sm:flex-col sm:w-full'>
      {image && (
        <div className='md:w-1/3 bg-discrete rounded-4xl w-full lg:w-50 aspect-square mx-auto relative overflow-hidden'>
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
          {link.linkType === "url" ?
            <a href={link.url} rel="noopener noreferrer" target="_blank"className='hover:underline decoration-primary-500'>
              Read more
            </a>
            :
            <Link href={link.cached_url} className='hover:underline decoration-primary-500'>Read more
            </Link>
          }
        </div>
      </div>
    </PageSection>
  );
};

export default NewsCard;
