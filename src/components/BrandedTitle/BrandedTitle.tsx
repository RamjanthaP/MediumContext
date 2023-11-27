import { BaseProps } from '@/types/props';
import React from 'react';

type HeadingElementTag = 'h1' | 'h2' | 'h3' | 'h4' | 'div';

type BrandedTitleProps = BaseProps & {
  children: string;
  element: HeadingElementTag;
};

function BrandedTitle({
  children,
  element: Element,
  className = '',
  ...props
}: BrandedTitleProps) {
  const titleClasses = `text-xl font-bold mb-4 ${className}`;

  return (
    <Element className={titleClasses} {...props}>
      <ColorDots>{children}</ColorDots>
    </Element>
  );
}

export default BrandedTitle;

const ColorDots = ({ children }: { children: string }) => {
  const dotOnEndPattern = /\.$/;
  return dotOnEndPattern.test(children) ? (
    <React.Fragment>
      {children.replace(dotOnEndPattern, '')}
      <span className='text-primary-500'>.</span>
    </React.Fragment>
  ) : (
    children
  );
};
