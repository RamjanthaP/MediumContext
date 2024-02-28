import axios from 'axios';

export default async function callback(req: any, res: any) {
  const { code } = req.query;
  const clientId = process.env.LINKEDIN_CLIENT_ID;
  const clientSecret = process.env.LINKEDIN_CLIENT_SECRET;
  const redirectUri = process.env.LINKEDIN_REDIRECT_URI;

  try {
    const accessTokenResponse = await axios.post(
      'https://www.linkedin.com/oauth/v2/accessToken',
      {
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
        client_id: clientId,
        client_secret: clientSecret,
      }
    );

    const { access_token } = accessTokenResponse.data;
  } catch (error) {
    res.status(500).json({
      message: 'Error obtaining access token',
    });
  }
}
