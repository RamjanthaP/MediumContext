import { MinimumLengthStoryblok } from '@sb-types';
import { storyblokEditable } from '@storyblok/react';

export default function MinLength({ blok, errors }: MinimumLengthStoryblok) {
  return (
    <div {...storyblokEditable(blok)}>
      {errors.Text?.type === 'minLength' && blok.errorMessage}
    </div>
  );
}
