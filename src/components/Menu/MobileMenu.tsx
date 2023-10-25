"use client";
import type { MenuLinkStoryblok } from "@sb-types";
import { MenuItem } from "./MenuItem";
import { AnimatePresence, motion } from "framer-motion";

export function MobileMenu(props: {
  menuItems: MenuLinkStoryblok[];
  specialItem: MenuLinkStoryblok;
}) {
  return (
    <div className="fixed flex flex-col my-6 items-center theme-block-default  md:hidden z-50 top-16 right-0 bottom-0 left-0 gap-5">
      {props.menuItems.map((item) => (
        <MenuItem key={item._uid} item={item} />
      ))}
      <AnimatePresence>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
        >
          <MenuItem size="small" item={props.specialItem} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
