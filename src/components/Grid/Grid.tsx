import { StoryblokComponent } from '@storyblok/react/rsc';

import PageSection, { PageSectionProps } from '../PageSection/PageSection';

// Used for whitelisting classes for css
const possibleCols = ['lg:grid-cols-3', 'lg:grid-cols-4'];

export interface GridProps extends PageSectionProps {
  columns?: any[];
  target_name?: string;
}

const Grid = ({
  title,
  theme = 'default',
  columns,
  target_name,
  className,
  children,
}: GridProps) => {
  return (
    <PageSection
      title={title}
      theme={theme}
      id={target_name && target_name}
      data-component='grid'
    >
      <div
        className={`grid gap-2 md:gap-16 xl:gap-11 grid-cols-1 md:grid-cols-2 ${className}`}
        data-testid='grid-items'
      >
        {/* Provides us a way to use it without storyblok */}
        {children}
        {/* Storyblok elements */}
        {!children &&
          columns?.map((nestedBlok: any) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
      </div>
    </PageSection>
  );
};

export default Grid;
