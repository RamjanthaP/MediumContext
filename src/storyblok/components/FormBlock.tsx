import Button from "@/components/Button/Button";
import { FormInputsStoryblok, FormStoryblok } from "@sb-types";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { useForm } from "react-hook-form";
export default function Form({ blok }: FormStoryblok) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  function submitForm(data :any) {
    console.log(data, blok.Endpoint);
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
      <Button variant="primary" type="submit"> Sänd </Button>
      </form>
    </div>
  );
}