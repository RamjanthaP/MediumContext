import packageJson from '@/../../package.json';
import { ContactFooterStoryblok, OfficesStoryblok } from '@sb-types';

import SectionWrapper from '@/components/Layout/SectionWrapper';

import Link from '../../../node_modules/next/link';
import LogoAmaceit from '../Logo/Amaceit';
import { OfficeItem, OfficeItemProps } from './OfficeItem';

// TODO: remove this after debug
const version = packageJson.version;
const environment = process.env.NODE_ENV;

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
      <SectionWrapper color='default' title='Kontakta oss.'>
        <div className='flex flex-col items-center mb-8'>
          <div className='flex justify-center mb-4 '>
            <Link
              href='/'
              aria-label='Länk till startsidan'
              className='flex-grow-1 w-8/12 lg:w-8/12'
            >
              <LogoAmaceit className='md:-translate-y-0.5 lg:-translate-y-1' />
            </Link>
          </div>
          <Link href='mailto:info@amaceit.se' className='email-class text-xl'>
            E-post: info@amaceit.se
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

      <div>
        {
          environment !== 'production' && 'v' + version // TODO: Remove this
        }
      </div>
    </footer>
  );
};

export default Footer;
