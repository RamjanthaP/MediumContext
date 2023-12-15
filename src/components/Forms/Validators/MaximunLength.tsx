import { MaximumLengthStoryblok } from "@sb-types";
import { storyblokEditable } from "@storyblok/react";
export default function MaxLength({ blok, errors } :MaximumLengthStoryblok) {
  return (
    <div {...storyblokEditable(blok)}>
      {errors.phoneNumber?.type === "maxLength" && blok.errorMessage}
    </div>
  );
}