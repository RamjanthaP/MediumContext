/** 1. Tag it as a client component */
'use client';

import FallbackComponent from '@/storyblok/fallback-component/Fallback';

/** Import your components */
import TemplateDefault from '@/storyblok/templates/Default';
import TemplateService from '@/storyblok/templates/Service';
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

import HeaderMenu from '@/components/Menu/HeaderMenu';
import MenuLink from '@/components/Menu/MenuLink';

import BodyBlockSb from './components/BodyBlock';
import Feature from './components/Feature';
import GridSb from './components/Grid';
import HeroSb from './components/Hero';
import JumbotronSb from './components/Jumbotron';
import LogoCardSb from './components/LogoCard';
import ServiceItemSb from './components/ServiceItems';
import MapSb from './components/MapSb';
import FormBlock from './components/FormBlock';
import Email from '@/components/Forms/Validators/Email';
import Required from '@/components/Forms/Validators/Required';
import MaxLength from '@/components/Forms/Validators/MaximunLength';
import MinLength from '@/components/Forms/Validators/MinimunLength';
import FormInputs from '@/components/Forms/Form/FormInput';

/** 1. Tag it as a client component */

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
  "Form": FormBlock,
  "Form Inputs": FormInputs,
  "Email": Email,
  "Required": Required,
  "Maximum Length": MaxLength,
  "Minimum Length": MinLength,
};
/** 2. Initialize it as usual */
storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components,
  customFallbackComponent: FallbackComponent,
  enableFallbackComponent: process.env.NODE_ENV === 'development',
});

export default function StoryblokProvider({ children }: any) {
  return children;
}
