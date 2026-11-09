import type { Metadata } from 'next';
import { SearchClient } from '@/components/search-client';
export const metadata: Metadata = { title: 'Search', description: 'Search ByteScope articles by title, topic and keyword.' };
export default function SearchPage() { return <section className="page-shell page-section"><div className="page-intro"><span className="eyebrow">FIND SOMETHING INTERESTING</span><h1>Search the <em>journal.</em></h1><p>One idea can lead to another. Find a topic, concept or question to explore.</p></div><SearchClient/></section>; }
