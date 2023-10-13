interface SectionWrapperProps {
  color: string;
  title: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ color, title, children }) => {
  console.log(color)

  return (
    <div className="my-8 bg-secondary-50">
      <section className={`bg-${color}-200 flex flex-col py-12 mx-auto max-w-7xl lg:py-16 px-12 lg:px-20`}>
        <h1 className="flex font-bold">{title}</h1>
        <div className="mx-auto">{children}</div>
      </section>
    </div>
  );
}

export default SectionWrapper;

