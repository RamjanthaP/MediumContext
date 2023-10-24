"use client";

import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Link from "next/link";
import { MenuStoryblok, MenuLinkStoryblok } from "../../../component-types-sb";
import Image from "next/image";
import Button from "../Button/Button";
import Amaceit from "../Logo/Amaceit";


const Menu = ({ blok }: { blok: MenuStoryblok }) => {
  console.log(blok?.content.header_menu)
  return (
    <div
      className="relative bg-default border-b-2 border-gray-100"
      {...storyblokEditable(blok)}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <Amaceit />
            </Link>
          </div>
          {/* TODO: exchange the title from "tjänster" to "kontakta oss" */}
          {blok?.content.header_menu?.filter((nestedBlok: MenuLinkStoryblok) => nestedBlok.title !== "Tjänster-s")
            .map((nestedBlok: MenuLinkStoryblok) => (
              <div key={nestedBlok._uid}>
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
      </div>
    </div>
  );
};
export default Menu;
