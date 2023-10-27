import { storyblokEditable } from "@storyblok/react/rsc";
import { FeatureStoryblok } from "../../component-types-sb";
import Placholder from "./DevUtils/Placeholder";

const Feature = ({ blok }: FeatureStoryblok) => (
  <div {...storyblokEditable(blok)}>
    <Placholder name="Feature" data={blok} />
  </div>
);

export default Feature;
