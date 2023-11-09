import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import { GridStoryblok } from '../../component-types-sb';
import { Container } from './Layout/Container';

// Used for whitelisting classes for css
const possibleCols = ['lg:grid-cols-3', 'lg:grid-cols-4'];
const Grid = ({ blok }: GridStoryblok) => {
  return (
    <div className={`theme-block-${blok.theme} py-8 md:py-12`}>
      <Container>
        {blok.title && (
          <h2 className='text-xxl font-bold mb-8'>{blok.title}</h2>
        )}
        <div
          className={`grid gap-4 md:gap-12 xl:gap-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-${blok.columns.length}`}
          {...storyblokEditable(blok)}
        >
          {blok.columns.map((nestedBlok: any) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Grid;
