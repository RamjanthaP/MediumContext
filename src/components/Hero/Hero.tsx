import Image from 'next/image';

import { BaseLink, ImageProps } from '@/types/common';

import { extractLastWord } from '@/utilities/helper';

import Button from '../Button/Button';
import ButtonWrapper from '../Button/ButtonWrapper';
import RichText from '@/storyblok/helpers/RichText';
import { RichtextStoryblok } from '@sb-types';

export type HeroProps = {
  title: string;
  image?: ImageProps | null;
  primaryButton?: BaseLink;
  secondaryButton?: BaseLink;
  bodyText?: RichtextStoryblok;
};

const Hero = ({ image, title, primaryButton, secondaryButton, bodyText }: HeroProps) => {
  return (
    <div>
      <div className='w-full h-96 relative theme-block-default flex justify-center items-center'>
        <div className='z-20 pt-7 px-7 flex flex-col text-center h-max'>
          <h1 className='text-Jumbo/sm md:text-Jumbo/lg lg:text-Jumbo/xl font-bold mb-4 md:mb-2 transition-all duration-500'>
            {extractLastWord(title).remaining}{' '}
            <span className='text-primary-500'>
              {extractLastWord(title).lastWord}
            </span>
          </h1>
          <span className='text-lg md:text-sm'>
             {bodyText && <RichText __html={bodyText} />}
          </span>
          <div className='mx-auto'>
            {(primaryButton || secondaryButton) && (
              <ButtonWrapper>
                {primaryButton && (
                  <Button
                    element='Link'
                    variant="primary"
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
        </div>
        <div className='z-10 bg-default-opacity bg-opacity-60 absolute top-0 left-0 right-0 bottom-0'></div>
        {image && image.url ? <Image
          className='object-cover md:object-contain z-0 absolute bg-discrete'
          src={image?.url}
          alt={image?.alt}
          fill
        />: null }
      </div>
    </div>
  );
};
export default Hero;
