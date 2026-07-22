import './TrustBar.css'

const items = [
  'Content-free',
  'Signed webhooks',
  'Read-only by design',
  'Self-hostable',
  'Open source',
  'Battery-free push',
]

/* A quiet strip of trust cues between the hero and the first content section. */
export function TrustBar() {
  return (
    <div className="trustbar">
      <div className="container trustbar__inner">
        {items.map((item) => (
          <span key={item} className="trustbar__item">
            <span className="trustbar__dot" aria-hidden="true" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
