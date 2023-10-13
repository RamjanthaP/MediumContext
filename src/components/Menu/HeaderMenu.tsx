import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import {
  ConfigStoryblok,
  MenuLinkStoryblok,
} from "../../../component-types-sb";
const HeaderMenu = ({ blok }: { blok: ConfigStoryblok }) => (
  <div
    className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-10"
    {...storyblokEditable({ blok })}
  >
    {blok.links.map((nestedBlok: MenuLinkStoryblok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </div>
);
export default HeaderMenu;
