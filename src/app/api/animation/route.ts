import { availableAnimations } from '@/components/ServiceItem/animations/available-animations';
export async function GET(request: Request) {
  return Response.json(availableAnimations, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
