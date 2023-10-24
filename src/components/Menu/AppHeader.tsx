"use client";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Link from "next/link";
import { MenuStoryblok, MenuLinkStoryblok } from "../../../component-types-sb";
import Button from "../Button/Button";
import Amaceit from "../Logo/Amaceit";
import BurgerMenu from "./BurgerMenu";
import { useState } from "react";

const MenuItem = ({ item }: any) => {
  {/* TODO: exchange the title from "tjänster" to "kontakta oss" */ }
  if (item.title === "Tjänster-s") {
    return <div className="mx-auto my-3">
      <Button variant="green">{item.title}</Button>
    </div>
   
  }
  return (
    <div key={item._uid} className="mx-4 my-3">
      <StoryblokComponent blok={item} key={item._uid} />
    </div>
  );
};

const Menu = ({ blok }: { blok: MenuStoryblok }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = blok.content?.header_menu?.filter((item: MenuLinkStoryblok) => item.title !== "Tjänster-s") || [];
  const specialItem = blok.content?.header_menu?.find((item: MenuLinkStoryblok) => item.title === "Tjänster-s");

  return (
    <div {...storyblokEditable(blok)} className="relative bg-default border-b-2 border-gray-100">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:space-x-10">
          <Link href="/" className="flex justify-start">    
              <Amaceit />          
          </Link>
          <div className="hidden md:flex items-center ">
            {menuItems.map((item: { _uid: any; }) => (
              <MenuItem key={item._uid} item={item} />
            ))}
            {specialItem && <MenuItem item={specialItem} />}
          </div>
          <div className="flex items-center md:hidden">
            <BurgerMenu toggleMenu={toggleMenu} isOpen={isOpen} />
          </div>
          {isOpen && (
            <div className="fixed flex flex-col my-6 items-center theme-block-default  md:hidden z-50 top-16 right-0 bottom-0 left-0">
              {menuItems.map((item: { _uid: any; }) => (
                <MenuItem key={item._uid} item={item} />
              ))}
              {specialItem && <MenuItem item={specialItem} />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
