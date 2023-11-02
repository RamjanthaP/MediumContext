import Image from "next/image";
import { ReactNode, useMemo } from "react";

interface JumbotronProps {
  variant?: "content-right" | "content-left";
  children?: ReactNode;
  title: string;
  className?: string;
  imageUrl?: string;
}

export function Jumbotron({
  children,
  variant = "content-left",

  title,
  imageUrl,
}: JumbotronProps) {
  const layoutClass =
    variant === "content-right" ? "md:flex-row-reverse" : "md:flex-row";
  return (
    <div className="bg-white dark:bg-black">
      <div className={`container wrapper flex flex-col ${layoutClass} mx-auto`}>
        <div className={`content w-full flex items-center`}>
          <div className='px-8  py-8 md:py-0'>
            {title && (
              <>
                <h1 className="md:text-xl lg:text-2xl xl:text-3xl font-bolder color-black dark:text-white">
                  {title}
                </h1>
                {children && <div className="mt-4">{children}</div>}
              </>
            )}
          </div>
        </div>
        <div className="flex justify-center w-full md:py-8 h-72 md:h-screen  relative">
          {imageUrl && (
            <Image src={imageUrl} fill alt="Nej" className="object-contain" />
          )}
        </div>
      </div>
    </div>
  );
}
