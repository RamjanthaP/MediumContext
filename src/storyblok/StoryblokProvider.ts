/** 1. Tag it as a client component */
'use client';

import Placholder from '@/storyblok/fallback-component/Fallback';
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

import Grid from '@/components/Grid';
import HeaderMenu from '@/components/Menu/HeaderMenu';
import MenuLink from '@/components/Menu/MenuLink';

/** Import your components */
import Page from '@/components/Page';
import Teaser from '@/components/Teaser';

import Feature from './components/Feature';
import Hero from './components/Hero';
import JumbotronSb from './components/Jumbotron';
import LogoCardSb from './components/LogoCard';
import ServiceItemSb from './components/ServiceItems';

/** 1. Tag it as a client component */

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  hero: Hero,
  page: Page,
  header_menu: HeaderMenu,
  menu_link: MenuLink,
  logo_card: LogoCardSb,
  jumbotron: JumbotronSb,
  service_items: ServiceItemSb,
};
/** 2. Initialize it as usual */
storyblokInit({
  accessToken: 'isvrOVvrEDwbKVLqsr0E7wtt',
  use: [apiPlugin],
  components,
  customFallbackComponent: Placholder,
  enableFallbackComponent: process.env.NODE_ENV === 'development',
});

export default function StoryblokProvider({ children }: any) {
  return children;
}
