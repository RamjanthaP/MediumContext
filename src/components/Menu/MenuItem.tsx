"use client";
import { StoryblokComponent } from "@storyblok/react";
import Button, { ButtonSizes } from "../Button/Button";
import { specialItemTitle } from "./AppHeader";
import { MenuLinkStoryblok } from "@sb-types";
import Link from "next/link";

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
  if (item && item.title === specialItemTitle) {
    return (
      // TODO Replace with a link to the contact page. No button needed.
      <Link href={item.link.cached_url}>
        <Button size={size} variant="primary">
          {item.title}
        </Button>
      </Link>
    );
  }
  return <StoryblokComponent blok={item} />;
};
