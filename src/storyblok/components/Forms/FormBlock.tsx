import { useState } from 'react';

import { useScreenSize } from '@/hooks/useScreenSize';
import { SparklesIcon } from '@heroicons/react/20/solid';
import { ArrowPathIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { FormInputsStoryblok, FormStoryblok } from '@sb-types';
import { StoryblokComponent, storyblokEditable } from '@storyblok/react';
import { useForm } from 'react-hook-form';

import Button from '@/components/Button/Button';
import { Container } from '@/components/Layout/Container';

export default function Form({ blok }: FormStoryblok) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const invisibleRadioButton = watch('invisibleRadioButton', false);

  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState<false | string>(false);
  const { isDesktop } = useScreenSize();

  async function submitForm(data: any) {
    // Exit early and Honeypot it!
    // Sending to trash. But make bot think it went through.  ¯\_(ツ)_/¯
    if (invisibleRadioButton) {
      reset();
      setIsSubmitted(true);
      return false;
    }

    const formData = {
      email: data.Email,
      subject: 'Mail från ' + data.Name,
      Body: data.Text,
    };

    setIsLoading(true);
    const result = await fetch(blok.Endpoint, {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': process.env.APP_URL,
      },
    }).catch((_error) => {
      setFormError('Ett problem uppstod. Ladda om sidan och försök igen.');
      setIsLoading(false);
      return;
    });

    if (result?.status !== 200) {
      setFormError('Ett problem uppstod. Ladda om sidan och försök igen.');
      setIsLoading(false);
      return;
    }

    setIsLoading(false);
    reset();
    setIsSubmitted(true);
  }
  // TODO: Make this configurable from CMS
  const confirmation = {
    title: 'Tack för ditt meddelande!',
    message: 'Vi återkommer så fort vi kan.',
  };

  const resetAndShowForm = () => {
    reset();
    setIsSubmitted(false);
  };

  return (
    <div className='py-4 px-4 md:px-8 bg-discrete h-fit'>
      {!isSubmitted && (
        <form
          id='applicationForm'
          {...storyblokEditable(blok)}
          onSubmit={handleSubmit(submitForm)}
          className='w-full md:max-w-[600px] md:mx-auto gap-4 flex flex-col my-2'
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
            tabIndex={-1}
            type='radio'
            {...register('invisibleRadioButton')}
            value='checked'
            className='inline-grid border-transparent appearance-none'
          />
          {formError && (
            <p className='text-error p-4 rounded-sm bg-error bg-opacity-10'>
              {formError}
            </p>
          )}
          <div className='mt-4 flex justify-end'>
            <Button
              variant='primary'
              type='submit'
              size={isDesktop ? 'medium' : 'small'}
            >
              {!isLoading && <EnvelopeIcon className='h-5 w-5 mr-2' />}
              {isLoading && (
                <SparklesIcon className='h-5 w-5 mr-2 animate-spin' />
              )}
              {isLoading ? 'Skickar...' : 'Skicka'}
            </Button>
          </div>
        </form>
      )}
      {isSubmitted && (
        <Container className='text-center py-8 min-h-[500px] flex flex-col justify-center items-center gap-4'>
          <h2 className='text-xxl font-bold'>{confirmation.title}</h2>
          <p>{confirmation.message}</p>
          <Button variant='default' transparent onClick={resetAndShowForm}>
            <ArrowPathIcon className='h-5 w-5 mr-2' />
            Skicka ett till meddelande?
          </Button>
        </Container>
      )}
    </div>
  );
}
