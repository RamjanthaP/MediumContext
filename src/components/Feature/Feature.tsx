import React, { useEffect, useState } from 'react';

import Image from 'next/image';

import { minDesktopScreen } from '@/config';

import { BaseLink, ImageProps } from '@/types/common';
import { BaseProps } from '@/types/props';

import { handleBtnSize } from '@/utilities/helper';

import Button, { ButtonSizes } from '@/components/Button/Button';
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

  const [windowSize, setWindowSize] = useState<number>(0);
  const [btnSize, setBtnSize] = useState<ButtonSizes>('small');

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    handleBtnSize({ minDesktopScreen, windowSize, setBtnSize });
  }, [windowSize]);

  return (
    <PageSection theme={bgColor} title={preTitle}>
      <div
        className={`flex flex-col-reverse md:${layout} items-center gap-4 md:gap-12 lg:gap-20`}
      >
        <div className='w-full md:w-1/2'>
          {title && (
            <h3 className='text-xxl lg:text-3xl font-bold my-4'>{title}</h3>
          )}
          <p className='mb-5'>{body}</p>
          <div className='flex flex-wrap gap-2'>
            {firstButton && (
              <Button
                variant='primary'
                href={firstButton.url}
                size={btnSize}
                element='button'
              >
                {firstButton.text}
              </Button>
            )}
            {secondButton && (
              <Button
                variant='default'
                transparent
                href={secondButton.url}
                size={btnSize}
              >
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
