import React from 'react';

import Image from 'next/image';

import { BaseLink, ImageProps } from '@/types/common';
import { BaseProps } from '@/types/props';

import Button from '@/components/Button/Button';
import PageSection from '@/components/PageSection/PageSection';

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
    <PageSection theme={bgColor} title={preTitle}>
      <div
        className={`flex flex-col-reverse md:${layout} items-center gap-8 md:gap-10 lg:gap-20`}
      >
        <div className='w-full md:w-1/2'>
          {title && (
            <h3 className='text-xl md:text-xxl font-bold mb-4'>{title}</h3>
          )}
          <p className='mb-4'>{body}</p>
          <div className='flex flex-wrap gap-2'>
            {firstButton && (
              <Button variant='primary' href={firstButton.url} element='button'>
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
        <div className='w-full md:w-1/2'>
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
    </PageSection>
  );
}

export default FeatureSection;
