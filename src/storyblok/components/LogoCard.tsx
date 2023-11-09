import LogoCard, { LogoCardProps } from '@/components/LogoCard';
import { LogoCardStoryblok } from '@sb-types';
import { storyblokEditable } from '@storyblok/react';
import { getStoryblokCorsUrl } from '../utilities';

const LogoCardSb = ({ blok }: LogoCardStoryblok) => {
  const componentData = mapLogoCardDtoToData(blok);
  return (
    <div {...storyblokEditable(blok)}>
      <LogoCard {...componentData} />
    </div>
  );
};
export default LogoCardSb;

const mapLogoCardDtoToData = (blok: LogoCardStoryblok): LogoCardProps => {
  return {
    name: blok.name,
    svgUrl: getStoryblokCorsUrl(blok.svgLogo.filename),
    size: blok.size || undefined,
  };
};
