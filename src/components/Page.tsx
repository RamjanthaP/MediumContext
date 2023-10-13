import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { PageStoryblok } from "../../component-types-sb";
import SectionWrapper from "./Wrapper/SectionWrapper";

const Page = ({ blok }: PageStoryblok) => {
  return (
    <main className="text-center mt-4" {...storyblokEditable(blok)}>
      {blok.body?.map((nestedBlok: { _uid: string }) => (
        <SectionWrapper color="primary" title="Title">
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          <h1>test</h1>
        </SectionWrapper>
      ))}
    </main>
  );
};
export default Page;
