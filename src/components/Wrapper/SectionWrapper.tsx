interface SectionWrapperProps {
  color?: "default" | "inverted" | "discrete";
  title?: string;
  titleElement?: "h1" | "h2" | "h3" | "span";
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  color = "default",
  title,
  titleElement,
  children,
}) => {
  const TitleElement = titleElement || "div";
  return (
    <div className={`theme-block-${color}`}>
      <section
        className={`container mx-auto py-8 lg:py-16 px-12 lg:px-20 xl:px-0`}
      >
        <div>
          <TitleElement className="font-bold text-xlg mb-4">
            {title}
          </TitleElement>
          <div className="flex">{children}</div>
        </div>
      </section>
    </div>
  );
};

export default SectionWrapper;
