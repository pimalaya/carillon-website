import { useEffect, useLayoutEffect } from 'react'

// useLayoutEffect warns during server render; fall back to useEffect there. The
// hook's body is browser-only anyway, and effects don't run during pre-render.
const useIsomorphicLayoutEffect =
  typeof document !== 'undefined' ? useLayoutEffect : useEffect

/*
 * One-shot scroll reveal. Each content block fades and rises in the first time it
 * scrolls into view, then stays — the observer unwatches it, so scrolling back up
 * never re-animates or hides it. Cards sharing a row cascade left-to-right
 * (0ms, 100ms, 200ms…) via a per-element `--reveal-delay`.
 *
 * It runs in every browser: a one-shot reveal can't be expressed with a
 * continuously-scrubbed CSS view() timeline (which always reverses), and Firefox
 * has no scroll-timeline support anyway. The motion stays in CSS — JS only
 * measures rows and flips classes. Skipped under reduced-motion, and — since the
 * hidden state is added here — content stays visible if this never runs.
 */
const SELECTOR = [
  '.section-heading',
  '.how__card',
  '.privacy__item',
  '.features__card',
  '.sources__card',
  '.pricing__card',
  '.faq__item',
  '.cta__panel',
].join(', ')

const STAGGER_MS = 100

export function useScrollReveal() {
  useIsomorphicLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const targets = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR))
    if (targets.length === 0) return

    targets.forEach((el) => el.classList.add('reveal-io'))

    // Cascade row-mates left-to-right: group by parent, then by visual row
    // (shared offsetTop, which transforms don't affect), order by offsetLeft,
    // and delay each block by its column index.
    const byParent = new Map<Element, HTMLElement[]>()
    for (const el of targets) {
      const parent = el.parentElement
      if (!parent) continue
      const group = byParent.get(parent)
      if (group) group.push(el)
      else byParent.set(parent, [el])
    }
    for (const group of byParent.values()) {
      const rows = new Map<number, HTMLElement[]>()
      for (const el of group) {
        const key = Math.round(el.offsetTop)
        const row = rows.get(key)
        if (row) row.push(el)
        else rows.set(key, [el])
      }
      for (const row of rows.values()) {
        row.sort((a, b) => a.offsetLeft - b.offsetLeft)
        row.forEach((el, i) =>
          el.style.setProperty('--reveal-delay', `${i * STAGGER_MS}ms`),
        )
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('in-view')
          observer.unobserve(entry.target) // one-shot: reveal and forget
        }
      },
      // Trip once the block is a little way into the viewport.
      { rootMargin: '0px 0px -12% 0px' },
    )
    targets.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
      targets.forEach((el) => {
        el.classList.remove('reveal-io', 'in-view')
        el.style.removeProperty('--reveal-delay')
      })
    }
  }, [])
}
