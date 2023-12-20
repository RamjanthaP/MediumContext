import { MaximumLengthStoryblok } from '@sb-types';
import { storyblokEditable } from '@storyblok/react';

export default function MaxLength({ blok, errors }: MaximumLengthStoryblok) {
  return (
    <div {...storyblokEditable(blok)}>
      {errors.Text?.type === 'maxLength' && blok.errorMessage}
    </div>
  );
}
