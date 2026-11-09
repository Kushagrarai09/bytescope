'use client';
import { useState } from 'react';
import { Share2, Check, Link2 } from 'lucide-react';
export function ShareButton({ title }: { title: string }) { const [copied, setCopied] = useState(false); async function share() { const url = window.location.href; if (navigator.share) { try { await navigator.share({ title, url }); return; } catch { /* Share sheet dismissed; fall back to copy. */ } } try { await navigator.clipboard.writeText(url); setCopied(true); window.setTimeout(() => setCopied(false), 1800); } catch { setCopied(false); } } return <button className="share-button" onClick={share}>{copied ? <Check size={16}/> : <Share2 size={16}/>}<span>{copied ? 'Link copied' : 'Share'}</span>{!navigator.share && <Link2 size={13}/>}</button>; }
