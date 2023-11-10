import { StoryblokComponent } from '@storyblok/react/rsc';
import { Container } from './Layout/Container';
import { BaseProps } from '@/types/props';

// Used for whitelisting classes for css
const possibleCols = ['lg:grid-cols-3', 'lg:grid-cols-4'];
export interface GridProps extends BaseProps {
  title?: string;
  theme?: 'default' | 'inverted' | 'discrete';
  columns?: any[];
}

const Grid = ({
  title,
  theme = 'default',
  columns,
  className,
  children,
}: GridProps) => {
  return (
    <div className={`theme-block-${theme} py-8 md:py-12 ${className}`}>
      <Container>
        {title && <h2 className='text-xxl font-bold mb-8'>{title}</h2>}
        <div
          className={`grid gap-4 md:gap-12 xl:gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-${
            columns?.length || 4
          }`}
        >
          {/* Provides us a way to use it without storyblok */}
          {children}
          {/* Storyblok elements */}
          {columns?.map((nestedBlok: any) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Grid;
