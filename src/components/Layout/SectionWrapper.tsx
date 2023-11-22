import React from "react";
import { Container } from "./Container";
import { BaseProps } from "@/types/props";
import TitleElement from "../TitleElement/TitleElement";

interface SectionWrapperProps extends BaseProps {
  color?: "default" | "inverted" | "discrete";
  title?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  color = "default",
  title,
  children,
  className = "",
}) => {
  return (
    <div className={`theme-block-${color} ${className}`}>
      <Container element="section" className="lg:py-7">
        <div>
          {title && <TitleElement title={title} titleSize="h2" />}
          <div>{children}</div>
        </div>
      </Container>
    </div>
  );
};

export default SectionWrapper;
