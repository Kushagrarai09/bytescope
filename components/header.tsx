'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Bookmark, Menu, Search, X } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { siteConfig } from '@/lib/site';

const secondaryLinks = [
  ...siteConfig.nav.filter((item) => item.href !== '/'),
  { label: 'Tags', href: '/tags' },
  { label: 'Archive', href: '/archive' },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="site-header" id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="header-inner page-shell">
        <Link href="/" className="wordmark" aria-label="ByteScope home" onClick={() => setMenuOpen(false)}>
          ByteScope<span>.</span>
        </Link>

        <nav className="primary-nav" aria-label="Main navigation">
          {secondaryLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={isActive(item.href) ? 'active' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link href="/search" aria-label="Search articles" className="header-icon"><Search size={18} /></Link>
          <Link href="/bookmarks" aria-label="Saved articles" className="header-icon"><Bookmark size={18} /></Link>
          <ThemeToggle />
          <button
            className="mobile-menu"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation">
          {secondaryLinks.map((item) => (
            <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? 'page' : undefined} onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href="/search" onClick={() => setMenuOpen(false)}>Search</Link>
          <Link href="/bookmarks" onClick={() => setMenuOpen(false)}>Bookmarks</Link>
        </nav>
      )}
    </header>
  );
}
