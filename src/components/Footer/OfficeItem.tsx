import { BaseProps } from "../PropsHelpers";

export interface OfficeItemProps extends BaseProps {
  title: string;
  address: {
    street: string;
    zip: string;
    city: string;
  };
}
export const OfficeItem = ({ title, address, className }: OfficeItemProps) => (
  <div
    className="flex-grow"
    itemScope
    itemType="https://schema.org/LocalBusiness"
  >
    <h2 className="text-xl font-bold" itemProp="name">
      {title}
    </h2>
    <div
      className="text-md"
      itemProp="address"
      itemScope
      itemType="https://schema.org/PostalAddress"
    >
      <div itemProp="streetAddress">{address.street}</div>
      <div itemProp="postalCode">{address.zip}</div>
      <div itemProp="addressLocality">{address.city}</div>
    </div>
  </div>
);
