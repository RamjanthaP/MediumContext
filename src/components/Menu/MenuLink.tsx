import Link from 'next/link';

import { storyblokEditable } from '@storyblok/react';

import { MenuLinkStoryblok } from '../../../component-types-sb';

interface MenuLinkProps {
  blok: MenuLinkStoryblok;
  closeMenu: () => void;
}

const MenuLink = ({ blok, closeMenu }: MenuLinkProps) => {
  const hiddenClass = blok.title === 'Nyhetssida' ? 'md:hidden lg:flex' : ''; // TODO: Move this to a Storyblok prop for "hide on small screens"
  return (
    <Link
      onClick={closeMenu}
      href={'/' + blok?.link?.cached_url}
      {...storyblokEditable(blok)}
      className={`text-base uppercase cursor-pointer transition-all duration-300 border-b-2 border-b-transparent hover:border-primary-500 ${hiddenClass}`}
    >
      {blok.title}
    </Link>
  );
};
export default MenuLink;
