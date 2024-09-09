import Image from 'next/image';

import { BaseLink, ImageProps } from '@/types/common';
import { BaseProps } from '@/types/props';

import Button from './Button/Button';
import { Container } from './Layout/Container';

export interface JumbotronProps extends BaseProps {
  layout?: 'content-right' | 'content-left';
  title: string;
  image: ImageProps;
  primaryButton?: BaseLink;
  secondaryButton?: BaseLink;
}

export function Jumbotron({
  children,
  layout = 'content-left',
  className = '',
  title,
  image,
  primaryButton,
  secondaryButton,
}: JumbotronProps) {
  const layoutClass =
    layout === 'content-right' ? 'md:flex-row-reverse' : 'md:flex-row';
  return (
    <div data-component='hero' className={`content-block-default ${className}`}>
      <Container className={`flex flex-col-reverse md:gap-8 ${layoutClass}`}>
        <div className={`content w-full flex items-center pb-8 md:pb-0`}>
          <div className='md:p-8'>
            <h1 className='text-Jumbo/sm lg:text-Jumbo/lg font-black mb-8'>
              {title}
            </h1>
            {children && <div className='mb-8'>{children}</div>}
            <div className='flex flex-col items-start gap-2'>
              {primaryButton && (
                <Button variant='primary' href={primaryButton.url}>
                  {primaryButton.text}
                </Button>
              )}
              {secondaryButton && (
                <Button transparent href={secondaryButton.url}>
                  {secondaryButton.text}
                </Button>
              )}
            </div>
          </div>
        </div>
        <div className='flex justify-center w-full md:py-8 h-72 md:h-screen lg:h-splash-img xl:py-28  relative'>
          {image && (
            <Image
              src={image.url}
              fill
              alt={image.alt}
              className='object-contain'
            />
          )}
        </div>
      </Container>
    </div>
  );
}
