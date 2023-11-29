import React from 'react';
import { BaseProps } from '../types/props';
import { Container } from './Layout/Container';
import Image from 'next/image';
import Button from './Button/Button';
import { BaseLink, ImageProps } from '@/types/common';
import BrandedTitle from './BrandedTitle/BrandedTitle';

export interface FeatureSectionProps extends BaseProps {
  preTitle?: string;
  title?: string;
  bgColor?: 'default' | 'inverted' | 'discrete';
  isContentRight?: boolean;
  firstButton?: BaseLink;
  secondButton?: BaseLink;
  image?: ImageProps;
  body?: string;
  expBody?: string;
}

function FeatureSection({
  preTitle,
  title,
  isContentRight = false,
  bgColor = 'default',
  body,
  firstButton,
  secondButton,
  image,
}: FeatureSectionProps) {
  const layout = isContentRight ? 'flex-row-reverse' : 'flex-row';

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
              {firstButton && (
                <Button
                  variant='primary'
                  href={firstButton.url}
                  element='button'
                >
                  {firstButton.text}
                </Button>
              )}
              {secondButton && (
                <Button variant='default' transparent href={secondButton.url}>
                  {secondButton.text}
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
      </Container>
    </div>
  );
}

export default FeatureSection;
