import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ForwardedRef,
  forwardRef,
} from 'react';

import Link from 'next/link';

import Styles from './button.module.css';

export type ButtonSizes = keyof typeof sizeClass;
export type ButtonColors = keyof typeof colorVariants;

type ButtonBaseProps = {
  variant?: ButtonColors;
  transparent?: boolean;
  children: React.ReactNode;
  size?: ButtonSizes;
};

type ButtonAsButtonProps = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsAnchorProps = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

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

const Button = forwardRef(
  (
    {
      children,
      href,
      size = 'medium',
      transparent,
      variant = 'default',
      onClick,
      ...props
    }: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    const baseClasses = Styles.btn;
    const colorVariant = colorVariants[variant] || colorVariants.default;
    const colorClass = transparent
      ? colorVariant.transparent
      : colorVariant.default;

    const sizeClasses = sizeClass[size];

    const classes = `${baseClasses} ${colorClass} ${sizeClasses}`;

    const handleClick = (
      e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
    ) => {
      if (href?.includes('#')) {
        e.preventDefault();
        const id = href.split('#').at(-1) as string;
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
      onClick?.(e as any);
    };

    if (href) {
      return (
        <Link
          href={href}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
          className={classes}
          onClick={handleClick}
          ref={ref as ForwardedRef<HTMLAnchorElement>}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
        className={classes}
        onClick={handleClick}
        ref={ref as ForwardedRef<HTMLButtonElement>}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
