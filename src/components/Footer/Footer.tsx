import { ContactFooterStoryblok, OfficesStoryblok } from '@sb-types';

import SectionWrapper from '@/components/Layout/SectionWrapper';

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
    <SectionWrapper color='default' title='Kontakta oss'>
      <div className='generic-info'>
        <div>
          Email: <a href='mailto:info@amaceit.se'>info@amaceit.se</a>
        </div>
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
  );
};

export default Footer;
