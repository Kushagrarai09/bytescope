import { describe, expect, it } from 'vitest';
import { categories, siteConfig } from '../lib/site';
import { projects } from '../lib/projects';
describe('ByteScope content configuration', () => {
  it('has a stable publication identity', () => { expect(siteConfig.name).toBe('ByteScope'); expect(siteConfig.url).toMatch(/^https?:\/\//); });
  it('uses unique category slugs', () => { const slugs = categories.map((category) => category.slug); expect(new Set(slugs).size).toBe(slugs.length); });
  it('uses unique project slugs', () => { const slugs = projects.map((project) => project.slug); expect(new Set(slugs).size).toBe(slugs.length); });
});
