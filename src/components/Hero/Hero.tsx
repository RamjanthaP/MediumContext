import Image from "next/image";
import Button from "../Button/Button";
import { extractLastWord } from "@/utilities/helper";

type HeroProps = {
  headLine: string,
  imageUrl?: string;
  primaryButtonTitle?: string;
  secondaryButtonTitle?: string;
}

const Hero = ({ headLine, imageUrl, primaryButtonTitle, secondaryButtonTitle }: HeroProps) => {
  const { remaining, lastWord } = extractLastWord(headLine);

  return (
    <div className="relative h-[33vh] w-full flex flex-col justify-center items-center">
      {imageUrl && <Image
        src={imageUrl}
        fill
        style={{ objectFit: "cover" }}
        quality={100}
        alt="Hero background"
        className="z-0"
      />}
      <div className="flex">
        <h1 className="text-xxl text-secondary-500 text-2xl mb-4 z-20">{remaining}</h1>
        <h1 className="text-xxl text-primary-500 text-2xl mb-4 z-20">{lastWord}</h1>
      </div>
      <div className="space-x-4 z-20">
        {primaryButtonTitle && <Button variant="green" transparent>{primaryButtonTitle}</Button>}
        {secondaryButtonTitle && <Button variant="green">{secondaryButtonTitle}</Button>}
      </div>
    </div>
  );
}

export default Hero;