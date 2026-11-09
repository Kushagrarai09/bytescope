import type { Metadata } from 'next';
import { Providers } from '@/components/providers';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { siteConfig } from '@/lib/site';
import './globals.css';
export const metadata: Metadata = { metadataBase: new URL(siteConfig.url), title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` }, description: siteConfig.description, openGraph: { title: siteConfig.name, description: siteConfig.description, siteName: siteConfig.name, type: 'website' }, twitter: { card: 'summary_large_image', title: siteConfig.name, description: siteConfig.description } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" suppressHydrationWarning><body><Providers><Header/>{children}<Footer/></Providers></body></html>; }
