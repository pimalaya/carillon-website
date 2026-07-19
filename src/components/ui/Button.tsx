import type { ReactNode } from 'react'

import './Button.css'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'lg'

interface ButtonProps {
  href: string
  children: ReactNode
  variant?: Variant
  size?: Size
  /* Opens in a new tab with safe rel attributes. */
  external?: boolean
  className?: string
}

/*
 * All calls to action on the page are links (this is a static marketing site),
 * so Button renders an anchor rather than a <button>.
 */
export function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  external = false,
  className = '',
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`btn btn--${variant} btn--${size} ${className}`.trim()}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  )
}
