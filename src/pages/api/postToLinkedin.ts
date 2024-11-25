import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

// TODO: Move to src/app/api
export default async function postToLinkedIn(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  const { text } = req.body;
  const accessToken = process.env.ACCESSTOKEN;

  if (!accessToken) {
    return res
      .status(500)
      .json({ error: 'LinkedIn access token is not configured.' });
  }

  try {
    const response = await axios.post(
      'https://api.linkedin.com/v2/ugcPosts',
      {
        author: `urn:li:organization:68508676`,
        lifecycleState: 'PUBLISHED',
        specificContent: {
          'com.linkedin.ugc.ShareContent': {
            shareCommentary: {
              text: text,
            },
            shareMediaCategory: 'NONE',
          },
        },
        visibility: {
          'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC',
        },
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
          'X-Restli-Protocol-Version': '2.0.0',
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error posting to LinkedIn:', error);
    res.status(500).json({ error: 'Failed to post to LinkedIn.' });
  }
}
