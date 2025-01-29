import React from 'react';

import { BaseProps } from '@/types/props';

import Style from './input-text.module.css';

export interface InputTextProps extends BaseProps {
  id: string;
  value?: string;
  error?: string;
  onChange?: (_e: React.FormEvent<HTMLInputElement>) => void;
}

export interface InputTextProps
  extends Omit<
    Partial<React.InputHTMLAttributes<HTMLInputElement>>,
    'onChange' | 'value' // Ommitting this in order to make it required for the component
  > {}

const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  ({ children, className, id, error, ...inputProps }, ref) => {
    InputText.displayName = 'InputText';
    const borderColor = error
      ? 'border-error'
      : 'border-transparent focus:border-primary-500';

    return (
      <div className={`flex flex-col ${className}`}>
        <label className={Style.label} htmlFor={id}>
          {children}
        </label>
        <input
          {...inputProps}
          ref={ref}
          className={`bg-default text-lg ${Style.field} ${borderColor}`}
          type='text'
          id={id}
        />
        {error && <div className={Style.errorMessage}>{error}</div>}
      </div>
    );
  }
);

export default InputText;
