// Runs after `vite build`.
// 1. Copies index.html into a folder for every page, so each URL answers with a
//    normal "200 OK" on GitHub Pages instead of the 404 fallback. Search engines
//    skip pages that answer 404.
// 2. Writes sitemap.xml listing every page.
import { cpSync, mkdirSync, writeFileSync } from 'node:fs'
import { projects } from '../src/data/projects.js'

const SITE = 'https://varshil25.github.io/portfolio'
const routes = ['', 'projects', 'experience', 'research', 'resume', ...projects.map((p) => `projects/${p.slug}`)]

for (const route of routes.filter(Boolean)) {
  mkdirSync(`dist/${route}`, { recursive: true })
  cpSync('dist/index.html', `dist/${route}/index.html`)
}
cpSync('dist/index.html', 'dist/404.html')

const today = new Date().toISOString().slice(0, 10)
const urls = routes
  .map((route) => `  <url><loc>${SITE}/${route}${route ? '/' : ''}</loc><lastmod>${today}</lastmod></url>`)
  .join('\n')
writeFileSync(
  'dist/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
)
console.log(`postbuild: ${routes.length} pages, sitemap.xml written`)
