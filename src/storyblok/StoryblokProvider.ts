/** 1. Tag it as a client component */
'use client';

import Placholder from '@/storyblok/fallback-component/Fallback';
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

import HeaderMenu from '@/components/Menu/HeaderMenu';
import MenuLink from '@/components/Menu/MenuLink';

/** Import your components */
import TemplateDefault from '@/storyblok/templates/Default';
import TemplateService from '@/storyblok/templates/Service';

import Feature from './components/Feature';
import Hero from './components/Hero';
import JumbotronSb from './components/Jumbotron';
import LogoCardSb from './components/LogoCard';
import ServiceItemSb from './components/ServiceItems';
import GridSb from './components/Grid';

/** 1. Tag it as a client component */

const components = {
  template_default: TemplateDefault,
  template_service: TemplateService,
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
  customFallbackComponent: Placholder,
  enableFallbackComponent: process.env.NODE_ENV === 'development',
});

export default function StoryblokProvider({ children }: any) {
  return children;
}
