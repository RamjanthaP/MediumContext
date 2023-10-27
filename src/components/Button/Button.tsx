import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

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
  green: {
    default: "btn-green",
    transparent: "btn-green-transparent",
  },
  white: {
    default: "btn-white",
    transparent: "btn-white-transparent",
  },
  black: {
    default: "btn-black",
    transparent: "btn-black-transparent",
  },
};

const sizeClass = {
  small: "px-4 py-2",
  medium: "px-6 py-3",
  large: "px-7 py-3",
};

const Button: React.FC<ButtonProps> = ({
  variant = "green",
  transparent = false,
  size = "medium",
  children,
  icon,
  ...props
}) => {
  const baseClasses = `mx-2 rounded-full border-2 uppercase whitespace-pre`;
  const colorClass =
    colorVariants[variant][transparent ? "transparent" : "default"];
  const sizeClasses = sizeClass[size];

  return (
    <button
      className={`${baseClasses} ${colorClass} ${sizeClasses}`}
      {...props}
    >
      <div className="flex px-2 w-full items-center">
        {children}
        {icon && <ArrowRightIcon className="h-5 w-5 ml-3" />}
      </div>
    </button>
  );
};

export default Button;
