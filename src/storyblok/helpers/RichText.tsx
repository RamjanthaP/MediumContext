import { RichtextStoryblok } from '@sb-types';
import { renderRichText } from '@storyblok/react';

import Styles from './rich-text.module.css';

type RichTextProps = {
  __html: RichtextStoryblok;
  className?: string;
  unstyled?: boolean;
};
// Using the __html to highlight that this is a dangerous operation
const RichText = ({ __html, className = '', unstyled }: RichTextProps) => {
  return (
    <div
      className={`${className} ${!unstyled && Styles.rt}`}
      dangerouslySetInnerHTML={{ __html: renderRichText(__html) }}
    />
  );
};

export default RichText;
