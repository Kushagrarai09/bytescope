'use client';
import { ThemeProvider } from '@/components/theme-provider';
import { BookmarkProvider } from '@/components/bookmark-provider';
export function Providers({ children }: { children: React.ReactNode }) { return <ThemeProvider><BookmarkProvider>{children}</BookmarkProvider></ThemeProvider>; }
