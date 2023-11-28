import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};

const baseButton = {
  args: {
    variant: 'primary',
    element: 'button',
    children: 'Button',
    transparent: false,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PauMl6DJZIE2WwX8zcxble/AmaceIT---draft-1.0.0?type=design&node-id=1045-19429&mode=design&t=ze5a7pUMT7LSbAlT-11',
    },
  },
};

function generateButtonVarition(
  name: string,
  variant: 'primary' | 'default' | 'inverted',
  outlined: boolean
) {
  return {
    ...baseButton,
    args: {
      variant: variant,
      transparent: outlined,
      children: name,
    },
  };
}

export const DefaultSolid = generateButtonVarition(
  'Default Solid',
  'default',
  false
);
export const DefaultOutlined = generateButtonVarition(
  'Default Outlined',
  'default',
  true
);

export const InvertedSolid = generateButtonVarition(
  'Default Solid',
  'inverted',
  false
);
export const InvertedOutlined = generateButtonVarition(
  'Default Outlined',
  'inverted',
  true
);

export const PrimarySolid = generateButtonVarition(
  'Primary Solid',
  'primary',
  false
);

export const PrimaryOutlined = generateButtonVarition(
  'Primary Outlined',
  'primary',
  true
);
