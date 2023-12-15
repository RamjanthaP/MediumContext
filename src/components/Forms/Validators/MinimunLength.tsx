import { storyblokEditable } from "@storyblok/react";
import { MinimumLengthStoryblok } from "@sb-types";
export default function MinLength({ blok, errors }: MinimumLengthStoryblok) {
  return (
    <div {...storyblokEditable(blok)}>
      {errors.phoneNumber?.type === "minLength" && blok.errorMessage}
    </div>
  );
}