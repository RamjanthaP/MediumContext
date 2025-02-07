import { HeadingElementTag } from '@/types/common';
import { BaseProps } from '@/types/props';
import React, { ReactNode } from 'react';

type BrandedTitleProps = BaseProps & {
  element: HeadingElementTag;
};

function BrandedTitle({
  children,
  element: Element,
  className = '',
  ...props
}: BrandedTitleProps) {
  const titleClasses = `font-bold mb-4 ${className}`;

  return (
    <Element className={titleClasses} {...props}>
      <ColorDots>{children}</ColorDots>
    </Element>
  );
}

export default BrandedTitle;

const ColorDots = ({ children }: { children: string | ReactNode }) => {
  if (typeof children !== 'string') return children;
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
