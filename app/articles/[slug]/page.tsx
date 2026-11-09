import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import matter from 'gray-matter';
import { getAllArticles, getArticleSource } from '@/lib/articles';
import { siteConfig } from '@/lib/site';
import { ArticleCard } from '@/components/article-card';
import { BookmarkButton } from '@/components/bookmark-button';
import { ShareButton } from '@/components/share-button';
import { ReadingProgress } from '@/components/reading-progress';
import { ArticleToc } from '@/components/article-toc';

const toc = [
  { id: 'the-short-answer', title: 'The short answer' },
  { id: 'step-1-the-browser-understands-the-url', title: '1. The browser understands the URL' },
  { id: 'step-2-dns-finds-the-server', title: '2. DNS finds the server' },
  { id: 'step-3-a-connection-is-established', title: '3. A connection is established' },
  { id: 'step-4-the-browser-sends-an-http-request', title: '4. The browser sends a request' },
  { id: 'step-5-the-server-builds-a-response', title: '5. The server responds' },
  { id: 'step-6-the-browser-renders-the-page', title: '6. The browser renders the page' },
  { id: 'where-cdns-fit-in', title: 'Where CDNs fit in' },
  { id: 'putting-it-all-together', title: 'Putting it all together' },
];
export async function generateStaticParams() { const articles = await getAllArticles(); return articles.map((article) => ({ slug: article.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const articles = await getAllArticles(); const article = articles.find((item) => item.slug === slug); if (!article) return {}; return { title: article.title, description: article.description, openGraph: { title: article.title, description: article.description, images: [article.cover], type: 'article', publishedTime: article.date, authors: [siteConfig.author] } }; }
export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const source = await getArticleSource(slug); if (!source) notFound();
  const { content, data } = matter(source);
  const { content: body } = await compileMDX({ source: content, options: { mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug, rehypeHighlight] } } });
  const all = await getAllArticles(); const article = all.find((item) => item.slug === slug)!; const related = all.filter((item) => item.slug !== slug && (item.categorySlug === article.categorySlug || item.tags.some((tag) => article.tags.includes(tag)))).slice(0, 2);
  return <><ReadingProgress/><article className="article-page page-shell"><div className="article-breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/explore">Explore</Link><span>/</span><Link href={`/categories/${article.categorySlug}`}>{article.category}</Link></div><header className="article-header"><span className="eyebrow">{article.category.toUpperCase()}</span><h1>{article.title}</h1><p className="article-deck">{article.description}</p><div className="article-byline"><span>By {article.author}</span><span>·</span><time dateTime={article.date}>{new Date(`${article.date}T12:00:00`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time><span>·</span><span>{article.readTime}</span></div><div className="article-actions"><BookmarkButton slug={slug}/><ShareButton title={article.title}/></div></header><div className="article-cover" style={{ backgroundImage: `url("${article.cover}")` }} role="img" aria-label={`Cover image for ${article.title}`}/><div className="article-layout"><ArticleToc items={toc}/><div className="article-content prose">{body}<div className="article-endnote"><span className="eyebrow">END OF ARTICLE</span><p>Thanks for reading ByteScope. Stay curious, keep exploring.</p><Link href="/explore" className="text-link">Discover more stories ↗</Link></div></div></div></article>{related.length > 0 && <section className="section page-shell related-section"><div className="section-heading"><div><span className="eyebrow">KEEP EXPLORING</span><h2>Related stories</h2></div></div><div className="article-grid">{related.map((item) => <ArticleCard key={item.slug} article={item}/>)}</div></section>}</>;
}
