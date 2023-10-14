interface SectionWrapperProps {
  color?: "gray" | "primary" | "secondary";
  title?: string;
  titleElement?: "h1" | "h2" | "h3" | "span";
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  color,
  title,
  titleElement,
  children,
}) => {
  const TitleElement = titleElement || "span";
  return (
    <div className="my-8 bg-secondary-50">
      <section
        className={`bg-${color}-300 flex flex-col py-12 mx-auto max-w-7xl lg:py-16 px-12 lg:px-20`}
      >
        <TitleElement className="flex font-bold">{title}</TitleElement>
        <div className="mx-auto">{children}</div>
      </section>
    </div>
  );
};

export default SectionWrapper;
