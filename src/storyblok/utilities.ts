// Needed in order to use the SVGs from Storyblok in the project
// Storyblok don't provide CORS headers for their SVGs
export const getStoryblokCorsUrl = (url: string): string => {
  return url.replace("//a.storyblok.com", "//a2.storyblok.com");
};
