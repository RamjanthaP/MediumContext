import React from 'react';

import { BaseProps } from '@/types/props';

import BrandedTitle from '../BrandedTitle/BrandedTitle';
import { Container } from './Container';

interface SectionWrapperProps extends BaseProps {
  color?: 'default' | 'inverted' | 'discrete';
  title?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  color = 'default',
  title,
  children,
  className = '',
}) => {
  return (
    <div className={`theme-block-${color} ${className}`}>
      <Container element='section' className='py-4 lg:py-7'>
        <div>
          {title && (
            <BrandedTitle className='text-xl md:text-xxl' element='h2'>
              {title}
            </BrandedTitle>
          )}
          <div>{children}</div>
        </div>
      </Container>
    </div>
  );
};

export default SectionWrapper;
