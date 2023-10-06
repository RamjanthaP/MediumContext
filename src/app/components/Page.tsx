import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { PageStoryblok } from "../../../component-types-sb";

const Page = ({ blok }:PageStoryblok) => (
  <main className="text-center mt-4" {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok:any) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;