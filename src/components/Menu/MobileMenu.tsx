"use client";
import type { MenuLinkStoryblok } from "@sb-types";
import { MenuItem } from "./MenuItem";

export function MobileMenu(props: {
  menuItems: MenuLinkStoryblok[];
  specialItem: MenuLinkStoryblok;
}) {
  return (
    <div className="fixed flex flex-col my-6 items-center theme-block-default  md:hidden z-50 top-16 right-0 bottom-0 left-0 gap-5">
      {props.menuItems.map((item) => (
        <MenuItem key={item._uid} item={item} />
      ))}
      <MenuItem size="small" item={props.specialItem} />
    </div>
  );
}
