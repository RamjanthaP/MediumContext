import {
  EmailStoryblok,
  FormInputsStoryblok,
  MaximumLengthStoryblok,
  MinimumLengthStoryblok,
  RequiredStoryblok,
} from '@sb-types';
import { StoryblokComponent, storyblokEditable } from '@storyblok/react';

import InputText from '../InputText/InputText';
import Style from '../InputText/input-text.module.css';

type ValidatorType =
  | EmailStoryblok
  | MaximumLengthStoryblok
  | MinimumLengthStoryblok
  | RequiredStoryblok;

function isEmailValidator(blok: FormInputsStoryblok['blok']) {
  const emailRegex = /^[A-Za-z0-9,_%+-]+@[A-Za-z0-9,-]+\.[a-z{2,4}$]/;
  return blok.Validators.some(
    (validator: ValidatorType) => validator.component === 'Email'
  )
    ? emailRegex
    : null;
}

function hasValidator(blok: FormInputsStoryblok['blok'], validator: string) {
  return !!blok.Validators.some(
    (blok: ValidatorType) => blok.component === validator
  );
}

function getValidatorValue(
  blok: FormInputsStoryblok['blok'],
  validator: string,
  valueKey: string
) {
  return blok.Validators.find(
    (blok: ValidatorType) => blok.component === validator
  )[valueKey];
}

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
export default function FormInputs({
  blok,
  register,
  errors,
}: FormInputsStoryblok) {
  return (
    <div {...storyblokEditable(blok)}>
      <InputText
        id={blok._uid}
        type={blok.Type}
        placeholder={blok.Placeholder}
        error={errors[blok.Name]}
        {...register(blok.Name, setValidators(blok))}
      >
        {blok.Label}
      </InputText>
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
