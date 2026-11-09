'use client';
import { Bookmark } from 'lucide-react';
import { useBookmarks } from '@/components/bookmark-provider';
export function BookmarkButton({ slug }: { slug: string }) { const { isBookmarked, toggleBookmark } = useBookmarks(); const saved = isBookmarked(slug); return <button className={`bookmark-button ${saved ? 'is-saved' : ''}`} onClick={() => toggleBookmark(slug)} aria-pressed={saved}><Bookmark size={16} fill={saved ? 'currentColor' : 'none'}/><span>{saved ? 'Saved' : 'Save'}</span></button>; }
