import Button from './Button';
import ButtonWrapper from './ButtonWrapper';

export default {
  title: 'Components/ButtonContainer',
  component: ButtonWrapper,
  tags: ['autodocs'],
};

export const Example = () => {
  return (
    <ButtonWrapper>
      <Button variant='primary'>Primary Action</Button>
      <Button transparent>Secondary Action</Button>
    </ButtonWrapper>
  );
};
