import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { PageStoryblok } from "../../component-types-sb";

// TODO: Figure out if we are using this.
const Page = ({ blok }: PageStoryblok) => {
  return (
    <main className="text-center mt-4" {...storyblokEditable(blok)}>
      {blok.body?.map((nestedBlok: { _uid: string }) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
};
export default Page;
