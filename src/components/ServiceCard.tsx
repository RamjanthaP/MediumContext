import Image from "next/image";
import IconForward from "@heroicons/react/24/solid/ArrowRightIcon";
import Link from "next/link";

export interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  link: string;
}

const ServiceCard = (props: ServiceCardProps) => (
  <div className="bg-white flex flext-grow-1 flex-col rounded-lg overflow-hidden border-2 w-full">
      <div className='h-36 relative'>
      <Image
        className="object-cover"
        src={props.imageUrl}
        alt={props.imageAlt}
        fill
      />
    </div>
    <div className="p-4">
      <h3 className="text-xl font-bold">{props.title}</h3>
      <div className="pt-2 text">{props.description}</div>
    </div>
    <div className="p-4">
      <Link
        href={props.link}
        className="cursor-pointer text-sm px-4 py-2 border-2 border-black inline-flex gap-1 items-center flex-grow-0 rounded-full hocus:border-lime-500 hocus:text-lime-500 outline-none"
      >
        <span>Läs vidare</span>
        <IconForward className="w-4 h-4" />
      </Link>
    </div>
  </div>
);

export default ServiceCard;
