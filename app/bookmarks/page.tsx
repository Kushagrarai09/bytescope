"use client";
import { useBookmarks } from '@/components/bookmark-provider';
import { ArticleCard } from '@/components/article-card';
import { useMemo } from 'react';
import { getArticleSummaries } from '@/lib/articles-client';
export default function BookmarksPage() { const { bookmarks } = useBookmarks(); const saved = useMemo(() => getArticleSummaries().filter((article) => bookmarks.includes(article.slug)), [bookmarks]); return <section className="page-shell page-section"><div className="page-intro"><span className="eyebrow">YOUR READING LIST</span><h1>Saved for <em>later.</em></h1><p>Stories you have bookmarked, kept close for another moment of curiosity.</p></div>{saved.length ? <div className="article-grid">{saved.map((article) => <ArticleCard key={article.slug} article={article}/>)}</div> : <div className="empty-state"><h2>No bookmarks yet</h2><p>Save an article while reading and it will appear here.</p><a className="text-link" href="/explore">Explore articles ↗</a></div>}</section>; }
