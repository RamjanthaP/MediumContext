import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { PageStoryblok } from "../../component-types-sb";

// Used as entry point for all pages in Storyblok
const Page = ({ blok }: PageStoryblok) => {
  return (
    <main className="mt-4" {...storyblokEditable(blok)}>
      {blok.body?.map((nestedBlok: { _uid: string }) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};
export default Page;
