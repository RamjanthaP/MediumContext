import ServiceItem, { ServiceCardProps } from './ServiceItem';

export default {
  title: 'Components/ServiceItem',
  component: ServiceItem,
  tags: ['autodocs'],
};

export const Plain = {
  args: {
    title: 'Service item',
    button: {
      text: 'Button',
      url: '/',
    },
    description: 'Description',
    image: {
      url: '/',
      alt: 'Bakgrund',
    },
  } as ServiceCardProps,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PauMl6DJZIE2WwX8zcxble/AmaceIT---draft-1.0.0?type=design&node-id=1670-16289&mode=design&t=uOVcCVSezBVJiMg8-11',
    },
  },
};
