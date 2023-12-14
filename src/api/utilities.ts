/**
 * Replaces a property in an object with a new value
 */
// TODO: Make this work or remove it
export function replaceProperty<T, K extends keyof T>(
  obj: T,
  propertyKey: K,
  newValue: T[K]
): T {
  return {
    ...obj,
    [propertyKey]: newValue,
  };
}
/**
 * Checks if a story has a relation for a specific property on content
 */
// TODO: Make this work or remove it
export function storyHasRelationForProp(
  storyData: {
    rels: { uuid: string }[];
    story: { content: { [key: string]: unknown } };
  },
  key: string
) {
  return (
    storyData.rels.length &&
    storyData.rels.at(0)?.uuid === storyData.story.content[key]
  );
}
