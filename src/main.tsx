import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'

import App from './App'

import './styles/theme.css'
import './styles/global.css'

// The page is pre-rendered to static HTML at build time (see prerender.js), so we
// hydrate the existing markup rather than rendering from scratch.
hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <App />
  </StrictMode>,
)
