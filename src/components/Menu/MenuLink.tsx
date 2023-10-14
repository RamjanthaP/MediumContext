import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import Link from "next/link";
import { MenuLinkStoryblok } from "../../../component-types-sb";
const MenuLink = ({ blok }: { blok: MenuLinkStoryblok }) => {
  return (
    <>
      <Link href={"/" + blok?.link?.cached_url} {...storyblokEditable(blok)}>
        <span className="text-base font-medium text-gray-500 hover:text-gray-900 ">
          {blok.title}
        </span>
      </Link>
      {typeof blok?.subItems !== "string" &&
        blok.subItems?.map((child: MenuLinkStoryblok) => (
          <StoryblokComponent
            key={child._uid}
            blok={{ ...child, title: child.title + " (child)" }}
          />
        ))}
    </>
  );
};
export default MenuLink;
