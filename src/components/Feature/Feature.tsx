import React from 'react';

import Image from 'next/image';

import { useScreenSize } from '@/hooks/useScreenSize';

import { AssetProp, BaseLink } from '@/types/common';
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
  image?: AssetProp;
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

  const { isDesktop } = useScreenSize();

  return (
    <PageSection theme={bgColor} title={preTitle}>
      <div
        className={`flex flex-col-reverse md:${layout} items-center gap-4 md:gap-12 lg:gap-20`}
      >
        <div className='w-full sm:w-4/5 md:w-1/2'>
          {title && (
            <h3 className='text-xxl lg:text-Jumbo/md font-bold my-4'>
              {title}
            </h3>
          )}
          <p className='mb-5 text-md lg:text-1.1xl'>{body}</p>
          <div className='flex flex-wrap gap-2'>
            {firstButton && (
              <Button
                variant='primary'
                href={firstButton.url}
                size={isDesktop ? 'medium' : 'small'}
              >
                {firstButton.text}
              </Button>
            )}
            {secondButton && (
              <Button
                variant='default'
                transparent
                href={secondButton.url}
                size={isDesktop ? 'medium' : 'small'}
              >
                {secondButton.text}
              </Button>
            )}
          </div>
        </div>
        <div className='w-full sm:w-4/5 md:w-1/2'>
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
