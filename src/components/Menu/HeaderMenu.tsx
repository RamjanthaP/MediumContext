import { storyblokEditable, StoryblokComponent } from '@storyblok/react';
import { MenuStoryblok, MenuLinkStoryblok } from '@sb-types';

const HeaderMenu = ({ blok }: { blok: MenuStoryblok }) => (
  <div
    className='hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-10'
    {...storyblokEditable({ blok })}
  >
    {blok.links.map((nestedBlok: MenuLinkStoryblok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </div>
);
export default HeaderMenu;
