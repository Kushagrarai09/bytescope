import type { Metadata } from 'next';
import { getAllArticles } from '@/lib/articles';
import { ArticleCard } from '@/components/article-card';
export const metadata: Metadata = { title: 'Explore', description: 'Browse every story published on ByteScope.' };
export default async function ExplorePage() { const articles = await getAllArticles(); return <section className="page-shell page-section"><div className="page-intro"><span className="eyebrow">THE BYTESCOPE JOURNAL</span><h1>Ideas worth <em>exploring.</em></h1><p>Guides, explainers and perspectives for the endlessly curious.</p></div><div className="explore-toolbar"><span>{articles.length} published stories</span><a className="text-link" href="/search">Search the journal ↗</a></div><div className="article-grid">{articles.map((article) => <ArticleCard key={article.slug} article={article}/>)}</div></section>; }
