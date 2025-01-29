import StoryblokProvider from '@/storyblok/StoryblokProvider';
import { StoryFn } from '@storybook/react';

import Hero, { HeroProps } from './Hero';

export default {
  title: 'Components/Hero',
  component: Hero,
  tags: ['autodocs'],
  decorators: [
    (Story: StoryFn) => (
      <StoryblokProvider>
        <Story />
      </StoryblokProvider>
    ),
  ],
};
const richTextBody = {
  type: 'doc',
  content: [
    {
      type: 'paragraph',
      content: [
        {
          text: 'Testar lite olika ',
          type: 'text',
        },
        {
          text: 'texter för ',
          type: 'text',
          marks: [
            {
              type: 'bold',
            },
          ],
        },
        {
          text: 'att se om det blir  ',
          type: 'text',
        },
        {
          text: 'grönt, ',
          type: 'text',
          marks: [
            {
              type: 'textStyle',
              attrs: {
                color: '#24B026',
              },
            },
          ],
        },
        {
          text: 'understruket',
          type: 'text',
          marks: [
            {
              type: 'underline',
            },
          ],
        },
        {
          text: ' eller ',
          type: 'text',
        },
        {
          text: 'fet stilat ',
          type: 'text',
          marks: [
            {
              type: 'bold',
            },
          ],
        },
        {
          text: 'och ',
          type: 'text',
        },
        {
          text: 'kursivt',
          type: 'text',
          marks: [
            {
              type: 'italic',
            },
            {
              type: 'textStyle',
              attrs: {
                color: '#24B026',
              },
            },
          ],
        },
        {
          text: '.',
          type: 'text',
          marks: [
            {
              type: 'bold',
            },
          ],
        },
      ],
    },
  ],
};

const richTextTitle = {
  type: 'doc',
  content: [
    {
      type: 'paragraph',
      content: [
        {
          text: 'Exempel på en ',
          type: 'text',
        },
        {
          text: 'rubrik med hightlight',
          type: 'text',
          marks: [
            {
              type: 'bold',
            },
          ],
        },
        {
          text: '. ',
          type: 'text',
        },
        {
          text: 'Ett till stycke som har',
          type: 'text',
        },
        {
          text: ' en highlightad text. ',
          type: 'text',
          marks: [
            {
              type: 'bold',
            },
          ],
        },
        {
          text: 'Ingen highlight på slutet.',
          type: 'text',
        },
      ],
    },
  ],
};

const defaultArgs: HeroProps = {
  title: richTextTitle,
  bodyText: richTextBody,
  image: {
    url: 'https://unsplash.it/1500/500?image=1062',
    alt: 'placeholder',
    className: ''
  },
  primaryButton: {
    text: 'Primary',
    url: '#',
  },
  secondaryButton: {
    text: 'Secondary',
    url: '#',
  },
};

export const Basic = {
  args: defaultArgs,
};
