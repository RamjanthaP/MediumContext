import { BaseProps } from '@/types/props';

import Style from './textarea.module.css';

export interface TextareaProps extends BaseProps {
  id: string;
  value: string;
  error?: string;
  onChange: (newValue: string) => void;
}
export interface TextareaProps
  extends Omit<
    Partial<React.TextareaHTMLAttributes<HTMLTextAreaElement>>,
    'onChange' | 'value' // Ommitting this in order to make it required for the component
  > {}

const Textarea = ({
  children,
  className,
  id,
  value,
  error,
  onChange,
  rows = 4,
  ...inputProps
}: TextareaProps) => {
  const borderColor = error
    ? 'border-error'
    : 'border-transparent focus:border-primary-500';

  return (
    <div className={`flex flex-col ${className}`}>
      <label className={Style.label} htmlFor={id}>
        {children}
      </label>
      <textarea
        {...inputProps}
        className={`bg-default ${Style.field} ${borderColor}`}
        id={id}
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <div className={Style.errorMessage}>{error}</div>}
    </div>
  );
};

export default Textarea;
