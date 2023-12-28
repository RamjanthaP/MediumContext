import { useEffect, useState } from 'react';

import Link from 'next/link';

import { MenuLinkStoryblok, MenuStoryblok } from '@sb-types';
import { storyblokEditable } from '@storyblok/react';
import { AnimatePresence, motion } from 'framer-motion';

import { Container } from '../Layout/Container';
import LogoAmaceit from '../Logo/Amaceit';
import { DesktopMenu } from './DesktopMenu';
import MenuButton from './MenuButton';
import { MenuItem } from './MenuItem';
import { MobileMenu } from './MobileMenu';

export const specialItemTitle = 'Kontakta oss';
const Menu = ({ blok }: { blok: MenuStoryblok }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [preventBodySroll, setPreventBodyScroll] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = preventBodySroll;
  };
  const closeMenu = () => {
    setIsOpen(false);
    setPreventBodyScroll('');
  };

  useEffect(() => {
    isOpen ? setPreventBodyScroll('') : setPreventBodyScroll('hidden');
  }, [isOpen]);

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
        <div className='flex justify-between items-center py-1 md:py-6 transition-all duration-500'>
          <Link
            onClick={closeMenu}
            href='/'
            className='flex justify-start flex-grow-1 w-3/12 lg:w-2/12'
            aria-label='Länk till startsidan'
          >
            <LogoAmaceit className='md:-translate-y-0.5 lg:-translate-y-1' />
          </Link>
          <DesktopMenu menuItems={menuItems} specialItem={specialItem} />
          <div className='flex'>
            <AnimatePresence>
              {!isOpen && (
                <motion.div
                  className='md:hidden flex items-center'
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
            <div className='flex items-center md:hidden '>
              <MenuButton toggleMenu={toggleMenu} isOpen={isOpen} />
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
