import StoryblokStory from "@storyblok/react/story";
import { getStoryblokPage } from "@/services/getStoryBlokPage";
import LogoCard from "../components/LogoCard";

// TODO: Remove folder when done with components
export default async function ServiceOverview() {
  return (
    <div>
      <h1 className="text-3xl font-medium">PoC: Logo Cards</h1>
      <div className="transition-colors bg-gray-200 dark:bg-gray-900 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-8 gap-4">
        <LogoCard svgAlt="volkswagen" svgUrl="/logos/volkswagen.svg" />
        <LogoCard svgAlt="Siemens" svgUrl="/logos/siemens.svg" />
        <LogoCard
          svgAlt="Gotlandshem"
          svgUrl="/logos/gotlandshem.svg"
          size="medium"
        />
        <LogoCard
          svgAlt="Swedish Match"
          svgUrl="/logos/swedish-match.svg"
          size="medium"
        />
      </div>
    </div>
  );
}
