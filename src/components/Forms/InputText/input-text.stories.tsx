import { useState } from 'react';

import { action } from '@storybook/addon-actions';
import { StoryFn } from '@storybook/react';

import InputText from './InputText';

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
  const [fieldValue, setFieldValue] = useState('');
  return (
    <InputText
      id='story-id'
      value={fieldValue}
      onChange={(e) => setFieldValue(e.currentTarget.value)}
    >
      Label for field
    </InputText>
  );
};

export const HasError = () => {
  const [fieldValue, setFieldValue] = useState('');

  return (
    <InputText
      id='errorField'
      value={fieldValue}
      onChange={(e) => setFieldValue(e.currentTarget.value)}
      error={
        fieldValue.length < 5 ? 'Must be at least 5 characters' : undefined
      }
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
