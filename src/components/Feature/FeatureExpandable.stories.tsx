import Feature, { FeatureExpandableProps } from './FeatureExpandable';

export default {
  title: 'Components/Feature',
  component: Feature,
  tags: ['autodocs'],
};

const defaultArgs: FeatureExpandableProps = {
  bgColor: 'default',
  image: {
    url: 'https://via.placeholder.com/500',
    alt: 'Placeholder',
  },
  preTitle: 'Pretitle.',
  title: 'Title',
  body: 'Here is some body text.',
  expandText: 'Egen text på knappen',
  expTitle: 'Custom set Expandable title',
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
