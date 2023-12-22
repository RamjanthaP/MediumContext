/** 1. Tag it as a client component */
import { apiKeyPublic } from '@/config';
import FallbackComponent from '@/storyblok/fallback-component/Fallback';

/** Import your components */
import TemplateDefault from '@/storyblok/templates/Default';
import TemplateService from '@/storyblok/templates/Service';
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

import HeaderMenu from '@/components/Menu/HeaderMenu';
import MenuLink from '@/components/Menu/MenuLink';

import FormBlock from './components//Forms/FormBlock';
import BodyBlockSb from './components/BodyBlock';
import CarouselSb from './components/Carousel';
import Feature from './components/Feature';
import FormField from './components/Forms/FormField';
import GridSb from './components/Grid';
import HeroSb from './components/Hero';
import JumbotronSb from './components/Jumbotron';
import LogoCardSb from './components/LogoCard';
import MapSb from './components/MapSb';
import OfficeCard from './components/OfficeCard';
import ReUseableSection from './components/ReUsableSection';
import ServiceItemSb from './components/ServiceItems';

/** 1. Tag it as a client component */

const components = {
  template_default: TemplateDefault,
  template_service: TemplateService,
  body: BodyBlockSb,
  feature: Feature,
  grid: GridSb,
  map_block: MapSb,
  hero: HeroSb,
  header_menu: HeaderMenu,
  menu_link: MenuLink,
  logo_card: LogoCardSb,
  jumbotron: JumbotronSb,
  service_items: ServiceItemSb,
  Form: FormBlock,
  'Form Inputs': FormField,
  offices: OfficeCard,
  Carousel: CarouselSb,
  reUsableSection: ReUseableSection,
};

// Some stort of reminder
if (
  typeof window === 'undefined' &&
  process.env.STORYBLOK_API_TOKEN === undefined
) {
  throw new Error('STORYBLOK_API_TOKEN is not defined');
}

/** 2. Initialize it as usual */
storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN || apiKeyPublic, // This is a workaround in order
  use: [apiPlugin],
  components,
  customFallbackComponent: FallbackComponent,
  enableFallbackComponent: process.env.NODE_ENV === 'development',
});

export default function StoryblokProvider({ children }: any) {
  return children;
}
