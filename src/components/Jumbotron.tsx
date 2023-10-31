import Image from 'next/image';

import { ImageProps } from '@/types/common';
import { BaseProps } from '@/types/props';

import { Container } from './Layout/Container';

interface JumbotronProps extends BaseProps {
  variant?: 'content-right' | 'content-left';
  title: string;
  image: ImageProps;
}

export function Jumbotron({
  children,
  variant = 'content-left',
  className = '',
  title,
  image,
}: JumbotronProps) {
  const layoutClass =
    variant === 'content-right' ? 'md:flex-row-reverse' : 'md:flex-row';
  return (
    <div className={`content-block-default ${className}`}>
      <Container className={`flex flex-col-reverse md:gap-8 ${layoutClass}`}>
        <div className={`content w-full flex items-center`}>
          <div className='px-8  py-8 md:py-0'>
            {title && (
              <>
                <h1 className='md:text-xl lg:text-2xl xl:text-3xl font-bolder color-black dark:text-white'>
                  {title}
                </h1>
                {children && <div className='mt-4'>{children}</div>}
              </>
            )}
          </div>
        </div>
        <div className='flex justify-center w-full md:py-8 h-72 md:h-screen  relative'>
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
