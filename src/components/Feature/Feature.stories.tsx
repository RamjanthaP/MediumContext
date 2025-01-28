import Feature, { FeatureSectionProps } from './Feature';

export default {
  title: 'Components/Feature',
  component: Feature,
  tags: ['autodocs'],
};

const defaultArgs: FeatureSectionProps = {
  bgColor: 'default',
  firstButton: {
    text: 'Primary',
    url: '#',
  },
  secondButton: {
    text: 'Secondary',
    url: '#',
  },
  image: {
    url: 'https://via.placeholder.com/500',
    alt: 'Placeholder',
    className: "classnames",
  },
  preTitle: 'Pretitle.',
  title: 'Title',
  body: 'Here is some body text.',
};

export const BasicWithLinks = {
  args: defaultArgs,
};

