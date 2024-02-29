import axios from 'axios';

export const fetchStoryDetails = async (storyId: number): Promise<any> => {
  const response = await axios.get(
    `https://api.storyblok.com/v2/cdn/stories/${storyId}`,
    {
      params: {
        version: 'published',
        token: process.env.STORYBLOK_API_TOKEN,
      },
    }
  );
  return response.data.story;
};
