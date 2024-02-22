import { NextApiRequest, NextApiResponse } from 'next';

import { postContentToLinkedIn } from '@/utilities/linkedinPoster';
import { fetchStoryDetails } from '@/utilities/storyblokService';

export default async function storyblokToLinkedInWebhook(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== 'POST') {
    res.status(405).end('Method Not Allowed');
    return;
  }

  const { story_id } = req.body;

  if (!story_id) {
    console.error('Story ID is missing from the webhook payload');
    return res
      .status(400)
      .json({ error: 'Bad request: Missing required story_id property' });
  }

  try {
    const story = await fetchStoryDetails(story_id);
    if (
      !story ||
      !story.content ||
      !story.content.block ||
      story.content.block.length === 0
    ) {
      console.error('Story content is missing or not in the expected format');
      return res
        .status(500)
        .json({ error: 'Story content missing or malformed' });
    }

    const lastBlock = story.content.block[story.content.block.length - 1];
    let text = `${lastBlock.title}\n${lastBlock.caption}`;

    const imageUrl =
      lastBlock.image && lastBlock.image.filename
        ? lastBlock.image.filename
        : null;

    if (lastBlock.link?.url) {
      text += `\nLäs mer: ${lastBlock.link.url}`;
    } else if (lastBlock.link?.cached_url) {
      text += `\nLäs mer: ${lastBlock.link.cached_url}`;
    }

    await postContentToLinkedIn(text, imageUrl);

    res
      .status(200)
      .json({ message: 'Post published to LinkedIn successfully' });
  } catch (error) {
    console.error('Error posting to LinkedIn or fetching story:', error);
    res
      .status(500)
      .json({ error: 'Failed to fetch story details or post to LinkedIn' });
  }
}
