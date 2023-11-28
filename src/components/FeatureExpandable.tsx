import React, { useState } from 'react';
import { BaseProps } from '../types/props';
import { Container } from './Layout/Container';
import Image from 'next/image';
import Button from './Button/Button';
import { ImageProps } from '@/types/common';
import BrandedTitle from './BrandedTitle/BrandedTitle';
import RichText from '@/storyblok/helpers/RichText';
import { RichtextStoryblok } from '@sb-types';

export interface FeatureExpandableProps extends BaseProps {
  preTitle?: string;
  title?: string;
  bgColor?: 'default' | 'inverted' | 'discrete';
  isContentRight?: boolean;
  expandText: string;
  image?: ImageProps;
  body?: string;
  expBody?: RichtextStoryblok;
}

function FeatureExpandable({
  preTitle,
  title,
  isContentRight = false,
  bgColor = 'default',
  body,
  expandText,
  image,
  expBody,
}: FeatureExpandableProps) {
  const layout = isContentRight ? 'flex-row-reverse' : 'flex-row';
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`bg-${bgColor}`}>
      <Container element='section' className='py-8 lg:py-16'>
        {preTitle && (
          <BrandedTitle element='h2' className='text-xl'>
            {preTitle}
          </BrandedTitle>
        )}
        <div
          className={`flex flex-col-reverse md:${layout} gap-4 md:gap-12 lg:gap-20 w-full `}
        >
          <div className='flex flex-col md:w-1/2 md:justify-center'>
            {title && (
              <h3 className='text-xl md:text-xxl font-bold mb-4'>{title}</h3>
            )}
            <p className='mb-4'>{body}</p>
            <div className='flex flex-wrap gap-2'>
              {expBody && !expanded && (
                <Button
                  variant='primary'
                  element='button'
                  onClick={toggleExpanded}
                >
                  {expandText}
                </Button>
              )}
            </div>
          </div>
          <div className='md:w-1/2 '>
            <div className='bg-discrete rounded-4xl w-full lg:w-50 aspect-square mx-auto relative overflow-hidden'>
              {image && (
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className='object-cover'
                />
              )}
            </div>
          </div>
        </div>
        {expBody && expanded && (
          <div className='w-full rounded-md p-4 my-4 transition-all theme-block-default'>
            <header className='flex justify-between items-start'>
              <h2 className='text-xl font-bold mb-4'>Mer om</h2>
              <Button
                variant='default'
                transparent
                size='small'
                onClick={toggleExpanded}
              >
                Stäng
              </Button>
            </header>
            <div className='columns-3 pb-4'>
              <RichText __html={expBody} />
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

export default FeatureExpandable;
