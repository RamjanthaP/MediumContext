import { ContactFooterStoryblok } from '@sb-types';

import { mapOfficeDTOtoData } from './Footer';

describe('mapOfficeDTOtoData', () => {
  it('maps office DTO to data correctly', () => {
    const dto: ContactFooterStoryblok = {
      _uid: '123',
      component: 'contact_footer',
      content: {
        offices: [
          {
            city: 'New York',
            streetadress: '123 Main St',
            zip: '12345',
          },
          {
            city: 'London',
            streetadress: '456 Park Ave',
            zip: '67890',
          },
        ],
      },
    };

    const expectedData = [
      {
        title: 'New York',
        address: {
          street: '123 Main St',
          zip: '12345',
          city: 'New York',
        },
      },
      {
        title: 'London',
        address: {
          street: '456 Park Ave',
          zip: '67890',
          city: 'London',
        },
      },
    ];

    const result = mapOfficeDTOtoData(dto);
    expect(result).toEqual(expectedData);
  });
});
