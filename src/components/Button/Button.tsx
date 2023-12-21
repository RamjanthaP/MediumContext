import React from 'react';

import Link from 'next/link';

import Styles from './button.module.css';

export type ButtonSizes = keyof typeof sizeClass;
export type ButtonColors = keyof typeof colorVariants;

type ButtonProps = {
  variant?: ButtonColors;
  transparent?: boolean;
  children: React.ReactNode;
  size?: ButtonSizes;
  [x: string]: any;
  href?: string;
};

const colorVariants = {
  primary: {
    default: Styles['btn-primary'],
    transparent: Styles['btn-primary-transparent'],
  },
  inverted: {
    default: Styles['btn-inverted'],
    transparent: Styles['btn-white-transparent'],
  },
  default: {
    default: Styles['btn-default'],
    transparent: Styles['btn-default-transparent'],
  },
};

const sizeClass = {
  small: 'px-3 py-1 text-sm',
  medium: 'px-6 py-3',
  large: 'px-7 py-3',
};

const Button = ({
  children,
  href,
  size = 'medium',
  transparent,
  variant = 'default',
  ...props
}: ButtonProps) => {
  const baseClasses = Styles.btn;
  const colorVariant = colorVariants[variant] || colorVariants.default;
  const colorClass = transparent
    ? colorVariant.transparent
    : colorVariant.default;

  const sizeClasses = sizeClass[size];

  const handleClick = (e: { preventDefault: () => void }) => {
    if (href?.startsWith('#')) {
      e.preventDefault();
      const id = href.slice(1);
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    if (props.onClick) props.onClick();
  };

  if (href)
    return (
      <Link
        className={`${baseClasses} ${colorClass} ${sizeClasses}`}
        href={href || '#'}
        onClick={handleClick}
      >
        {children}
      </Link>
    );

  return (
    <button
      className={`${baseClasses} ${colorClass} ${sizeClasses}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
