import { Fragment } from 'react'
import './TrustBar.css'

const items = [
  'Content-free',
  'Signed webhooks',
  'Read-only by design',
  'Self-hostable',
  'Open source',
  'No background app',
]

/* Trust cues between the hero and the first content section. */
export function TrustBar() {
  return (
    <div className="trustbar">
      <div className="container trustbar__inner">
        {items.map((item, i) => (
          <Fragment key={item}>
            {i > 0 && (
              <span className="trustbar__sep" aria-hidden="true">
                ·
              </span>
            )}
            <span className="trustbar__item">{item}</span>
          </Fragment>
        ))}
      </div>
    </div>
  )
}
