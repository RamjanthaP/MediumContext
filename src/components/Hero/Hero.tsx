import Image from "next/image";
import Button from "../Button/Button";
import { extractLastWord } from "@/utilities/helper";
import { storyblokEditable } from "@storyblok/react";
import { HeroStoryblok, LinkStoryblok } from "@sb-types";
import Link from "next/link";

export type HeroProps = {
  headLine: string;
  imageUrl?: string;
  primaryButtonTitle?: string;
  secondaryButtonTitle?: string;
};

const Hero = ({ blok }: { blok: HeroStoryblok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      {blok?.image?.filename && (
        <div className="w-full h-96 relative theme-block-default flex justify-center items-center">
          <div className="z-20 p-14">
            {blok.headLine && (
              <h1 className="text-Jumbo/sm md:text-Jumbo/lg lg:text-Jumbo/xl font-bold mb-8 md:mb-10">
                {extractLastWord(blok.headLine).remaining}{" "}
                <span className="text-primary-500">
                  {extractLastWord(blok.headLine).lastWord}
                </span>
              </h1>
            )}
            {blok?.ctaPrimary?.length && (
              <Link
                className="inline-block"
                href={blok?.ctaPrimary[0].link.cached_url}
              >
                <Button>{blok?.ctaPrimary[0].text}</Button>
              </Link>
            )}
            {blok?.ctaSecondary?.length && (
              <Link
                className="inline-block"
                href={blok?.ctaSecondary[0].link.cached_url}
              >
                <Button variant="primary" transparent>
                  {blok?.ctaSecondary[0].text}
                </Button>
              </Link>
            )}
          </div>
          <div className="z-10 bg-default-opacity bg-opacity-60 absolute top-0 left-0 right-0 bottom-0"></div>
          <Image
            className="object-cover md:object-contain z-0 absolute"
            src={blok?.image?.filename}
            alt={blok?.image?.alt || "bild"}
            fill
          />
        </div>
      )}
    </div>
  );
};
export default Hero;
