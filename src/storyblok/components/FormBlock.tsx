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
    <div className=" mx-auto py-4 bg-discrete">
      <form {...storyblokEditable(blok)} onSubmit={handleSubmit(submitForm)} className="lg:w-1/3 mx-auto my-2">
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
        <div className="mt-4 flex justify-end">
        <Button variant="primary" type="submit">
          {isSubmitted ? 'Skickat' : 'Skicka'}
          </Button>
        </div>
        <p>{isSubmitted && 'Vi har tagit emot ditt meddelande'}</p>
      </form>
    </div>
  );
}