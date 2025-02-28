import React from 'react';

import { useScreenSize } from '@/hooks/useScreenSize';
import RichText from '@/storyblok/helpers/RichText';
import { RichtextStoryblok } from '@sb-types';

import { AssetProp, BaseLink } from '@/types/common';

import Button from '@/components/Button/Button';

import Styles from './heroStart.module.css';

export type HeroStartProps = {
  title: RichtextStoryblok;
  image: AssetProp;
  mobileImage: AssetProp;
  primaryButton?: BaseLink;
};

const HeroStart = ({
  title,
  primaryButton,
  image,
  mobileImage,
}: HeroStartProps) => {
  const { isDesktop } = useScreenSize();

  return (
    <div className={`relative`}>
      <div className='flex flex-col text-center px-4 md:px-8 lg:px-0'>
        <div className='relative'>
          {isDesktop ? (
            <img src={image.url} alt={image.alt} className={Styles.heroImage} />
          ) : (
            <img
              src={mobileImage.url}
              alt={mobileImage.alt}
              className={Styles.heroImage}
            />
          )}

          <div className='absolute top-1/3 left-0 right-0'>
            <h1 className={Styles.heroStartText}>
              {<RichText __html={title} unstyled />}
            </h1>
            <div className=' mt-12 flex justify-center align-middle'>
              {primaryButton && (
                <Button
                  size={isDesktop ? 'medium' : 'small'}
                  variant='primary'
                  className='inline-block lg:px-6 py-3'
                  href={primaryButton.url}
                >
                  {primaryButton.text}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroStart;
