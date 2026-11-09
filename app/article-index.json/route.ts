import { NextResponse } from 'next/server';
import { getAllArticles } from '@/lib/articles';
export async function GET() { return NextResponse.json(await getAllArticles(), { headers: { 'Cache-Control': 'public, max-age=3600, s-maxage=3600' } }); }
