import React from 'react';
import { BaseProps } from '../types/props';
import { Container } from './Layout/Container';
import Image from 'next/image';
import Button from './Button/Button';

export interface FeatureSectionProps extends BaseProps {
  title?: string;
  titleElement?: 'h1' | 'h2' | 'h3' | 'span';
  bgColor?: 'default' | 'inverted' | 'discrete';
  isContentRight?: boolean;
  firstButton?: string;
  secondButton?: string;
  imageUrl?: string;
  imageAlt?: string;
  body?: string;
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
}: FeatureSectionProps) {
  const TitleElement = titleElement || 'div';
  const layout = isContentRight ? 'flex-row-reverse' : 'flex-row';
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
                <Button variant='primary' icon>
                  {firstButton}
                </Button>
              )}
              {secondButton && (
                <Button variant='default' transparent icon>
                  {secondButton}
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
      </Container>
    </div>
  );
}

export default FeatureSection;
