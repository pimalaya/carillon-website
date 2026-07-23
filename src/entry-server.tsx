import { renderToString } from 'react-dom/server'

import App from './App'
import { buildStructuredData } from './seo/structuredData'

/*
 * Build-time entry (see prerender.js). Returns the app markup and a head string of
 * JSON-LD, which the prerender step injects into the index.html placeholders.
 */
export function render(): { appHtml: string; headHtml: string } {
  const appHtml = renderToString(<App />)

  const headHtml = buildStructuredData()
    .map((data) => {
      // Escape "<" so a "</script>" inside any string can't break out of the tag.
      const json = JSON.stringify(data).replace(/</g, '\\u003c')
      return `<script type="application/ld+json">${json}</script>`
    })
    .join('\n    ')

  return { appHtml, headHtml }
}
