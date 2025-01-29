import Hero, { HeroProps } from "@/components/Hero/Hero";
import { extractLinkDataFromFirstItem } from "@/utilities/dtoMappers";
import { HeroStoryblok } from "@sb-types";
import { storyblokEditable } from "@storyblok/react";

const HeroSb = ({ blok }: HeroStoryblok) => {
  const componentData = mapHeroDtoToData(blok);
  return (
    <div {...storyblokEditable(blok)}>
      <Hero {...componentData} />
    </div>
  );
};
export default HeroSb;

function mapHeroDtoToData(blok: HeroStoryblok): HeroProps {
  return {
    title: blok.headLine || "Title missing",
    image: blok.image ? {
      url: blok.image.filename || '',
      alt: blok.image.alt || 'Background',
      className: "",
    } : null, 
    bodyText: blok?.bodyText,
    primaryButton: extractLinkDataFromFirstItem(blok.ctaPrimary),
    secondaryButton: extractLinkDataFromFirstItem(blok.ctaSecondary),
  };
}
