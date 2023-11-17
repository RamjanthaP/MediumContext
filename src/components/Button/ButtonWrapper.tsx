import type { BaseProps } from '@/types/props';

const ButtonWrapper = (props: BaseProps) => {
  return (
    <div className={`flex flex-wrap gap-2 ${props.className}`}>
      {props.children}
    </div>
  );
};
export default ButtonWrapper;
