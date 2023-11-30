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
import Hero from './components/Hero';
import JumbotronSb from './components/Jumbotron';
import LogoCardSb from './components/LogoCard';
import ServiceItemSb from './components/ServiceItems';

/** 1. Tag it as a client component */

/** 1. Tag it as a client component */
const components = {
  template_default: TemplateDefault,
  template_service: TemplateService,
  body: BodyBlockSb,
  feature: Feature,
  grid: GridSb,
  hero: Hero,
  header_menu: HeaderMenu,
  menu_link: MenuLink,
  logo_card: LogoCardSb,
  jumbotron: JumbotronSb,
  service_items: ServiceItemSb,
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
