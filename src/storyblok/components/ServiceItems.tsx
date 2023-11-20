import ServiceCard, {
  ServiceCardProps,
} from '@/components/ServiceItem/ServiceItem';
import { ServiceItemsStoryblok } from '@sb-types';
import { storyblokEditable } from '@storyblok/react';
import { renderRichText } from '@storyblok/react';

const ServiceItemSb = ({ blok }: ServiceItemsStoryblok) => {
  const componentData = mapServiceItemDtoToData(blok);
  return (
    <div {...storyblokEditable(blok)}>
      <ServiceCard {...componentData} />
    </div>
  );
};
export default ServiceItemSb;

function mapServiceItemDtoToData(
  blok: ServiceItemsStoryblok
): ServiceCardProps {
  return {
    title: blok.title || 'Title missing', 
    description: blok.description
      ? renderRichText(blok.description)
      : 'Description missing',
    image: blok.Image
      ? {
          url: 'https:' + blok.Image || 'https://via.placeholder.com/150',
          alt: 'Bakgrund',
        }
      : undefined,
    animation: blok.animation || 'spin1',
    button: {
      text: blok.button_title || 'Button missing',
      url: blok.button_link?.cached_url || '#',
    },
  };
}
