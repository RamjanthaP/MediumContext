import { RequiredStoryblok } from "@sb-types";
import { storyblokEditable } from "@storyblok/react";

export default function Required({ blok, errors, inputName }: RequiredStoryblok) {
  return (
    <div {...storyblokEditable(blok)}>
      {
        errors.email?.type === "required" &&
        inputName === "email" &&
        blok.errorMessage
      }
      {
        errors.text?.type === "required" &&
        inputName === "text" &&
        blok.errorMessage
      }
    </div>
  );
}