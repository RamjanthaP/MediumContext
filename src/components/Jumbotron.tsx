import Image from "next/image";

type BackgroundColor = "primary" | "secondary" | "gray";

interface JumbotronProps {
  variant: "background" | "blank" | "image-right" | "image-left";
  backgroundColor: BackgroundColor;
}

export function Jumbotron(props: JumbotronProps) {
  const color = props.backgroundColor || "gray";
  return (
    <div
      className={`wrapper flex flex-col sm:flex-row bg-${color}-200 dark:bg-${color}-800`}
    >
      <div className={`content w-full flex items-center`}>
        <div className="px-4 md:px-12 lg:px-24 pb-24">
          <h1 className="text-3xl font-bolder">Jumbotron</h1>
          <div className="content">
            <p>Something something</p>
            <p>Something something</p>
          </div>
        </div>
      </div>
      <div className="flex  justify-center w-full py-8">
        <Image
          src="https://unsplash.it/500/500"
          alt="Image alt PLACEHOLDER"
          width="500"
          height="500"
        />
      </div>
    </div>
  );
}
