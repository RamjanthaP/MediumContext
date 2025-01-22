export interface BaseLink {
  text: string;
  url: string;
}

export interface AssetProp {
  url: string;
  alt: string;
}

export type HeadingElementTag = 'h1' | 'h2' | 'h3' | 'h4' | 'div';

export interface StoryblokWebhookCall {
  action: string;
  story: Story;
}

export interface Story {
  name: string;
  content: {
    caption?: string;
    // Define other properties based on Storyblok content schema
  };
  // Add any other relevant properties of a Storyblok story
}
