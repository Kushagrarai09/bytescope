import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getProject } from '@/lib/projects';
import { ArrowUpRight, Github } from 'lucide-react';
export async function generateStaticParams() { const { projects } = await import('@/lib/projects'); return projects.map((project) => ({ slug: project.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const project = getProject(slug); return project ? { title: project.name, description: project.description } : {}; }
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const project = getProject(slug); if (!project) notFound(); return <section className="page-shell page-section"><Link href="/projects" className="back-link">← All projects</Link><div className="project-detail"><span className="eyebrow">{project.category} · {project.status}</span><h1>{project.name}</h1><p className="project-summary">{project.summary}</p><p>{project.description}</p><h2>Technology stack</h2><div className="tag-list">{project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div>{project.github && <a className="button button-secondary" href={project.github} target="_blank" rel="noreferrer"><Github size={16}/> View source <ArrowUpRight size={16}/></a>}</div></section>; }
