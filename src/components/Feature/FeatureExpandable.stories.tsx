import Feature, { FeatureExpandableProps } from './FeatureExpandable';

export default {
  title: 'Components/Feature',
  component: Feature,
  tags: ['autodocs'],
};

const defaultArgs: FeatureExpandableProps = {
  bgColor: 'default',
  expandText: 'Egen text på knappen',
  image: {
    url: 'https://via.placeholder.com/500',
    alt: 'Placeholder',
  },
  preTitle: 'Pretitle.',
  title: 'Title',
  body: 'Here is some body text.',
  expBody: {
    type: 'doc',
    content: [
      {
        type: 'paragraph',
        content: [
          {
            text: 'Here is some body text.',
            type: 'text',
          },
        ],
      },
    ],
  },
};

export const Expandable = {
  args: defaultArgs,
};
