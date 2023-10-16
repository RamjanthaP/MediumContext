import { ConfigStoryblok } from "../../../component-types-sb";
import HeroImage from '../../../public/assets/Hero.png';
import Image from "next/image";
import Button from "../Button/Button";
import { extractLastWord } from "@/utilities/helper";

const Hero = ({ blok }: { blok: ConfigStoryblok }) => {
  const { remaining, lastWord } = extractLastWord(blok.content.body[1].headline);

  return (
    <div className="relative h-[33vh] w-full flex flex-col justify-center items-center">

      <Image
        src={HeroImage}
        fill
        style={{ objectFit: "cover" }}
        quality={100}
        alt="Hero background"
        className="z-0"
      />
      <div className="flex">
        <h1 className="text-xxl text-secondary-500 text-2xl mb-4 z-20">{remaining}</h1>
        <h1 className="text-xxl text-primary-500 text-2xl mb-4 z-20">{lastWord}</h1>
      </div>
      <div className="space-x-4 z-20">
        <Button variant="green" transparent>Transparent Green Button</Button>
        <Button variant="green">Solid Green Button</Button>
      </div>
    </div>
  );
}

export default Hero;