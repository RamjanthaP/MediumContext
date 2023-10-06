import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { GridStoryblok } from "../../../component-types-sb";

const Grid = ({ blok }:GridStoryblok) => {
  return (
    <div className="grid grid-cols-3"  { ...storyblokEditable(blok) } >
    {
      blok.columns.map((nestedBlok: any) => (
        <StoryblokComponent blok= { nestedBlok } key = { nestedBlok._uid } />
      ))
    }
    </div>
  );
};

export default Grid;