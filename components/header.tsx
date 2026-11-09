'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Bookmark, Menu } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { siteConfig } from '@/lib/site';
export function Header() { const pathname = usePathname(); return <header className="site-header" id="top"><div className="header-inner page-shell"><Link href="/" className="wordmark">ByteScope<span>.</span></Link><nav className="primary-nav" aria-label="Main navigation">{siteConfig.nav.slice(1).map((item) => <Link key={item.href} href={item.href} className={pathname === item.href ? 'active' : ''}>{item.label}</Link>)}</nav><div className="header-actions"><Link href="/search" aria-label="Search" className="header-icon"><Search size={17}/></Link><Link href="/bookmarks" aria-label="Bookmarks" className="header-icon"><Bookmark size={17}/></Link><ThemeToggle/><button className="mobile-menu" aria-label="Open menu"><Menu size={19}/></button></div></div></header>; }
