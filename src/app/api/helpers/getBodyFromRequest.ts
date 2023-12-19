import type { NextApiRequest } from 'next';

export async function getBodyFromRequest<ExpectedReturn>(
  req: NextApiRequest
): Promise<ExpectedReturn> {
  return JSON.parse(await new Response(req.body).text()) as ExpectedReturn;
}
