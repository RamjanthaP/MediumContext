import { StoryFn } from '@storybook/react';

import Grid from '../Grid/Grid';
import ServiceItem, { ServiceCardProps } from './ServiceItem';

export default {
  title: 'Components/ServiceItem',
  component: ServiceItem,
  tags: ['autodocs'],
  decorators: [
    (Story: StoryFn) => (
      <Grid title='Stories' theme='discrete'>
        <Story />
      </Grid>
    ),
  ],
};

export const Plain = {
  args: {
    title: 'Service item',
    button: {
      text: 'Button',
      url: '/',
    },
    description: 'Description',
    animation: 'spin2',
    image: {
      url: '/',
      alt: 'Bakgrund',
      className: '',
    },
  } as ServiceCardProps,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PauMl6DJZIE2WwX8zcxble/AmaceIT---draft-1.0.0?type=design&node-id=1670-16289&mode=design&t=uOVcCVSezBVJiMg8-11',
    },
    layout: 'fullscreen',
  },
};
