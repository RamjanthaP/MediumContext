import Image from 'next/image';
import Link from 'next/link';

import { BaseLink, ImageProps } from '@/types/common';

import { extractLastWord } from '@/utilities/helper';

import Button from '../Button/Button';
import ButtonWrapper from '../Button/ButtonWrapper';

export type HeroProps = {
  title: string;
  image: ImageProps;
  primaryButton?: BaseLink;
  secondaryButton?: BaseLink;
};

const Hero = ({ image, title, primaryButton, secondaryButton }: HeroProps) => {
  return (
    <div>
      <div className='w-full h-96 relative theme-block-default flex justify-center items-center'>
        <div className='z-20 p-14'>
          <h1 className='text-Jumbo/sm md:text-Jumbo/lg lg:text-Jumbo/xl font-bold mb-8 md:mb-10 transition-all duration-500'>
            {extractLastWord(title).remaining}{' '}
            <span className='text-primary-500'>
              {extractLastWord(title).lastWord}
            </span>
          </h1>
          {(primaryButton || secondaryButton) && (
            <ButtonWrapper>
              {primaryButton && (
                <Button
                  element='Link'
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
                  href={secondaryButton.url}
                >
                  {secondaryButton.text}
                </Button>
              )}
            </ButtonWrapper>
          )}
        </div>
        <div className='z-10 bg-default-opacity bg-opacity-60 absolute top-0 left-0 right-0 bottom-0'></div>
        <Image
          className='object-cover md:object-contain z-0 absolute bg-discrete'
          src={image.url}
          alt={image.alt}
          fill
        />
      </div>
    </div>
  );
};
export default Hero;
