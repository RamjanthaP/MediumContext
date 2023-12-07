import { BaseProps } from '@/types/props';

import Style from './input-text.module.css';

export interface InputTextProps extends BaseProps {
  id: string;
  value: string;
  error?: string;
  onChange: (newValue: string) => void;
}
export interface InputTextProps
  extends Omit<
    Partial<React.InputHTMLAttributes<HTMLInputElement>>,
    'onChange' | 'value' // Ommitting this in order to make it required for the component
  > {}

const InputText = ({
  children,
  className,
  id,
  value,
  error,
  onChange,
  ...inputProps
}: InputTextProps) => {
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
        className={`bg-default ${Style.field} ${borderColor} disabled:bg-secondary-200`}
        type='text'
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <div className={Style.errorMessage}>{error}</div>}
    </div>
  );
};

export default InputText;
