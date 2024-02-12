import axios from 'axios';
import { serialize } from 'cookie';

export default async function handler(req: any, res: any) {
  const { code } = req.query;
  try {
    const tokenResponse = await axios.post(
      'https://www.linkedin.com/oauth/v2/accessToken',
      {
        grant_type: 'authorization_code',
        code,
        redirect_uri: process.env.LINKEDIN_REDIRECT_URI,
        client_id: process.env.LINKEDIN_CLIENT_ID,
        client_secret: process.env.LINKEDIN_CLIENT_SECRET,
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    const { access_token } = tokenResponse.data;

    // access token in a secure, httpOnly cookie
    res.setHeader(
      'Set-Cookie',
      serialize('access_token', access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24, // 24 hours
      })
    );

    // Redirect to a confirmation page or home page after successful authentication
    res.redirect('/');
  } catch (error) {
    console.error('Error obtaining access token:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
