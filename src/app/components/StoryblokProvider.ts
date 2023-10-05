/** 1. Tag it as a client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** Import your components */
import Page from "./Page";
import Teaser from "./Teaser";
import Feature from "./Feature";
import Grid from "./Grid";

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
});

export default function StoryblokProvider({ children } :any) {
  return children;
}
