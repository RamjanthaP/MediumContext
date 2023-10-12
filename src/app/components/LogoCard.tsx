import Image from "next/image";
import { useCallback, useMemo } from "react";

export interface LogoCardProps {
  svgUrl: string;
  svgAlt: string;
  link?: string;
  size?: "small" | "medium" | "large";
}

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
    <div className="bg-white transition-colors dark:bg-gray-800 h-52 w-52 flex items-center justify-center shadow justify-self-center">
      <div
        className={`h-${size} w-${size} relative bg-gray-600 dark:bg-gray-400`}
        style={{
          mask: `url(${props.svgUrl}) no-repeat center`,
          WebkitMask: `url(${props.svgUrl}) no-repeat center`,
        }}
      />
    </div>
  );
};

export default LogoCard;
