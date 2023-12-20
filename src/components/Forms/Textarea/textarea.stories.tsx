import { ChangeEvent, useState } from 'react';

import { action } from '@storybook/addon-actions';
import { StoryFn } from '@storybook/react';

import Textarea from './Textarea';

export default {
  title: 'Components/Form Elements/Textarea',
  component: Textarea,
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
    <Textarea
      id='story-id'
      value={formValue}
      onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
        setFormValue(e.currentTarget.value)
      }
    >
      Label for textarea
    </Textarea>
  );
};

export const HasError = () => {
  const [formValue, setFormValue] = useState(
    'This text oversees the maximum length of 40 characters'
  );
  const maxLength = 40;
  const validateLength = (text: string) => {
    return text.length > maxLength ? 'Text is too long' : '';
  };

  const [error, setError] = useState(validateLength(formValue));

  return (
    <Textarea
      id='story-id'
      error={error}
      value={formValue}
      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
        setFormValue(e.currentTarget.value);
        setError(validateLength(e.currentTarget.value));
      }}
    >
      Maximum 20 characterss test
    </Textarea>
  );
};

export const IsDisabled = () => (
  <Textarea
    id='story-id'
    value={"Value you can't change"}
    onChange={action('onChange')}
    disabled
  >
    Disabled textarea
  </Textarea>
);
