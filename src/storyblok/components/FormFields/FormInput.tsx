import { FormInputsStoryblok } from '@sb-types';
import { StoryblokComponent, storyblokEditable } from '@storyblok/react';

import InputText from '@/components/Forms/InputText/InputText';
import Style from '@/components/Forms/InputText/input-text.module.css';

import {
  getValidatorValue,
  hasValidator,
  isEmailValidator,
} from './hasValidator';

function setValidators(blok: FormInputsStoryblok['blok']) {
  return {
    required: hasValidator(blok, 'Required'),
    pattern: isEmailValidator(blok),
    maxLength:
      hasValidator(blok, 'Maximum Length') &&
      getValidatorValue(blok, 'Maximum Length', 'maxLength'),
    minLength:
      hasValidator(blok, 'Minimum Length') &&
      getValidatorValue(blok, 'Minimum Length', 'minLength'),
  };
}

function errorAdapter(fieldErrors?: any[], fieldValidators: any) {
  if (!fieldErrors) return null;

  switch (fieldErrors.type) {
    case 'required':
      return fieldValidators.find((validator: any) => validator.required)
        ?.errorMessage;
    case 'maxLength':
      return fieldValidators.find((validator: any) => validator.maxLength)
        ?.errorMessage;
  }
}

export default function FormInputs({
  blok,
  register,
  errors,
}: FormInputsStoryblok) {
  const fieldValidators = blok.Validators;
  const fieldErrors = errors[blok.Name];
  console.log(`------ ${blok.Name} -------`);
  console.log('validators: ', fieldValidators);
  console.log('errors: ', fieldErrors);
  console.log('adapter: ', errorAdapter(fieldErrors, fieldValidators));
  console.log(`------  -------`);

  return (
    <div {...storyblokEditable(blok)}>
      <InputText
        id={blok._uid}
        type={blok.Type}
        placeholder={blok.Placeholder}
        error={errors[blok.Name]}
        {...register(blok.Name, setValidators(blok))}
      >
        {blok.Label}{' '}
        {!hasValidator(blok, 'Required') && (
          <span className='font-normal text-primary-100 text-opacity-50'>
            (Valfritt)
          </span>
        )}
      </InputText>
      {/* <pre className='p-4 my-4 bg-default rounded text-xs'>
        {JSON.stringify(blok.Validators, null, 2)}
      </pre> */}
      {/* <pre className='p-4 my-4 bg-default rounded text-xs'>
        {JSON.stringify(, null, 2)}
      </pre> */}

      <div className={Style.errorMessage}>
        {blok.Validators.map((nestedBlok: FormInputsStoryblok) => (
          <StoryblokComponent
            blok={nestedBlok}
            key={nestedBlok._uid}
            errors={errors}
            inputName={blok.Name}
          />
        ))}
      </div>
    </div>
  );
}
