import React, { useState } from 'react';
import { BaseProps } from '../types/props';
import { Container } from './Layout/Container';
import Image from 'next/image';
import Button from './Button/Button';
import { BaseLink, ImageProps } from '@/types/common';
import BrandedTitle from './BrandedTitle/BrandedTitle';

export interface FeatureSectionProps extends BaseProps {
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
  title,
  isContentRight = false,
  bgColor = 'default',
  body,
  firstButton,
  secondButton,
  image,
  expBody,
}: FeatureSectionProps) {
  const layout = isContentRight ? 'flex-row-reverse' : 'flex-row';
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`bg-${bgColor}`}>
      <Container element='section' className='py-8 lg:py-16'>
        <div
          className={`flex flex-col-reverse md:${layout} gap-4 md:gap-12 lg:gap-20 w-full `}
        >
          <div className='flex flex-col md:w-1/2 md:justify-center'>
            {title && (
              <BrandedTitle element='h1' className='text-3xl'>
                {title}
              </BrandedTitle>
            )}
            <p className='mb-4'>{body}</p>
            <div className='flex flex-wrap gap-2'>
              {firstButton && (
                <Button
                  variant='primary'
                  icon
                  href={firstButton.url}
                  element='button'
                  onClick={() => setExpanded(!expanded)}
                >
                  {firstButton.text}
                </Button>
              )}
              {secondButton && (
                <Button
                  variant='default'
                  transparent
                  icon
                  href={secondButton.url}
                >
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
        {expBody && expanded && (
          <div className='w-ful rounded-md p-4 my-4 transition-all'>
            <p>{expBody}</p>
          </div>
        )}
      </Container>
    </div>
  );
}

export default FeatureSection;
