import React, { useEffect, useState } from 'react';

import Image from 'next/image';

import { minDesktopScreen } from '@/config';
import RichText from '@/storyblok/helpers/RichText';
import { RichtextStoryblok } from '@sb-types';

import { ImageProps } from '@/types/common';
import { BaseProps } from '@/types/props';

import Button, { ButtonSizes } from '@/components/Button/Button';

import PageSection from '../PageSection/PageSection';

export interface FeatureExpandableProps extends BaseProps {
  preTitle?: string;
  title?: string;
  bgColor?: 'default' | 'inverted' | 'discrete';
  isContentRight?: boolean;
  image?: ImageProps;
  body?: string;
  expandText: string;
  expTitle: string;
  expBody?: RichtextStoryblok;
}

function FeatureExpandable({
  preTitle,
  title,
  isContentRight = false,
  bgColor = 'default',
  body,
  image,
  expandText,
  expTitle,
  expBody,
}: FeatureExpandableProps) {
  const layout = isContentRight ? 'flex-row-reverse' : 'flex-row';
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const [windowSize, setWindowSize] = useState(0);
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
    if (windowSize >= minDesktopScreen) {
      setBtnSize('medium');
    } else {
      setBtnSize('small');
    }
  }, [windowSize]);

  return (
    <PageSection title={preTitle} theme={bgColor}>
      <div
        className={`flex flex-col-reverse md:${layout} gap-4 md:gap-12 lg:gap-20 w-full `}
      >
        <div className='flex flex-col md:w-1/2 md:justify-center'>
          {title && (
            <h3 className='text-xxl lg:text-3xl font-bold my-4'>{title}</h3>
          )}
          <p className='mb-5'>{body}</p>
          <div className='flex flex-wrap gap-2'>
            {expBody && !expanded && (
              <Button
                variant='primary'
                element='button'
                onClick={toggleExpanded}
                size={btnSize}
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
            <h2 className='text-xl font-bold mb-4'>{expTitle}</h2>
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
    </PageSection>
  );
}

export default FeatureExpandable;
