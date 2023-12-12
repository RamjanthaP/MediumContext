import RichText from '@/storyblok/helpers/RichText';
import { RichtextStoryblok } from '@sb-types';

import { BaseLink, ImageProps } from '@/types/common';

import Button from '@/components/Button/Button';
import ButtonWrapper from '@/components/Button/ButtonWrapper';

import Styles from './hero.module.css';

export type HeroProps = {
  title: RichtextStoryblok;
  image?: ImageProps | null;
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
  return (
    <div className={`relative  ${Styles.root}`}>
      <div className='flex flex-col text-center'>
        <h1 className={`${Styles.heroTitle}`}>
          <RichText __html={title} unstyled />
        </h1>
        <span className='text-md md:text-lg mb-4 max-w-sm lg:max-w-3xl mx-auto'>
          {bodyText && <RichText __html={bodyText} />}
        </span>
        <div className='mx-auto'>
          {(primaryButton || secondaryButton) && (
            <ButtonWrapper>
              {primaryButton && (
                <Button
                  element='Link'
                  variant='primary'
                  className='inline-block'
                  href={primaryButton.url}
                >
                  {primaryButton.text}
                </Button>
              )}
              {secondaryButton && (
                <Button
                  element='Link'
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
