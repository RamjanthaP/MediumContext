import Button from "@/components/Button/Button";
import { FormInputsStoryblok, FormStoryblok } from "@sb-types";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
export default function Form({ blok }: FormStoryblok) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
    watch
  } = useForm();
  const invisibleRadioButton = watch("invisibleRadioButton", false);

  function submitForm(data: any) {
    if (invisibleRadioButton) {
      console.log("not today satan");
      return; 
    }
    console.log(data, blok.Endpoint);
    reset();
    setIsSubmitted(true);
  }
  return (
    <div className="container mx-auto w-1/2">
      <form {...storyblokEditable(blok)} onSubmit={handleSubmit(submitForm)}>
        {blok.Inputs.map((nestedBlok: FormInputsStoryblok) => (
          <StoryblokComponent
            blok={nestedBlok}
            key={nestedBlok._uid}
            register={register}
            errors={errors}
          />
        ))}
        <input
          type="radio"
          {...register("invisibleRadioButton")}
          value="checked"
          className="inline-grid border-transparent"
        />
        <div className="my-2">
        <Button variant="primary" type="submit">
          {isSubmitted ? 'Skickat' : 'Sänd'}
          </Button>
        </div>
        <p>{isSubmitted && 'Vi har tagit emot ditt meddelande'}</p>
      </form>
    </div>
  );
}