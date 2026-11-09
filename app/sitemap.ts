import type { MetadataRoute } from 'next';
import { getAllArticles } from '@/lib/articles';
import { projects } from '@/lib/projects';
import { categories, siteConfig } from '@/lib/site';
export default async function sitemap(): Promise<MetadataRoute.Sitemap> { const root = ['', '/explore', '/categories', '/projects', '/about', '/search', '/bookmarks', '/privacy']; const articles = await getAllArticles(); return [...root.map((route) => ({ url: `${siteConfig.url}${route}`, lastModified: new Date() })), ...categories.map((category) => ({ url: `${siteConfig.url}/categories/${category.slug}`, lastModified: new Date() })), ...projects.map((project) => ({ url: `${siteConfig.url}/projects/${project.slug}`, lastModified: new Date() })), ...articles.map((article) => ({ url: `${siteConfig.url}/articles/${article.slug}`, lastModified: new Date(article.date) }))]; }
