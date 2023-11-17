import { RichtextStoryblok } from '@sb-types';
import { renderRichText } from '@storyblok/react';
import Styles from './rich-text.module.css'

type RichTextProps = {
  __html: RichtextStoryblok;
  className?: string;
};
// Using the __html to highlight that this is a dangerous operation
const RichText = ({ __html, className = '' }: RichTextProps) => {
  return (
    <div
      className={`${className} ${Styles.rt}`}
      dangerouslySetInnerHTML={{ __html: renderRichText(__html) }}
    />
  );
};

export default RichText;
