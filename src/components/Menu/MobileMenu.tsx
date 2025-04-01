'use client';

import { forwardRef } from 'react';

import type { MenuLinkStoryblok } from '@sb-types';

import { MenuItem } from './MenuItem';

interface MobileMenuProps {
  menuItems: MenuLinkStoryblok[];
  specialItem: MenuLinkStoryblok;
  closeMenu: () => void;
}

const MobileMenu = forwardRef<HTMLDivElement, MobileMenuProps>(
  (props: MobileMenuProps, ref) => {
    return (
      <div
        ref={ref}
        className='fixed flex flex-col py-8 items-center theme-block-discrete md:hidden z-50 top-14 right-0 bottom-0 left-0 gap-8'
      >
        {props.menuItems.map((item) => (
          <MenuItem key={item._uid} item={item} closeMenu={props.closeMenu} />
        ))}
      </div>
    );
  }
);
MobileMenu.displayName = 'MobileMenu';
export { MobileMenu };
