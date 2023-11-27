import { BaseProps } from '@/types/props';
import React from 'react';

type HeadingElementTag = 'h1' | 'h2' | 'h3' | 'h4' | 'div';

type BrandedTitleProps = {
  element: HeadingElementTag;
} & BaseProps;

function BrandedTitle({
  children,
  element: Element,
  className = '',
  ...props
}: BrandedTitleProps) {
  const titleClasses = `text-xl font-bold mb-4 ${className}`;

  return (
    <Element className={titleClasses} {...props}>
      <ColorDots>{children as string}</ColorDots>
    </Element>
  );
}

export default BrandedTitle;

const ColorDots = ({ children }: { children: string }) => {
  const fragments = children.split('.');
  return fragments.length > 1 ? (
    <React.Fragment>
      {fragments.at(0)}
      <span className='text-primary-500'>{fragments.at(1)}</span>
    </React.Fragment>
  ) : (
    children
  );
};
