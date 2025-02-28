import { StartHero, StartHeroProps } from "@/components/StartHero/StartHero";

import { HeroStartStoryblok } from "@sb-types";
import { extractLinkDataFromFirstItem } from "@/utilities/dtoMappers";
import { storyblokEditable } from "@storyblok/react";

const HeroStartSb = ({ blok }: HeroStartStoryblok) => {
    const componentData = mapHeroDtoToData(blok);

    return (
        <div {...storyblokEditable(blok)}>
            <StartHero {...componentData} />
        </div>
    );
};
export default HeroStartSb;

function mapHeroDtoToData(blok: HeroStartStoryblok): Omit<StartHeroProps, 'onLogoInView'> {

    return {
        video: {
            source: blok.video?.filename,
            alt: blok.video?.alt || 'Videobakgrund'
        },
        texts: blok.animated_texts.map(item => item.Text),
        primaryButton: extractLinkDataFromFirstItem(blok.ctaPrimary),
        secondaryButton: extractLinkDataFromFirstItem(blok.ctaSecondary),
    };
}
