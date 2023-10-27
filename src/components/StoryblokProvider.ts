/** 1. Tag it as a client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import React from "react";
/** Import your components */
import Page from "./Page";
import Grid from "./Grid";
import Teaser from "./Teaser";
import Feature from "./Feature";
import HeaderMenu from "./Menu/HeaderMenu";
import MenuLink from "./Menu/MenuLink";
import Hero from "./Hero/Hero";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  hero: Hero,
  page: Page,
  header_menu: HeaderMenu,
  menu_link: MenuLink,
};
/** 2. Initialize it as usual */
storyblokInit({
  accessToken: "isvrOVvrEDwbKVLqsr0E7wtt",
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }: any) {
  return children;
}
