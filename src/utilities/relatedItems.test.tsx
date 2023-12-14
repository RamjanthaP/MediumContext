import { GridStoryblok } from '@sb-types';

import { filterOutItemWithSameUrl } from './relatedItems';

describe('filterOutItemWithSameUrl', () => {
  it('returns the original relatedItem if columns or path is missing', () => {
    const currentUrl = 'https://example.com';
    const relatedItem: GridStoryblok = {
      _uid: '123',
      component: 'grid',
      content: {
        columns: [],
      },
    };

    const result = filterOutItemWithSameUrl(currentUrl, relatedItem);
    expect(result).toEqual(relatedItem);
  });

  it('filters out columns with matching URL', () => {
    const currentUrl = 'https://example.com';
    const relatedItem: GridStoryblok = {
      _uid: '123',
      component: 'grid',
      content: {
        columns: [
          {
            title: 'Column 1',
            button_link: {
              cached_url: 'https://example.com',
            },
          },
          {
            title: 'Column 2',
            button_link: {
              cached_url: 'https://example.com',
            },
          },
          {
            title: 'Column 3',
            button_link: {
              cached_url: 'https://example.com/other',
            },
          },
        ],
      },
    };

    const expectedFilteredColumns: GridStoryblok = {
      _uid: '123',
      component: 'grid',
      content: {
        columns: [
          {
            title: 'Column 3',
            button_link: {
              cached_url: 'https://example.com/other',
            },
          },
        ],
      },
    };

    const result = filterOutItemWithSameUrl(currentUrl, relatedItem);
    expect(result).toEqual(expectedFilteredColumns);
  });

  it('returns the original relatedItem if currentUrl is empty', () => {
    const currentUrl = '';
    const relatedItem: GridStoryblok = {
      _uid: '123',
      component: 'grid',
      content: {
        columns: [
          {
            title: 'Column 1',
            button_link: {
              cached_url: 'https://example.com',
            },
          },
          {
            title: 'Column 2',
            button_link: {
              cached_url: 'https://example.com',
            },
          },
          {
            title: 'Column 3',
            button_link: {
              cached_url: 'https://example.com/other',
            },
          },
        ],
      },
    };

    const result = filterOutItemWithSameUrl(currentUrl, relatedItem);
    expect(result).toEqual(relatedItem);
  });
});
