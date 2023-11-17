import React, { useState } from 'react';
import { BaseProps } from '../types/props';
import { Container } from './Layout/Container';
import Image from 'next/image';
import Button from './Button/Button';
import { BaseLink } from '@/types/common';

export interface FeatureSectionProps extends BaseProps {
  title?: string;
  titleElement?: 'h1' | 'h2' | 'h3' | 'span';
  bgColor?: 'default' | 'inverted' | 'discrete';
  isContentRight?: boolean;
  firstButton?: BaseLink;
  secondButton?: BaseLink;
  imageUrl?: string;
  imageAlt?: string;
  body?: string;
  expBody?: string;
}

function FeatureSection({
  title,
  titleElement = 'h2',
  isContentRight = false,
  bgColor = 'default',
  body,
  firstButton,
  secondButton,
  imageUrl,
  imageAlt = 'decorative image', // Let the linter have this one
  expBody
}: FeatureSectionProps) {
  const TitleElement = titleElement || 'div';
  const layout = isContentRight ? 'flex-row-reverse' : 'flex-row';
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={`bg-${bgColor}`}>
      <Container element='section' className='py-8 lg:py-16'>
        <div
          className={`flex flex-col-reverse md:${layout} gap-4 md:gap-12 lg:gap-20 w-full `}
        >
          <div className='flex flex-col md:w-1/2 md:justify-center'>
            <TitleElement className='text-xl md:text-3xl font-bold mb-4'>
              {title}
            </TitleElement>
            <p className='mb-4'>{body}</p>
            <div className='flex flex-wrap gap-2'>
              {firstButton && (
                <Button variant='primary' icon href={firstButton.url} element="button" onClick={() => setExpanded(!expanded)}>
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
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  fill
                  className='object-cover'
                />
              )}
            </div>
          </div>
        </div>
        {expBody && expanded &&
          <div className='w-ful rounded-md p-4 my-4 transition-all'>
            <p>{expBody}</p>
          </div>}
      </Container>
    </div>
  );
}

export default FeatureSection;
