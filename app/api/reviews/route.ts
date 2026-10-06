import { NextResponse } from 'next/server';
import { REVIEWS } from '@/lib/data/reviews';

export async function GET() {
  return NextResponse.json(REVIEWS);
}
