import { storyblokEditable } from '@storyblok/react';
import Link from 'next/link';
import { MenuLinkStoryblok } from '../../../component-types-sb';
const MenuLink = ({ blok }: { blok: MenuLinkStoryblok }) => {
  return (
    <>
      <Link
        href={'/' + blok?.link?.cached_url}
        {...storyblokEditable(blok)}
        className='text-base uppercase cursor-pointer transition-all duration-300 border-b-2 border-b-transparent hover:border-primary-500'
      >
        {blok.title}
      </Link>
      {/* TODO: Enable sub pages if we need them */}
      {/* {typeof blok?.subItems !== "string" &&
        blok.subItems?.map((child: MenuLinkStoryblok) => (
          <StoryblokComponent
            key={child._uid}
            blok={{ ...child, title: child.title + " (child)" }}
          />
        ))} */}
    </>
  );
};
export default MenuLink;
