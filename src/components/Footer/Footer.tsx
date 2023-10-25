import SectionWrapper from "@/components/Layout/SectionWrapper";

interface OfficeItemProps {
  title: string;
  address: {
    street: string;
    zip: string;
    city: string;
  };
}
const OfficeItem = ({ title, address }: OfficeItemProps) => (
  <div className="office flex-grow">
    <h2 className="office__title text-xlg">{title}</h2>
    <div className="office__content">
      <div className="office__address">{address.street}</div>
      <div className="office__address">{address.zip}</div>
      <div className="office__address">{address.city}</div>
    </div>
  </div>
);

// TODO: Get this from API
const mockData = [
  {
    title: "Linköping",
    address: {
      street: "Drottninggatan 19",
      zip: "582 25",
      city: "Linköping",
    },
  },
  {
    title: "Stockholm",
    address: {
      street: "Vattugatan 1",
      zip: "111 52",
      city: "Stockholm",
    },
  },
  {
    title: "Ljungby",
    address: {
      street: "Kånnavägen 40",
      zip: "341 31",
      city: "Ljungby",
    },
  },
];

const Footer = () => {
  const offices = mockData;
  return (
    <SectionWrapper color="default" title="Contact">
      <div className="generic-info">
        <div>
          Email: <a href="mailto:info@amaceit.se">info@amaceit.se</a>
        </div>
        <div>Phone: XXX-XX XX XX</div>
      </div>
      <div className="offices w-full mt-4 flex flex-col md:flex-row gap-6">
        {offices.map((office) => (
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
