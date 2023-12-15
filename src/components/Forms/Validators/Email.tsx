import { EmailStoryblok } from "@sb-types";
import { storyblokEditable } from "@storyblok/react";
export default function Email({ blok, errors }: EmailStoryblok) {
  return (
    <div {...storyblokEditable(blok)}>
      {errors.email?.type === "pattern" && blok.errorMessage}
    </div>
  )
}