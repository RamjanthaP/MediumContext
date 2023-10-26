import Image from "next/image";
import Button from "../Button/Button";
import { extractLastWord } from "@/utilities/helper";
import { storyblokEditable } from "@storyblok/react";
import { HeroStoryblok, LinkStoryblok } from "@sb-types";
import Link from "next/link";

type HeroProps = {
  headLine: string;
  imageUrl?: string;
  primaryButtonTitle?: string;
  secondaryButtonTitle?: string;
};

const Hero = ({ blok }: { blok: HeroStoryblok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      {blok?.image?.filename && (
        <div className="w-full h-96 relative bg-default flex justify-center items-center">
          <div className="z-20">
            {blok.headLine && (
              <h1 className="text-3xl font-bold ">
                {extractLastWord(blok.headLine).remaining}{" "}
                <span className="text-primary-500">
                  {extractLastWord(blok.headLine).lastWord}
                </span>
              </h1>
            )}
            {blok?.ctaPrimary?.length && (
              <Link href={blok?.ctaPrimary[0].link.cached_url}>
                <Button>{blok?.ctaPrimary[0].text}</Button>
              </Link>
            )}
            {blok?.ctaSecondary?.length && (
              <Link href={blok?.ctaSecondary[0].link.cached_url}>
                <Button variant="black" transparent>
                  {blok?.ctaSecondary[0].text}
                </Button>
              </Link>
            )}
          </div>
          <div className="bg-secondary-900 z-10 bg-opacity-80 absolute top-0 left-0 right-0 bottom-0"></div>
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
// const Hero = ({
//   headLine,
//   image,
//   primaryButtonTitle,
//   secondaryButtonTitle,
//   ...rest
// }: HeroStoryblok) => {
//   const { remaining, lastWord } = headLine
//     ? extractLastWord(headLine)
//     : { remaining: "Bob", lastWord: "VAT" };

//   return (
//     <div className="relative h-[33vh] w-full flex flex-col justify-center items-center">
//       {image?.filename && (
//         <Image
//           src={image.filename}
//           fill
//           style={{ objectFit: "cover" }}
//           quality={100}
//           alt="Hero background"
//           className="z-0"
//         />
//       )}
//       {/* <div className="flex">
//         <h1 className="text-hero text-secondary-500 text-2xl mb-4 z-20">
//           {remaining}
//           <span className="text-primary-500">{lastWord}</span>
//         </h1>
//       </div>
//       <div className="space-x-4 z-20">
//         {primaryButtonTitle && (
//           <Button variant="green" transparent>
//             {primaryButtonTitle}
//           </Button>
//         )}
//         {secondaryButtonTitle && (
//           <Button variant="green">{secondaryButtonTitle}</Button>
//         )}
//       </div> */}
//     </div>
//   );
// };

// export default Hero;
