import { useState } from 'react';

import { FormInputsStoryblok, FormStoryblok } from '@sb-types';
import { StoryblokComponent, storyblokEditable } from '@storyblok/react';
import { useForm } from 'react-hook-form';

import Button from '@/components/Button/Button';

export default function Form({ blok }: FormStoryblok) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
    getValues,
    watch,
  } = useForm();
  const invisibleRadioButton = watch('invisibleRadioButton', false);

  function submitForm(data: any) {
    if (!invisibleRadioButton) {
      // Send data
      console.log('Sending data to ' + blok.Endpoint, data);
    } else {
      // Honeypot it!
      console.log('Sending to trash. But make bot think it went through. :D');
    }
    reset();
    setIsSubmitted(true);
  }

  return (
    <div className='mx-auto py-4 bg-discrete'>
      <form
        {...storyblokEditable(blok)}
        onSubmit={handleSubmit(submitForm)}
        className='mx-4 md:mx-8 lg:w-1/3 lg:mx-auto  my-2'
      >
        {blok.Inputs.map((nestedBlok: FormInputsStoryblok) => (
          <StoryblokComponent
            blok={nestedBlok}
            key={nestedBlok._uid}
            register={register}
            errors={errors}
          />
        ))}

        <input
          type='radio'
          {...register('invisibleRadioButton')}
          value='checked'
          className='inline-grid border-transparent'
        />
        <div className='mt-4 flex justify-end'>
          <Button variant='primary' type='submit'>
            {isSubmitted ? 'Skickat' : 'Skicka'}
          </Button>
        </div>
        <p>{isSubmitted && 'Vi har tagit emot ditt meddelande'}</p>
      </form>
    </div>
  );
}
