import React from 'react';

type ButtonProps = {
  variant?: 'green' | 'white' | 'black';
  transparent?: boolean;
  children: React.ReactNode;
  [x: string]: any; 
}

const colorVariants = {
  green: {
    default: 'btn-green',
    transparent: 'btn-green-transparent',
  },
  white: {
    default: 'btn-white',
    transparent: 'btn-white-transparent',
  },
  black: {
    default: 'btn-black',
    transparent: 'btn-black-transparent',
  },
};

const Button: React.FC<ButtonProps> = ({
  variant = 'green',
  transparent = false,
  children,
  ...props
}) => {
  const baseClasses = "mx-2 p-4 rounded-full border-2 uppercase whitespace-pre ";
  const colorClass = colorVariants[variant][transparent ? 'transparent' : 'default'];

  return (
    <button className={`${baseClasses} ${colorClass}`} {...props}>
      {children}
    </button>
  );
};

export default Button;

