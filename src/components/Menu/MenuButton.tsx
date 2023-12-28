import React from 'react';

interface BurgerProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

function MenuButton({ toggleMenu, isOpen }: BurgerProps) {
  const genericHamburgerLine = `custom-filter h-0.5 w-6 my-0.5 rounded-full bg-black transition ease transform duration-300`;

  return (
    <button
      className='flex flex-col h-12 w-12 justify-center items-center group'
      onClick={toggleMenu}
      aria-label={`${isOpen ? 'Stäng menyn' : 'Öppna menyn'}`}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? 'rotate-45 translate-y-1.5 opacity-50 group-hover:opacity-100'
            : 'opacity-50 group-hover:opacity-100'
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen
            ? '-rotate-45 -translate-y-1.5 opacity-50 group-hover:opacity-100'
            : 'opacity-50 group-hover:opacity-100'
        }`}
      />
    </button>
  );
}

export default MenuButton;
