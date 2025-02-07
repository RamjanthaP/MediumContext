import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { ContactFooterStoryblok, OfficesStoryblok } from '@sb-types';

import SectionWrapper from '@/components/Layout/SectionWrapper';

import Link from '../../../node_modules/next/link';
import { IconLinkedIn } from '../Icons/IconLinkedIn';
import LogoAmaceit from '../Logo/Amaceit';
import { OfficeItem, OfficeItemProps } from './OfficeItem';

export function mapOfficeDTOtoData(dto: ContactFooterStoryblok) {
  return dto.content.offices.map((office: OfficesStoryblok) => ({
    title: office.city,
    address: {
      street: office.streetadress,
      zip: office.zip,
      city: office.city,
    },
  }));
}

const Footer = ({ blok }: { blok: ContactFooterStoryblok }) => {
  const offices = mapOfficeDTOtoData(blok);
  return (
    <footer>
      <SectionWrapper>
        <div className='flex flex-col items-center mb-8 pt-32 relative pb-32'>
          <div className='flex justify-center mb-4 z-10 '>
            <Link
              href='/'
              aria-label='Länk till startsidan'
              className='flex-grow-1 w-8/12 lg:w-8/12'
            >
              <LogoAmaceit className='md:-translate-y-0.5 lg:-translate-y-1' />
            </Link>
          </div>
          <Link
            href='mailto:info@amaceit.se'
            className='email-class text-lg hocus:text-primary-500 z-10'
          >
            <EnvelopeIcon className='h-6 w-6 inline' /> info@amaceit.se
          </Link>
          <Link
            href='https://linkedin.com/company/amaceit'
            className='email-class text-lg hocus:text-primary-500 z-10'
          >
            <IconLinkedIn className='h-6 w-6 inline ' /> LinkedIn
          </Link>
        </div>
        <div className='offices w-full mt-4 flex flex-col md:flex-row gap-6'>
          {offices.map((office: OfficeItemProps) => (
            <OfficeItem
              key={office.title}
              title={office.title}
              address={office.address}
            />
          ))}
        </div>
      </SectionWrapper>
    </footer>
  );
};

export default Footer;
