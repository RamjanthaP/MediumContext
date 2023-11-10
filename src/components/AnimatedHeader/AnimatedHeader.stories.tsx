import AnimatedHeader from './AnimatedHeader';

export default {
  title: 'Components/AnimatedHeader',
  component: AnimatedHeader,
  tags: ['autodocs'],
};

export const Plain = {
  args: {
    title: 'Animated Header',
  },
};

export const WithButton = {
  args: {
    title: 'Animated Header with button',
    topActionButton: {
      text: 'Back to home',
      url: '/',
    },
  }
};
