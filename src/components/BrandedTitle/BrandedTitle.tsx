import { colorDots } from '@/utilities/helper';

type BrandedTitleProps = {
  children: string;
  element: 'h1' | 'h2' | 'h3' | 'span';
  className?: string;
};

function BrandedTitle({ children, element: Element, className = '' }: BrandedTitleProps) {
  const titleClasses = `text-xl font-bold mb-4 ${className}`

  return (
      <Element className={titleClasses}>
        {colorDots(children)}
      </Element>
  );
}

export default BrandedTitle;
