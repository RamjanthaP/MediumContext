interface FallbackBlokProps {
  title?: string;
  name?: string;
  headline?: string;
  _uid: string;
  component: string;
}
const Placholder = (props: { blok: FallbackBlokProps }) => {
  const componentName = props.blok.component;
  const { blok } = props;
  const { title, name, headline } = blok;
  return (
    <div className="border-primary-500 border-dashed border p-4 m-4 relative">
      <div className="bg-primary-500 text-white px-2 py-0 text-sm inline-block absolute top-0 left-0">
        Placeholder {componentName}
      </div>
      <h1 className="text-lg mt-4 text-primary-400">
        {title || headline || name || "utan namn"}
      </h1>
      <div>
        <details>
          <summary className="cursor-pointer hover:text-primary-200">
            Data (click to expand)
          </summary>

          <pre className="whitespace-pre-wrap p-8 text-sm">
            {JSON.stringify(blok, null, 2)}
          </pre>
        </details>
      </div>
    </div>
  );
};

export default Placholder;
