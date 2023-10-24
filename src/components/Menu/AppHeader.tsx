"use client";

import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Link from "next/link";
import { MenuStoryblok, MenuLinkStoryblok } from "../../../component-types-sb";
import Button from "../Button/Button";
import Amaceit from "../Logo/Amaceit";
import BurgerMenu from "./BurgerMenu";
import { useState } from "react";


const Menu = ({ blok }: { blok: MenuStoryblok }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className="relative bg-default border-b-2 border-gray-100"
      {...storyblokEditable(blok)}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start">
            <Link href="/">
              <Amaceit />
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            {/* TODO: exchange the title from "tjänster" to "kontakta oss" */}
            {blok?.content.header_menu?.filter((nestedBlok: MenuLinkStoryblok) => nestedBlok.title !== "Tjänster-s")
              .map((nestedBlok: MenuLinkStoryblok) => (
                <div key={nestedBlok._uid} className="mx-4">
                  <StoryblokComponent
                    className=""
                    blok={nestedBlok}
                    key={nestedBlok._uid}
                  />
                </div>
              ))}
            {blok?.content.header_menu.map((nestedBlok: MenuLinkStoryblok) => nestedBlok.title === "Tjänster-s" &&
              <Button variant="green" key={nestedBlok._uid}>{nestedBlok.title}</Button>
            )}
          </div>
          <div>
            <div className="flex items-center md:hidden">
              <BurgerMenu toggleMenu={toggleMenu} isOpen={isOpen} />
            </div>
          </div>
          {isOpen && (
            <div className="fixed flex flex-col my-6 items-center theme-block-default  md:hidden z-50 top-16 right-0 bottom-0 left-0">
              {blok?.content.header_menu?.filter((nestedBlok: MenuLinkStoryblok) => nestedBlok.title !== "Tjänster-s")
                .map((nestedBlok: MenuLinkStoryblok) => (
                  <div key={nestedBlok._uid} className="m-4">
                    <StoryblokComponent
                      className=""
                      blok={nestedBlok}
                      key={nestedBlok._uid}
                    />
                  </div>
                ))}
              {blok?.content.header_menu.map((nestedBlok: MenuLinkStoryblok) => nestedBlok.title === "Tjänster-s" &&
                <Button variant="green" key={nestedBlok._uid}>{nestedBlok.title}</Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Menu;
