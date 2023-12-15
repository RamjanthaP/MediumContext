import { GridStoryblok, ServiceItemsStoryblok } from '@sb-types';

/**
 * Takes a path and a GridStoryblok and returns a GridStoryblok
 * with the column that matches the title removed.
 */
export const filterOutItemWithSameUrl = (
  currentUrl: string,
  relatedItem: GridStoryblok
): GridStoryblok => {
  // Exit if we are missing a path or columns
  if (!relatedItem.content.columns.length || !currentUrl) return relatedItem;

  const filteredColumns = relatedItem.content.columns.filter(
    (column: ServiceItemsStoryblok) => {
      return column.button_link?.cached_url !== currentUrl;
    }
  );

  return {
    ...relatedItem,
    content: {
      ...relatedItem.content,
      columns: filteredColumns,
    },
  };
};
