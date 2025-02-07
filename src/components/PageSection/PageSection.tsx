import { HeadingElementTag } from '@/types/common';
import { BaseProps } from '@/types/props';

import BrandedTitle from '../BrandedTitle/BrandedTitle';
import { Container } from '../Layout/Container';

type Theme = 'default' | 'inverted' | 'discrete' | '';

export interface PageSectionProps extends BaseProps {
  title?: string;
  titleElement?: HeadingElementTag;
  theme?: Theme;
}

export const PageSection = ({
  theme,
  title,
  titleElement = 'h2',
  children,
  className = '',
  ...rest
}: PageSectionProps) => (
  <div className={`theme-block-${theme} py-8 md:py-12 ${className}`} {...rest}>
    <Container>
      {title && (
        <BrandedTitle
          element={titleElement}
          className='text-xl font-bold mb-8'
        >
          {title}
        </BrandedTitle>
      )}
      {children}
    </Container>
  </div>
);
export default PageSection;
