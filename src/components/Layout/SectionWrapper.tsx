import React from "react";
import { Container } from "./Container";
import { BaseProps } from "@/components/PropsHelpers";

interface SectionWrapperProps extends BaseProps {
  color?: "default" | "inverted" | "discrete";
  title?: string;
  titleElement?: "h1" | "h2" | "h3" | "span";
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  color = "default",
  title,
  titleElement,
  children,
  className = "",
}) => {
  const TitleElement = titleElement || "div";
  return (
    <div className={`theme-block-${color} ${className}`}>
      <Container element="section" className="lg:py-16">
        <div>
          <TitleElement className="text-2xl font-bold mb-4">
            {title}
          </TitleElement>
          <div>{children}</div>
        </div>
      </Container>
    </div>
  );
};

export default SectionWrapper;
