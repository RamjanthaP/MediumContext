import { BaseProps } from "@/types/props";
interface ContainerProps extends BaseProps {
  element?:
    | "div"
    | "section"
    | "article"
    | "main"
    | "aside"
    | "header"
    | "footer";
}

export const Container = ({
  children,
  className,
  element = "div",
}: ContainerProps) => {
  const Element = element;
  return (
    <Element
      className={`container mx-auto px-4 md:px-8 lg:px-16 xl:px-0 ${className}`}
    >
      {children}
    </Element>
  );
};
