import React from 'react';

import { useScreenSize } from '@/hooks/useScreenSize';
import RichText from '@/storyblok/helpers/RichText';
import { RichtextStoryblok } from '@sb-types';

import { AssetProp, BaseLink } from '@/types/common';

import Button from '@/components/Button/Button';
import ButtonWrapper from '@/components/Button/ButtonWrapper';

import Styles from './hero.module.css';

export type HeroProps = {
  title: RichtextStoryblok;
  image?: AssetProp | null;
  primaryButton?: BaseLink;
  secondaryButton?: BaseLink;
  bodyText?: RichtextStoryblok;
};

const Hero = ({
  title,
  primaryButton,
  secondaryButton,
  bodyText,
}: HeroProps) => {
  const { isDesktop } = useScreenSize();

  return (
    <div className={`relative ${Styles.root}`}>
      <div
        className={`flex flex-col text-center px-4 md:px-8 lg:px-0 ${Styles.heroText}`}
      >
        <RichText __html={title} unstyled />
        <span
          className={`mb-4 max-w-sm lg:max-w-3xl mx-auto ${Styles.heroText}`}
        >
          {bodyText && <RichText __html={bodyText} />}
        </span>
        <div className='mx-auto'>
          {(primaryButton || secondaryButton) && (
            <ButtonWrapper>
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
              {secondaryButton && (
                <Button
                  className='inline-block'
                  transparent
                  href={secondaryButton.url}
                >
                  {secondaryButton.text}
                </Button>
              )}
            </ButtonWrapper>
          )}
        </div>
      </div>
    </div>
  );
};
export default Hero;
