import { BaseProps } from '@/types/props';

import Style from './input-text.module.css';
import React from 'react';

export interface InputTextProps extends BaseProps {
  id: string;
  //value: string;
  error?: string;
  //onChange: (_newValue: string) => void;
}

const InputText = React.forwardRef<HTMLInputElement, InputTextProps>(
  ({ children, className, id, value, error, onChange, ...inputProps }, ref) => {
    InputText.displayName = 'InputText';
    const borderColor = error
      ? 'border-error'
      : 'border-inverted focus:border-primary-500';

    return (
      <div className={`flex flex-col ${className}`}>
        <label className={Style.label} htmlFor={id}>
          {children}
        </label>
        <input
          {...inputProps}
          ref={ref} // Attach the forwarded ref to the input element
          className={`bg-default ${Style.field} ${borderColor}`}
          type='text'
          id={id}
          //value={value}
         //onChange={(e) => onChange(e.target.value)}
        />
        {error && <div className={Style.errorMessage}>{error}</div>}
      </div>
    );
  }
);


export default InputText;
