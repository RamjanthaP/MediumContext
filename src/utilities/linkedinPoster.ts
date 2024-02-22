import axios from 'axios';

export const postContentToLinkedIn = async (
  text: string,
  imageUrl: string | null
): Promise<void> => {
  const accessToken = process.env.ACCESSTOKEN;
  if (!accessToken) throw new Error('LinkedIn access token is not configured.');

  // Uploading image and getting asset ID if imageUrl is provided
  let mediaAssetId = null;
  if (imageUrl) {
    mediaAssetId = await uploadImageToLinkedIn(imageUrl, accessToken);
  }
  const payload = {
    author: `urn:li:organization:68508676`,
    lifecycleState: 'PUBLISHED',
    specificContent: {
      'com.linkedin.ugc.ShareContent': {
        shareCommentary: { text },
        shareMediaCategory: mediaAssetId ? 'IMAGE' : 'NONE',
        ...(mediaAssetId && {
          media: [
            {
              status: 'READY',
              media: mediaAssetId,
            },
          ],
        }),
      },
    },
    visibility: { 'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC' },
  };

  await axios.post('https://api.linkedin.com/v2/ugcPosts', payload, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      'X-Restli-Protocol-Version': '2.0.0',
    },
  });
};
async function uploadImageToLinkedIn(imageUrl: string, accessToken: string) {
  const registerResponse = await axios.post(
    'https://api.linkedin.com/v2/assets?action=registerUpload',
    {
      registerUploadRequest: {
        recipes: ['urn:li:digitalmediaRecipe:feedshare-image'],
        owner: 'urn:li:organization:68508676',
        serviceRelationships: [
          {
            relationshipType: 'OWNER',
            identifier: 'urn:li:userGeneratedContent',
          },
        ],
      },
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    }
  );

  const uploadUrl =
    registerResponse.data.value.uploadMechanism[
      'com.linkedin.digitalmedia.uploading.MediaUploadHttpRequest'
    ].uploadUrl;
  const asset = registerResponse.data.value.asset;

  const imageResponse = await axios.get(imageUrl, {
    responseType: 'arraybuffer',
  });
  const imageBuffer = Buffer.from(imageResponse.data, 'binary');

  await axios.put(uploadUrl, imageBuffer, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'image/jpg', // match the content type of image (e.g., image/png)
      'Content-Length': imageBuffer.length,
    },
  });

  return asset;
}
