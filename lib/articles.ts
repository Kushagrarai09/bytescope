import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import type { ArticleMeta } from './types';
const ARTICLES_DIR = path.join(process.cwd(), 'content', 'articles');
export async function getAllArticles(): Promise<ArticleMeta[]> { const files = await fs.readdir(ARTICLES_DIR); const articles = await Promise.all(files.filter((file) => file.endsWith('.mdx')).map(async (file) => { const source = await fs.readFile(path.join(ARTICLES_DIR, file), 'utf8'); const { data } = matter(source); return { slug: file.replace(/\.mdx$/, ''), ...data } as ArticleMeta; })); return articles.sort((a, b) => b.date.localeCompare(a.date)); }
export async function getArticleMeta(slug: string): Promise<ArticleMeta | null> { try { const source = await fs.readFile(path.join(ARTICLES_DIR, `${slug}.mdx`), 'utf8'); const { data } = matter(source); return { slug, ...data } as ArticleMeta; } catch { return null; } }
export async function getArticleSource(slug: string): Promise<string | null> { try { return await fs.readFile(path.join(ARTICLES_DIR, `${slug}.mdx`), 'utf8'); } catch { return null; } }
