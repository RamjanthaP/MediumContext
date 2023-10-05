/** 1. Tag it as a client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** Import your components */
import Page from './Page'
import Grid from "./Grid";
import Teaser from "./Teaser";
import Feature from "./Feature";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
};
/** 2. Initialize it as usual */
storyblokInit({
  accessToken: "your_preview_token",
  use: [apiPlugin],
  components
});

export default function StoryblokProvider({ children } :any) {
  return children;
}
