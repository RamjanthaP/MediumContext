import { FormInputsStoryblok } from "@sb-types";
import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import InputText from "../InputText/InputText";

export default function FormInputs({ blok, register, errors }: FormInputsStoryblok) {
  return (
    <div {...storyblokEditable(blok)}>
      <label>{blok.Label}</label>
      <InputText
        id={blok._uid}
        type={blok.Type}
        placeholder={blok.Placeholder}
        error={errors[blok.Name]}
        {...register(blok.Name, {
          required: blok.Type === "email" ? false : true,
          pattern:
            (blok.Type === "email" &&
              /^[a-z0-9,_%+-]+@[a-z0-9,-]+\.[a-z{2,4}$]/),
          maxLength: blok.Type === "textArea" && blok.Validators.find((findMax: { maxLength: Number; }) => findMax.maxLength).maxLength,
          minLength: blok.Type === "textArea" && blok.Validators.find((findMin: { minLength: Number; }) => findMin.minLength).minLength,
        })}
      />
      {blok.Validators.map((nestedBlok: FormInputsStoryblok) => (
        <StoryblokComponent
          blok={nestedBlok}
          key={nestedBlok._uid}
          errors={errors}
          inputName={blok.Name}
        />
      ))}
    </div>
  
  );
}