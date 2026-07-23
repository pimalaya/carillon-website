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
          <span className="flow__label">Your account</span>
          <span className="flow__sub">change</span>
        </li>

        <li className="flow__link" aria-hidden="true" />

        <li className="flow__node flow__node--accent">
          <span className="flow__icon" aria-hidden="true">
            {/* bell */}
            <svg width="20" height="20" viewBox="0 -960 960 960" fill="currentColor">
              <path d="M80-560q0-100 44.5-183.5T244-882l47 64q-60 44-95.5 111T160-560H80Zm720 0q0-80-35.5-147T669-818l47-64q75 55 119.5 138.5T880-560h-80ZM160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
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
