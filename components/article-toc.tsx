'use client';
import { List } from 'lucide-react';
type TocItem = { id: string; title: string };
export function ArticleToc({ items }: { items: TocItem[] }) { return <aside className="article-toc"><div className="toc-heading"><List size={15}/><span>IN THIS ARTICLE</span></div><nav>{items.map((item) => <a href={`#${item.id}`} key={item.id}>{item.title}</a>)}</nav></aside>; }
