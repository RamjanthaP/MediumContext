"use client";
import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";
import { useState } from "react";
import { MenuStoryblok, MenuLinkStoryblok } from "@sb-types";
import LogoAmaceit from "../Logo/Amaceit";
import BurgerMenu from "./BurgerMenu";
import { MenuItem } from "./MenuItem";
import { MobileMenu } from "./MobileMenu";
import { DesktopMenu } from "./DesktopMenu";

export const specialItemTitle = "Kontakta oss";
const Menu = ({ blok }: { blok: MenuStoryblok }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems =
    blok.content?.header_menu?.filter(
      (item: MenuLinkStoryblok) => item.title !== specialItemTitle
    ) || [];

  const specialItem = blok.content?.header_menu?.find(
    (item: MenuLinkStoryblok) => item.title === specialItemTitle
  );

  return (
    <div {...storyblokEditable(blok)} className="relative bg-default">
      <div className="container mx-auto px-4 sm:px-0">
        <div className="flex justify-between items-center py-6 md:space-x-10">
          <Link
            href="/"
            className="flex justify-start flex-grow-1 w-3/12 lg:w-2/12"
          >
            <LogoAmaceit />
          </Link>
          <DesktopMenu menuItems={menuItems} specialItem={specialItem} />
          <div className="flex">
            <div className="md:hidden">
              <MenuItem size="small" item={specialItem} />
            </div>
            <div className="flex items-center md:hidden">
              <BurgerMenu toggleMenu={toggleMenu} isOpen={isOpen} />
            </div>
          </div>
          {isOpen && (
            <MobileMenu menuItems={menuItems} specialItem={specialItem} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
