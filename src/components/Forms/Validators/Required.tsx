import { RequiredStoryblok } from "@sb-types";
import { storyblokEditable } from "@storyblok/react";

export default function Required({ blok, errors, inputName }: RequiredStoryblok) {
  return (
    <div {...storyblokEditable(blok)}>
      {
        errors.Name?.type === "required" &&
        inputName === "Name" &&
        blok.errorMessage
      }
      {
        errors.Email?.type === "pattern" &&
        inputName === "Email" &&
        blok.errorMessage
      }
      {
        errors.Text?.type === "required" &&
        inputName === "Text" &&
        blok.errorMessage
      }
    </div>
  );
}