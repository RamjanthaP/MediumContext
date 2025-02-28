'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import Amaceit from '@/components/Logo/Amaceit';
import { DesktopMenu } from '@/components/Menu/DesktopMenu';
import Link from 'next/link';
import { MenuItem } from '../Menu/MenuItem';
import { MenuLinkStoryblok, } from '@sb-types';
import { MobileMenu } from '../Menu/MobileMenu';
import { getMenuData } from '@/api/blocks';
import { useState } from 'react';
import { useStickyContext } from './StickyHeaderContext';

const MotionMobileMenu = motion(MobileMenu);
const MotionIconClose = motion(XMarkIcon);
const MotionIconMenu = motion(Bars3Icon);

const MotionLink = motion(Link);
export const specialItemTitle = 'Kontakta oss';

const HeaderSticky = () => {
  const [menuData, setMenuData] = useState<null | MenuLinkStoryblok[]>(null);
  const { isSticky, displayHeaderLogo, refHeader } = useStickyContext()
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useState(() => {
    const init = async () => {
      const menyRequest = await getMenuData();
      setMenuData(menyRequest.data.content.header_menu)

    }
    init();
  })

  if (!menuData) {
    return <p>Loading</p>
  }

  const menuItems =
    menuData.filter(
      (item: MenuLinkStoryblok) => item.title !== specialItemTitle
    ) || [];

  const specialItem = menuData.find(
    (item: MenuLinkStoryblok) => item.title === specialItemTitle
  );


  return (
    <header
      ref={refHeader}
      className={`w-full bg-default transition-colors duration-300 ${isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-md' : ''
        }`}
    >
      <div className='container mx-auto px-4 md:px-8 py-2 flex items-center justify-between'>

        {displayHeaderLogo && (
          <MotionLink
            href={'/'}
            className='w-32'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              damping: 30,
              duration: 200,
            }}
          >
            <Amaceit />
          </MotionLink>
        )}

        <nav
          className={`${isMenuOpen ? 'block' : 'hidden'
            } md:block absolute top-full left-0 md:static md:w-auto z-50 justify-end flex-1 `}
        >
          <DesktopMenu menuItems={menuItems} specialItem={specialItem} />
        </nav>
        <div className='ml-auto flex gap-4 h-10'>
          <AnimatePresence>
            {!isMenuOpen && specialItem && (
              <motion.div
                className='md:hidden flex items-center '
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
              >
                <MenuItem
                  size='small'
                  item={specialItem}
                  closeMenu={() => setIsMenuOpen(false)}
                />
              </motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='md:hidden text-gray-800 dark:text-white '
            aria-label='Toggle menu'
          >
            <AnimatePresence>
              {!isMenuOpen && (
                <MotionIconMenu
                  initial={{ rotate: 90, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  exit={{ rotate: 90, scale: 0 }}
                  transition={{ type: 'tween', duration: 0.2 }}
                  className='w-8 h-8'
                />
              )}
              {isMenuOpen && (
                <MotionIconClose
                  initial={{ rotate: -90, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  exit={{ rotate: -90, scale: 0 }}
                  transition={{ type: 'tween', duration: 0.2 }}
                  className='w-8 h-8'
                />
              )}
            </AnimatePresence>
          </button>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <MotionMobileMenu
              initial={{ translateY: '100%' }}
              animate={{ translateY: '0%' }}
              exit={{ translateY: '100%' }}
              transition={{ type: 'tween', duration: 0.2 }}
              menuItems={menuItems}
              specialItem={specialItem}
              closeMenu={() => setIsMenuOpen(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

HeaderSticky.displayName = 'HeaderSticky'
export { HeaderSticky }