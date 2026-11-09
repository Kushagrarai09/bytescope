export type ArticleMeta = { slug: string; title: string; description: string; category: string; categorySlug: string; date: string; author: string; readTime: string; cover: string; featured?: boolean; tags: string[] };
export type Project = { slug: string; name: string; summary: string; description: string; stack: string[]; status: string; github?: string; category: string };
