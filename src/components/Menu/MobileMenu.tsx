'use client';

import { AnimatePresence, motion } from 'framer-motion';

import { MenuItem } from './MenuItem';
import type { MenuLinkStoryblok } from '@sb-types';
import { forwardRef } from 'react';

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
        <AnimatePresence>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          >
            <MenuItem
              size='small'
              item={props.specialItem}
              closeMenu={props.closeMenu}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }
);
MobileMenu.displayName = 'MobileMenu'
export { MobileMenu }