'use client';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';
export function ThemeToggle() { const { theme, resolvedTheme, setTheme } = useTheme(); const next = theme === 'system' ? 'dark' : theme === 'dark' ? 'light' : 'system'; const label = theme === 'system' ? 'System theme' : theme === 'dark' ? 'Dark theme' : 'Light theme'; return <button className="theme-toggle" onClick={() => setTheme(next)} aria-label={`Current: ${label}. Switch theme.`} title={label}>{theme === 'system' ? <Monitor size={17}/> : resolvedTheme === 'dark' ? <Moon size={17}/> : <Sun size={17}/>}</button>; }
