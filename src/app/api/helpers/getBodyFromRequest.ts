export async function getBodyFromRequest<ExpectedReturn>(
  req: Request
): Promise<ExpectedReturn> {
  return JSON.parse(await new Response(req.body).text()) as ExpectedReturn;
}
