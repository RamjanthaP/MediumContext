import {
  EmailStoryblok,
  FormInputsStoryblok,
  MaximumLengthStoryblok,
  MinimumLengthStoryblok,
  RequiredStoryblok,
} from '@sb-types';

import { colorConsole } from '@/utilities/dev-utils';

export type ValidatorType =
  | EmailStoryblok
  | MaximumLengthStoryblok
  | MinimumLengthStoryblok
  | RequiredStoryblok;

export function isEmailValidator(blok: FormInputsStoryblok['blok']) {
  const emailRegex = /^[A-Za-z0-9,_%+-]+@[A-Za-z0-9,-]+\.[a-z{2,4}$]/;
  return blok.Validators.some(
    (validator: ValidatorType) => validator.component === 'Email'
  )
    ? emailRegex
    : null;
}

export function hasValidator(
  blok: FormInputsStoryblok['blok'],
  validator: 'Email' | 'Maximum Length' | 'Minimum Length' | 'Required'
) {
  return !!blok.Validators.some(
    (blok: ValidatorType) => blok.component === validator
  );
}

export function getValidatorValue(
  blok: FormInputsStoryblok['blok'],
  validator: string,
  valueKey: string
) {
  return blok.Validators.find(
    (blok: ValidatorType) => blok.component === validator
  )[valueKey];
}
