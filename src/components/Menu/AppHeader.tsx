'use client';
import { storyblokEditable } from '@storyblok/react';
import Link from 'next/link';
import { useState } from 'react';
import { MenuStoryblok, MenuLinkStoryblok } from '@sb-types';
import LogoAmaceit from '../Logo/Amaceit';
import BurgerMenu from './BurgerMenu';
import { MenuItem } from './MenuItem';
import { MobileMenu } from './MobileMenu';
import { DesktopMenu } from './DesktopMenu';
import { AnimatePresence, motion } from 'framer-motion';
import { Container } from '../Layout/Container';

export const specialItemTitle = 'Kontakta oss';
const Menu = ({ blok }: { blok: MenuStoryblok }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuItems =
    blok.content?.header_menu?.filter(
      (item: MenuLinkStoryblok) => item.title !== specialItemTitle
    ) || [];

  const specialItem = blok.content?.header_menu?.find(
    (item: MenuLinkStoryblok) => item.title === specialItemTitle
  );

  return (
    <div
      {...storyblokEditable(blok)}
      className='bg-default sticky top-0  z-app-header'
    >
      <Container>
        <div className='flex justify-between items-center py-6'>
          <Link
            href='/'
            className='flex justify-start flex-grow-1 w-3/12 lg:w-2/12'
          >
            <LogoAmaceit className='-translate-y-2 md:translate-y-0' />
          </Link>
          <DesktopMenu menuItems={menuItems} specialItem={specialItem} />
          <div className='flex'>
            <AnimatePresence>
              {!isOpen && (
                <motion.div
                  className='md:hidden'
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                >
                  <MenuItem
                    size='small'
                    item={specialItem}
                    closeMenu={closeMenu}
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <div className='flex items-center md:hidden'>
              <BurgerMenu toggleMenu={toggleMenu} isOpen={isOpen} />
            </div>
          </div>
          {isOpen && (
            <MobileMenu
              menuItems={menuItems}
              specialItem={specialItem}
              closeMenu={closeMenu}
            />
          )}
        </div>
      </Container>
    </div>
  );
};

export default Menu;
