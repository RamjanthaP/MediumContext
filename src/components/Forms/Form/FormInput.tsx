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
        {...register(blok.Name, {
          required: blok.Validators.some(
            (validator: ValidatorType) => validator.component === 'Required'
          ),
          pattern:
            blok.Type === 'email' &&
            /^[A-Za-z0-9,_%+-]+@[A-Za-z0-9,-]+\.[a-z{2,4}$]/,
          maxLength:
            blok.Type === 'textArea' &&
            blok.Validators.find(
              (findMax: { maxLength: Number }) => findMax.maxLength
            ).maxLength,
          minLength:
            blok.Type === 'textArea' &&
            blok.Validators.find(
              (findMin: { minLength: Number }) => findMin.minLength
            ).minLength,
        })}
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
