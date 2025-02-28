import { MenuItem } from './MenuItem';
import { MenuLinkStoryblok } from '@sb-types';

export function DesktopMenu(props: {
  menuItems: MenuLinkStoryblok[];
  specialItem?: MenuLinkStoryblok;
}) {
  return (
    <div className='hidden md:flex items-center justify-end w-full md:gap-8'>
      {props.menuItems.map((item) => (
        <MenuItem key={item._uid} item={item} />
      ))}
      {props.specialItem && <MenuItem item={props.specialItem} />}
    </div>
  );
}
