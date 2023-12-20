import { FormInputsStoryblok } from '@sb-types';
import { storyblokEditable } from '@storyblok/react';

import InputText from '@/components/Forms/InputText/InputText';
import Textarea from '@/components/Forms/Textarea/Textarea';

import {
  ValidatorType,
  getValidatorValue,
  hasValidator,
  isEmailValidator,
} from './hasValidator';

export default function FormInputs({
  blok,
  register,
  errors,
}: FormInputsStoryblok) {
  const fieldValidators = blok.Validators;
  const fieldErrors = { ...errors[blok.Name] };
  const fieldData = {
    id: blok._uid,
    placeholder: blok.Placeholder,
    error: errorAdapter(fieldErrors, fieldValidators),
  };
  switch (blok.Type) {
    case 'email':
    case 'text':
      return (
        <div {...storyblokEditable(blok)}>
          <InputText
            type={blok.Type}
            {...fieldData}
            {...register(blok.Name, setValidators(blok))}
          >
            {blok.Label}{' '}
            {!hasValidator(blok, 'Required') && <NotMandatoryLabel />}
          </InputText>
        </div>
      );
    case 'textArea':
      return (
        <div {...storyblokEditable(blok)}>
          <Textarea
            {...fieldData}
            {...register(blok.Name, setValidators(blok))}
          >
            {blok.Label}{' '}
            {!hasValidator(blok, 'Required') && <NotMandatoryLabel />}
          </Textarea>
        </div>
      );
    default:
      return 'Unknown input type ' + blok.Type;
  }
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

function errorAdapter(
  fieldErrors?: { type: 'required' | 'maxLength' | 'minLength' | 'pattern' },
  fieldValidators?: ValidatorType[]
) {
  if (!fieldErrors) return null;
  if (!fieldValidators) return null;

  // These are sorted in priority and will return the first match
  switch (fieldErrors.type) {
    case 'required':
      return fieldValidators.find(
        (validator: any) => validator.component === 'Required'
      )?.errorMessage;
    case 'pattern':
      return fieldValidators.find(
        (validator: any) => validator.component === 'Email'
      )?.errorMessage;
    case 'maxLength':
      return fieldValidators.find(
        (validator: any) => validator.component === 'Maximum Length'
      )?.errorMessage;
    case 'minLength':
      return fieldValidators.find(
        (validator: any) => validator.component === 'Minimum Length'
      )?.errorMessage;
    default:
      return null;
  }
}

const NotMandatoryLabel = () => (
  <span className='font-normal opacity-50'>(Valfritt)</span>
);
