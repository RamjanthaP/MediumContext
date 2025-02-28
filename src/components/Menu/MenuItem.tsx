'use client';

import Button, { ButtonSizes } from '../Button/Button';

import { MenuLinkStoryblok } from '@sb-types';
import { StoryblokComponent } from '@storyblok/react';
import { specialItemTitle } from './AppHeader';

interface MenuItemProps {
  item: MenuLinkStoryblok;
  size?: ButtonSizes;
  closeMenu?: () => void;
  className?: string;
}

export const MenuItem = ({
  item,
  closeMenu,
  size = 'medium',
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
