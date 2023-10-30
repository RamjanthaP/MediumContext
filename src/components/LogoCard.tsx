import Image from "next/image";
import { useCallback, useMemo } from "react";

export interface LogoCardProps {
  svgUrl: string;
  name: string;
  link?: string;
  size?: "small" | "medium" | "large";
}
const availableSizeClasses = ["h-24 w-24", "h-32 w-32", "h-44 w-44"];

const LogoCard = (props: LogoCardProps) => {
  const size: 24 | 32 | 44 = useMemo(() => {
    switch (props.size) {
      case "large":
        return 44;
      case "medium":
        return 32;
      default:
        return 24;
    }
  }, [props.size]);

  return (
    <div
      className={`bg-inverted-opacity bg-opacity-10 w-full h-full aspect-auto md:aspect-square md:h-auto  flex items-center justify-center justify-self-center ${
        props.size === "small" ? "py-8" : "py-0"
      }`}
    >
      <div className="sr-only">{props.name}</div>
      <div
        className={`h-${size} w-${size} relative bg-inverted`}
        style={{
          mask: `url(${props.svgUrl}) no-repeat center`,
          WebkitMask: `url(${props.svgUrl}) no-repeat center`,
        }}
      ></div>
    </div>
  );
};

export default LogoCard;
