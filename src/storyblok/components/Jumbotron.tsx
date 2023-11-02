import { Jumbotron, JumbotronProps } from "@/components/Jumbotron";
import { extractLinkDataFromFirstItem } from "@/utilities/dtoMappers";
import { JumbotronStoryblok } from "@sb-types";
import { storyblokEditable } from "@storyblok/react";

const JumbotronSb = ({ blok }: JumbotronStoryblok) => {
  const componentData = mapJumbotronDtoToData(blok);
  return (
    <div {...storyblokEditable(blok)}>
      <Jumbotron {...componentData} />
    </div>
  );
};
export default JumbotronSb;

function mapJumbotronDtoToData(blok: JumbotronStoryblok): JumbotronProps {
  return {
    title: blok.title,
    children: blok.content,
    primaryButton: extractLinkDataFromFirstItem(blok.ctaPrimary),
    secondaryButton: extractLinkDataFromFirstItem(blok.ctaSecondary),
    image: {
      url: blok.image.filename,
      alt: blok.image.alt || "Bakgrund",
    },
    layout: !blok.layout ? "content-right" : blok.layout, // TODO: Fix when types are accurate
  };
}
