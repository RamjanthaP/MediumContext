import { BaseProps } from "@/types/props";

const Placholder = (
  props: Partial<BaseProps> & { name: string; data?: any }
) => {
  return (
    <div className="border-primary-500 border-dashed border p-4 m-4 relative">
      <div className="bg-primary-500 text-white px-2 py-0 text-sm inline-block absolute top-0 left-0">
        Placeholder {props.name}
      </div>
      <h1 className="text-lg mt-4 text-primary-400">
        {props.data.title || props.data.headline || "utan namn"}
      </h1>
      <div>
        <details>
          <summary>Data (click to expand)</summary>
          {!props.children && props.data && (
            <pre className="whitespace-pre-wrap p-8 text-sm">
              {JSON.stringify(props.data, null, 2)}
            </pre>
          )}
        </details>

        {props.children}
      </div>
    </div>
  );
};

export default Placholder;
