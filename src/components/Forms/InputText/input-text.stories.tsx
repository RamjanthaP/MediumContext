import { useState } from 'react';

import { action } from '@storybook/addon-actions';
import { StoryFn } from '@storybook/react';

import InputText, { InputTextProps } from './InputText';

export default {
  title: 'Components/Form Elements/InputText',
  component: InputText,
  tags: ['autodocs'],
  decorators: [
    (Story: StoryFn) => (
      <form className='bg-discrete p-8'>
        <h2 className='text-xl font-bold mb-4'>Story for form element</h2>
        <Story />
      </form>
    ),
  ],
};

export const Default = () => {
  const [formValue, setFormValue] = useState('');
  return (
    <InputText
      id='story-id'
      value={formValue}
      onChange={(newValue) => setFormValue(newValue)}
    >
      Label for field
    </InputText>
  );
};

export const HasError = () => {
  const [formValue, setFormValue] = useState('bad-email.at.domain.123');

  const validateEmail = (email: string) => {
    return !email.includes('@') ? 'Email must contain @' : '';
  };

  const [error, setError] = useState(validateEmail(formValue));
  const onChange = (newValue: string) => {
    setFormValue(newValue);
    setError(validateEmail(newValue));
  };

  return (
    <InputText
      id='story-id'
      error={error}
      value={formValue}
      onChange={onChange}
    >
      Lazy email test
    </InputText>
  );
};

export const IsDisabled = () => (
  <InputText
    id='story-id'
    value={"Value you can't change"}
    onChange={action('onChange')}
    disabled
  >
    Disabled input
  </InputText>
);
