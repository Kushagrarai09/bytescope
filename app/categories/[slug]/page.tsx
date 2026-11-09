import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { categories } from '@/lib/site';
import { getAllArticles } from '@/lib/articles';
import { ArticleCard } from '@/components/article-card';
export async function generateStaticParams() { return categories.map((category) => ({ slug: category.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const category = categories.find((item) => item.slug === slug); return category ? { title: category.name, description: category.description } : {}; }
export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const category = categories.find((item) => item.slug === slug); if (!category) notFound(); const articles = (await getAllArticles()).filter((article) => article.categorySlug === slug); return <section className="page-shell page-section"><div className="page-intro"><Link href="/categories" className="back-link">← All categories</Link><span className="eyebrow">TOPIC</span><h1>{category.name.split(' ')[0]} <em>{category.name.split(' ').slice(1).join(' ')}</em></h1><p>{category.description}</p></div>{articles.length ? <div className="article-grid">{articles.map((article) => <ArticleCard key={article.slug} article={article}/>)}</div> : <div className="empty-state"><h2>More stories are on the way.</h2><p>There are no published articles in this category yet.</p></div>}</section>; }
