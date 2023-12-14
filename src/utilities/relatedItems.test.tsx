import { GridStoryblok } from '@sb-types';

import { filterOutItemWithSameUrl } from './relatedItems';

const relatedItem: GridStoryblok = {
  _uid: '123',
  component: 'grid',
  content: {
    columns: [
      {
        title: 'Column 1',
        content: 'Content 1',
      },
      {
        title: 'Column 2',
        content: 'Content 2',
      },
      {
        title: 'Column 3',
        content: 'Content 3',
      },
    ],
  },
};

describe('filterRelatedItems', () => {
  it('filters out columns with matching title', () => {
    const pageTitle = 'Column 2';

    const expectedFilteredColumns: GridStoryblok = {
      _uid: '123',
      component: 'grid',
      content: {
        columns: [
          {
            title: 'Column 1',
            content: 'Content 1',
          },
          {
            title: 'Column 3',
            content: 'Content 3',
          },
        ],
      },
    };
    const result = filterOutItemWithSameUrl(pageTitle, relatedItem);
    expect(result).toEqual(expectedFilteredColumns);
  });

  it('returns the original relatedItem if columns or path is missing', () => {
    const pageTitle = 'Page Title';

    const result = filterOutItemWithSameUrl(pageTitle, relatedItem);
    expect(result).toEqual(relatedItem);
  });
});
