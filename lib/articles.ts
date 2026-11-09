import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import type { ArticleMeta } from './types';
const ARTICLES_DIR = path.join(process.cwd(), 'content', 'articles');
function toArticleMeta(file:string,data:Record<string,unknown>):ArticleMeta {
 const slug=file.replace(/\.mdx?$/,''); const tags=Array.isArray(data.tags)?data.tags.map(String):[];
 return {slug,title:String(data.title??slug.replace(/-/g,' ')),description:String(data.description??''),category:String(data.category??'Uncategorised'),categorySlug:String(data.categorySlug??'uncategorised'),date:typeof data.date==='string'?data.date:'1970-01-01',updatedAt:typeof data.updatedAt==='string'?data.updatedAt:undefined,author:String(data.author??'Kushagra Rai'),readTime:String(data.readTime??'5 min read'),cover:String(data.cover??''),featured:data.featured===true,draft:data.draft===true,tags};
}
export async function getAllArticles(options:{includeDrafts?:boolean}={}):Promise<ArticleMeta[]> {
 const files=await fs.readdir(ARTICLES_DIR);
 const articles=await Promise.all(files.filter(f=>/\.mdx?$/.test(f)).map(async file=>{const source=await fs.readFile(path.join(ARTICLES_DIR,file),'utf8');const {data}=matter(source);return toArticleMeta(file,data as Record<string,unknown>);}));
 return articles.filter(a=>options.includeDrafts||!a.draft).sort((a,b)=>b.date.localeCompare(a.date));
}
export async function getArticleMeta(slug:string):Promise<ArticleMeta|null>{return (await getAllArticles()).find(a=>a.slug===slug)??null;}
export async function getArticleSource(slug:string):Promise<string|null>{if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))return null;try{const source=await fs.readFile(path.join(ARTICLES_DIR,`${slug}.mdx`),'utf8');const {data}=matter(source);return data.draft===true?null:source;}catch{return null;}}
export async function getAllTags():Promise<{name:string;slug:string;count:number}[]>{const counts=new Map<string,number>();for(const article of await getAllArticles())for(const tag of article.tags)counts.set(tag,(counts.get(tag)??0)+1);return [...counts.entries()].map(([name,count])=>({name,count,slug:name.toLowerCase().trim().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')})).sort((a,b)=>a.name.localeCompare(b.name));}
export async function getArchiveYears():Promise<string[]>{return [...new Set((await getAllArticles()).map(a=>a.date.slice(0,4)))].sort().reverse();}