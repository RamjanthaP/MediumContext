"use client";
import { StoryblokComponent } from "@storyblok/react";
import Button, { ButtonSizes } from "../Button/Button";
import { specialItemTitle } from "./AppHeader";
import { MenuLinkStoryblok } from "@sb-types";

export const MenuItem = ({
  item,
  size = "medium",
}: {
  item: MenuLinkStoryblok;
  size?: ButtonSizes;
}) => {
  {
    /* TODO: exchange the title from "tjänster" to "kontakta oss" */
  }
  if (item.title === specialItemTitle) {
    return (
      <Button size={size} variant="green">
        {item.title}
      </Button>
    );
  }
  return <StoryblokComponent blok={item} />;
};
