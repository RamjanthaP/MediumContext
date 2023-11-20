import { storyblokEditable } from "@storyblok/react/rsc";
import { TeaserStoryblok } from "../../component-types-sb";
import Placholder from "../storyblok/fallback-component/Fallback";

const Teaser = ({ blok }: TeaserStoryblok) => {
  return (
    <div {...storyblokEditable(blok)}>
      <Placholder blok={blok} />
    </div>
  );
};

export default Teaser;
