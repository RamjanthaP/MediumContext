import { BaseProps } from '@/types/props';

export interface InputTextProps extends BaseProps {
  id: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
}

const InputText = ({
  children,
  className,
  id,
  value,
  error,
  onChange,
}: InputTextProps) => {
  const borderColor = error
    ? 'border-error'
    : 'border-transparent focus:border-primary-500';
  return (
    <div className={`flex flex-col ${className}`}>
      <label className='my-1 mx-6 text-md font-semibold' htmlFor={id}>
        {children}
      </label>
      <input
        className={[
          'bg-default',
          'border-2',
          'focus:outline-none',
          'py-2',
          'px-6',
          'rounded-full',
          'font-bold',
          borderColor,
        ].join(' ')}
        type='text'
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && (
        <div className='text-error text-sm my-1 mx-6 font-semibold'>
          {error}
        </div>
      )}
    </div>
  );
};

export default InputText;
