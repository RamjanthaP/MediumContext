import React from 'react';

import { BaseProps } from '@/types/props';

import Style from './input-text.module.css';

export interface InputTextProps extends BaseProps {
  id: string;
  value?: string;
  error?: true;
}

const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  ({ children, className, id, value, error, ...inputProps }, ref) => {
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
          className={`bg-default ${Style.field} ${borderColor}`}
          type='text'
          id={id}
          value={value}
        />
      </div>
    );
  }
);

export default InputText;
