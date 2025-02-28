import { ReactNode, forwardRef } from 'react';

import type { BaseProps } from '@/types/props';

interface ButtonWrapperProps extends BaseProps {
  children: ReactNode;
}

const ButtonWrapper = forwardRef<HTMLDivElement, ButtonWrapperProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`flex flex-wrap flex-col md:flex-row items-center justify-center gap-2 ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ButtonWrapper.displayName = 'ButtonWrapper'
export default ButtonWrapper;
