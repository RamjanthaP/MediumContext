import axios from 'axios';
import { parseCookies } from 'nookies';

// You might need to install nookies

export default async function handler(req: any, res: any) {
  if (req.method === 'POST') {
    // access token is sent in the request's cookies
    const cookies = parseCookies({ req });
    const accessToken = cookies.access_token;

    const content = req.body; // structure must match LinkedIn's requirements

    try {
      const response = await axios.post(
        'https://api.linkedin.com/v2/shares',
        {
          // request payload according to LinkedIn's API documentation
          content: {
            title: content.title,
            text: content.text,
            // more fields if needed
          },
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      res.status(200).json({ data: response.data });
    } catch (error) {
      console.error('Failed to post to LinkedIn:', error);
      res.status(500).json({ error: 'Failed to post to LinkedIn' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
