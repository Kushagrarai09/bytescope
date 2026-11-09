import Link from 'next/link';
export default function NotFound() { return <main className="page-shell not-found"><span className="eyebrow">404 — LOST IN THE STACK</span><h1>This page wandered off.</h1><p>The page you are looking for may have moved or no longer exists.</p><Link href="/" className="text-link">Return to ByteScope ↗</Link></main>; }
