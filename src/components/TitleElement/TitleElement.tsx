import React from 'react';
import { colorDots } from '@/utilities/helper';

type TitleElementProps = {
  title: string;
  titleSize?: 'h1' | 'h2' | 'h3' | 'span';
};

function TitleElement({ title, titleSize = 'h1' }: TitleElementProps) {
  const titleClasses = 'text-xl font-bold mb-4';
  const sizeClasses = {
    h1: 'md:text-3xl',
    h2: 'md:text-xxl',
    h3: 'md:text-xl',
    span: 'md:text-lg'
  };

  const TitleTag = titleSize;

  return (
    <div>
      <TitleTag className={`${titleClasses} ${sizeClasses[titleSize]}`}>
        {colorDots(title)}
      </TitleTag>
    </div>
  );
}

export default TitleElement;
