/** 1. Tag it as a client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** Import your components */
import Page from "@/components/Page";
import Grid from "@/components/Grid";
import Teaser from "@/components/Teaser";
import Feature from "./components/Feature";
import HeaderMenu from "@/components/Menu/HeaderMenu";
import MenuLink from "@/components/Menu/MenuLink";
import        Hero from "./components/Hero";
import LogoCardSb from "./components/LogoCard";
import Placholder from "@/storyblok/fallback-component/Fallback";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  hero: Hero,
  page: Page,
  header_menu: HeaderMenu,
  menu_link: MenuLink,
  logo_card: LogoCardSb,
};
/** 2. Initialize it as usual */
storyblokInit({
  accessToken: "isvrOVvrEDwbKVLqsr0E7wtt",
  use: [apiPlugin],
  components,
  customFallbackComponent: Placholder,
  enableFallbackComponent: process.env.NODE_ENV === "development",
});

export default function StoryblokProvider({ children }: any) {
  return children;
}
