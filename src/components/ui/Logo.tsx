import './Logo.css'

/* Carillon wordmark: bell glyph beside the name; onDark swaps the bell fill for the footer. */
export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <span className={`logo ${onDark ? 'logo--on-dark' : ''}`.trim()}>
      <svg
        className="logo__bell"
        width="26"
        height="26"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 4.4a1.4 1.4 0 0 0-1.4 1.4v.5A4.9 4.9 0 0 0 7.1 11c0 2.8-.8 4-1.4 4.7-.44.52-.08 1.35.6 1.35h11.4c.67 0 1.03-.83.6-1.35-.6-.72-1.4-1.9-1.4-4.7a4.9 4.9 0 0 0-3.5-4.7v-.5A1.4 1.4 0 0 0 12 4.4Z" />
        <path
          className="logo__clapper"
          d="M10.3 18.1a1.7 1.7 0 0 0 3.4 0"
          fill="none"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
      <span className="logo__word">Carillon</span>
    </span>
  )
}
