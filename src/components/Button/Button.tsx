import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

export type ButtonSizes = keyof typeof sizeClass;
export type ButtonColors = keyof typeof colorVariants;

type ButtonProps = {
  variant?: ButtonColors;
  transparent?: boolean;
  children: React.ReactNode;
  size?: ButtonSizes;
  [x: string]: any;
  icon?: boolean;
};

const colorVariants = {
  primary: {
    default: 'btn-primary',
    transparent: 'btn-primary-transparent',
  },
  white: {
    default: 'btn-white',
    transparent: 'btn-white-transparent',
  },
  default: {
    default: 'btn-default',
    transparent: 'btn-default-transparent',
  },
};

const sizeClass = {
  small: 'px-2 py-1 text-sm',
  medium: 'px-6 py-3',
  large: 'px-7 py-3',
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  transparent = false,
  size = 'medium',
  children,
  icon,
  ...props
}) => {
  const baseClasses = `mx-2 rounded-full border-2  whitespace-pre`;
  const colorVariant = colorVariants[variant] || colorVariants.default;
  const colorClass = transparent
    ? colorVariant.transparent
    : colorVariant.default;
  const sizeClasses = sizeClass[size];

  return (
    <button
      className={`${baseClasses} ${colorClass} ${sizeClasses}`}
      {...props}
    >
      <div className='flex w-full items-center px-2'>
        {children}
        {icon && <ArrowRightIcon className='ml-2 h-5 w-5' />}
      </div>
    </button>
  );
};

export default Button;
