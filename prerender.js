// Build-time pre-render: render the app to static HTML and inject it (plus the
// JSON-LD head) into dist/index.html, so crawlers get full content without JS.
// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))
const dist = resolve(root, 'dist')

const { render } = await import(
  pathToFileURL(resolve(dist, 'server/entry-server.js')).href
)
const { appHtml, headHtml } = render()

const template = readFileSync(resolve(dist, 'index.html'), 'utf-8')
const html = template
  .replace('<!--app-head-->', headHtml)
  .replace('<!--app-html-->', appHtml)

writeFileSync(resolve(dist, 'index.html'), html)

// The server bundle is a build artefact only; keep it out of the deployed site.
rmSync(resolve(dist, 'server'), { recursive: true, force: true })

console.log('✓ pre-rendered dist/index.html')
