import './SignalFlow.css'

/*
 * Hero illustration: a change on a remote becoming a content-free webhook, with
 * a sample payload so "content-free" is concrete.
 */
export function SignalFlow() {
  return (
    <div className="flow" role="img" aria-label="A change in your inbox becomes a signed, content-free webhook.">
      <ol className="flow__chain">
        <li className="flow__node">
          <span className="flow__icon" aria-hidden="true">
            {/* envelope */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M4 7l8 6 8-6" />
            </svg>
          </span>
          <span className="flow__label">Your inbox</span>
          <span className="flow__sub">change</span>
        </li>

        <li className="flow__link" aria-hidden="true" />

        <li className="flow__node flow__node--accent">
          <span className="flow__icon" aria-hidden="true">
            {/* bell */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3.6a1.3 1.3 0 0 0-1.3 1.3v.5A4.7 4.7 0 0 0 7.3 10c0 2.7-.8 3.85-1.36 4.5-.4.48-.06 1.25.56 1.25h11c.62 0 .96-.77.56-1.25C17.5 13.85 16.7 12.7 16.7 10a4.7 4.7 0 0 0-3.4-4.6v-.5A1.3 1.3 0 0 0 12 3.6Z" />
            </svg>
          </span>
          <span className="flow__label">Carillon</span>
          <span className="flow__sub">holds IDLE</span>
        </li>

        <li className="flow__link" aria-hidden="true" />

        <li className="flow__node">
          <span className="flow__icon" aria-hidden="true">
            {/* webhook / arrow into a box */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M4 12h11" />
              <path d="M11 8l4 4-4 4" />
              <rect x="16.5" y="6" width="3.5" height="12" rx="1.2" />
            </svg>
          </span>
          <span className="flow__label">Your webhook</span>
          <span className="flow__sub">or ntfy</span>
        </li>
      </ol>

      <pre className="flow__payload">
        <span className="flow__comment"># signed, content-free</span>
        {'\n'}
        {'{'}
        {'\n'}  <span className="flow__key">"id"</span>:      <span className="flow__str">"9f2c1e…"</span>,
        {'\n'}  <span className="flow__key">"account"</span>: <span className="flow__str">"fastmail"</span>,
        {'\n'}  <span className="flow__key">"event"</span>:   <span className="flow__str">"new"</span>,
        {'\n'}  <span className="flow__key">"uid"</span>:     <span className="flow__num">48213</span>
        {'\n'}
        {'}'}
      </pre>
    </div>
  )
}
