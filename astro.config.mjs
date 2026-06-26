import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

const BASE = '/fruitful-astro-site';

// Prefix root-absolute links inside MDX/Markdown content with the deploy base
// so blog post links resolve correctly when served from a subpath.
function rehypeBaseLinks() {
  return (tree) => {
    const visit = (node) => {
      if (
        node.type === 'element' &&
        node.tagName === 'a' &&
        node.properties &&
        typeof node.properties.href === 'string'
      ) {
        const href = node.properties.href;
        if (
          href.startsWith('/') &&
          !href.startsWith('//') &&
          href !== BASE &&
          !href.startsWith(BASE + '/')
        ) {
          node.properties.href = BASE + href;
        }
      }
      if (node.children) node.children.forEach(visit);
    };
    visit(tree);
  };
}

export default defineConfig({
  site: 'https://paullydca.github.io',
  base: BASE + '/',
  trailingSlash: 'ignore',
  integrations: [
    mdx({ rehypePlugins: [rehypeBaseLinks] }),
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
});
