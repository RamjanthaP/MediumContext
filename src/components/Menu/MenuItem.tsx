'use client';
import { StoryblokComponent } from '@storyblok/react';
import Button, { ButtonSizes } from '../Button/Button';
import { specialItemTitle } from './AppHeader';
import { MenuLinkStoryblok } from '@sb-types';
interface MenuItemProps {
  item: MenuLinkStoryblok;
  size?: ButtonSizes;
  closeMenu?: () => void;
}

export const MenuItem = ({
  item,
  size = 'medium',
  closeMenu,
}: MenuItemProps) => {
  if (item && item.title === specialItemTitle) {
    return (
      <Button
        size={size}
        variant='primary'
        href={item.link.cached_url}
        onClick={closeMenu}
      >
        {item.title}
      </Button>
    );
  }
  return <StoryblokComponent blok={item} closeMenu={closeMenu} />;
};
