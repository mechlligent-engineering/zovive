import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { PRODUCT_ICONS } from './icons/ProductIcons.jsx'

const EASE = [0.16, 1, 0.3, 1]

function AlertTriangleIcon(props) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M16 5 3 27h26L16 5Z" />
      <path d="M16 13v6" />
      <circle cx="16" cy="22.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

const ICONS = { ...PRODUCT_ICONS, alert: AlertTriangleIcon }

const NODES = [
  { x: '18%', y: '30%', delay: 0 },
  { x: '78%', y: '22%', delay: 0.6 },
  { x: '65%', y: '68%', delay: 1.2 },
  { x: '28%', y: '72%', delay: 1.8 },
  { x: '50%', y: '46%', delay: 0.3 },
]

// Calm/normal detections — signal-teal, icon + confidence only, no label needed
// since the icon itself conveys what was detected.
const WILDLIFE_TYPES = [
  { kind: 'wildlife', label: 'Elephant detected', icon: 'wildlife' },
  { kind: 'wildlife', label: 'Tiger detected', icon: 'wildlife' },
  { kind: 'wildlife', label: 'Sensor online', icon: 'sensor' },
  { kind: 'wildlife', label: 'Camera feed active', icon: 'camera' },
]

// Alert detections — warm amber styling, generic alert-triangle icon (no
// dedicated warning icon exists in ProductIcons.jsx), label shown alongside
// the confidence score since the icon alone can't distinguish alert types.
const ALERT_TYPES = [
  { kind: 'alert', label: 'Fence breach alert', icon: 'alert' },
  { kind: 'alert', label: 'Intrusion detected', icon: 'alert' },
]

const DETECTION_TYPES = [...WILDLIFE_TYPES, ...ALERT_TYPES]

const MIN_INTERVAL_MS = 1000
const MAX_INTERVAL_MS = 3000
const MIN_HOLD_MS = 1200
const MAX_HOLD_MS = 1500

// Events are positioned by measuring the hero's actual text-content box at
// spawn time (via `avoidRef`) and picking a random point in one of 8 zones
// that ring it — corners, mid-edges, top/bottom-middle — rather than a fixed
// list of spots. This adapts automatically to any viewport size instead of
// relying on hand-measured percentages per breakpoint.
// The hero headline is wide enough at common desktop sizes (its word-span
// union can span ~75% of the viewport) that the true available margin beside
// it is only a few percent — these constants are kept deliberately small so
// that real-but-narrow margins still register as usable zones instead of
// being discarded, which previously left every zone infeasible and forced a
// permanent fallback to one fixed spot.
const NAVBAR_CLEARANCE_PX = 100 // clears the fixed ~76-83px navbar regardless of viewport height
const BADGE_HALF_WIDTH_PX = 75 // half-width of the widest alert badge ("Intrusion detected · 99%") plus its glow
const BADGE_HALF_HEIGHT_PX = 35 // half-height of the icon + text stack
const ZONE_GAP_PCT = 2 // gap kept between the exclusion box and the nearest zone edge
const MIN_ZONE_RANGE_PCT = 2 // a zone narrower than this (as % of field width/height) is dropped as infeasible
const FALLBACK_EXCLUSION_BOX = { x0: 20, x1: 80, y0: 20, y1: 85 }

function buildZones(fieldRect, exBox) {
  const xEdgePct = Math.max(3, (BADGE_HALF_WIDTH_PX / fieldRect.width) * 100)
  const yEdgePct = Math.max(3, (BADGE_HALF_HEIGHT_PX / fieldRect.height) * 100)
  const topMinPct = Math.max(yEdgePct, (NAVBAR_CLEARANCE_PX / fieldRect.height) * 100)

  const left = { min: xEdgePct, max: exBox.x0 - ZONE_GAP_PCT }
  const right = { min: exBox.x1 + ZONE_GAP_PCT, max: 100 - xEdgePct }
  const hSpan = exBox.x1 - exBox.x0
  const hMid = { min: exBox.x0 + hSpan * 0.3, max: exBox.x0 + hSpan * 0.7 }

  const top = { min: topMinPct, max: exBox.y0 - ZONE_GAP_PCT }
  const bottom = { min: exBox.y1 + ZONE_GAP_PCT, max: 100 - yEdgePct }
  const vSpan = exBox.y1 - exBox.y0
  const vMid = { min: exBox.y0 + vSpan * 0.3, max: exBox.y0 + vSpan * 0.7 }

  const zones = [
    { name: 'top-left', x: left, y: top },
    { name: 'top-middle', x: hMid, y: top },
    { name: 'top-right', x: right, y: top },
    { name: 'left-middle', x: left, y: vMid },
    { name: 'right-middle', x: right, y: vMid },
    { name: 'bottom-left', x: left, y: bottom },
    { name: 'bottom-middle', x: hMid, y: bottom },
    { name: 'bottom-right', x: right, y: bottom },
  ]

  return zones.filter((z) => z.x.max - z.x.min >= MIN_ZONE_RANGE_PCT && z.y.max - z.y.min >= MIN_ZONE_RANGE_PCT)
}

function randomIn(range) {
  return range.min + Math.random() * (range.max - range.min)
}

function randomConfidence() {
  return Math.floor(88 + Math.random() * 12)
}

function DetectionEvent({ event }) {
  const Icon = ICONS[event.icon]
  const isAlert = event.kind === 'alert'

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85 }}
      transition={{ duration: 0.3, ease: EASE }}
      className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
      style={{ left: event.x, top: event.y }}
    >
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center">
        <span
          className={`animate-pulse-slow absolute inset-0 rounded-full blur-md ${
            isAlert ? 'bg-amber-400/30' : 'bg-signal-400/25'
          }`}
        />
        <span
          className={`relative flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-sm ${
            isAlert
              ? 'border-amber-400/50 bg-amber-500/10 text-amber-400'
              : 'border-signal-400/50 bg-signal-500/10 text-signal-400'
          }`}
          style={{
            boxShadow: isAlert
              ? '0 0 18px 3px rgba(245,158,11,0.5)'
              : '0 0 18px 3px rgba(31,191,163,0.45)',
          }}
        >
          <Icon className="h-5 w-5" />
        </span>
      </span>

      <span
        className={`whitespace-nowrap rounded-lg border px-2.5 py-1 text-[10px] leading-tight backdrop-blur-sm ${
          isAlert
            ? 'border-amber-500/30 bg-forest-950/75 text-amber-300'
            : 'border-signal-500/20 bg-forest-950/70 text-mist-100/75'
        }`}
      >
        {isAlert ? (
          <>
            <span className="font-medium">{event.label}</span>
            <span className="text-amber-200/80"> · {event.confidence}%</span>
          </>
        ) : (
          <>{event.confidence}% confidence</>
        )}
      </span>
    </motion.div>
  )
}

// Subtle, looping radar-sweep + pulsing sensor nodes. Pure CSS/SVG — no canvas/rAF, so it stays cheap.
// `avoidRef` should point at the hero's text-content wrapper (used for the
// vertical no-go range). `headlineRef`/`subtitleRef`/`buttonsRef` point at
// the individual content elements — needed because the headline lays its
// words out with `flex flex-wrap`, so the <h1> element's own bounding box
// reports the full available width rather than the actual wrapped-text
// footprint; unioning the individual word spans (plus the subtitle/button
// rows, which size accurately on their own) gives the real visual extent
// instead.
export default function RadarField({ className = '', avoidRef, headlineRef, subtitleRef, buttonsRef }) {
  const [event, setEvent] = useState(null)
  const fieldRef = useRef(null)
  const lastZoneRef = useRef(null)
  const lastTypeRef = useRef(null)
  const idRef = useRef(0)
  const timerRef = useRef(null)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) return

    // Chained (not parallel) scheduling — the next event is only queued once
    // the current one has fully faded out, so there's never more than one on
    // screen and no risk of a new one overlapping a still-exiting one.
    const spawnEvent = () => {
      const fieldEl = fieldRef.current
      const fieldRect = fieldEl?.getBoundingClientRect()
      if (!fieldRect || !fieldRect.width || !fieldRect.height) return

      const contentRect = avoidRef?.current?.getBoundingClientRect()
      const headlineWords = headlineRef?.current ? Array.from(headlineRef.current.children) : []
      const xRects = [
        ...headlineWords.map((el) => el.getBoundingClientRect()),
        subtitleRef?.current?.getBoundingClientRect(),
        buttonsRef?.current?.getBoundingClientRect(),
      ].filter(Boolean)

      let exBox
      if (xRects.length && contentRect) {
        const left = Math.min(...xRects.map((r) => r.left))
        const right = Math.max(...xRects.map((r) => r.right))
        exBox = {
          x0: ((left - fieldRect.left) / fieldRect.width) * 100,
          x1: ((right - fieldRect.left) / fieldRect.width) * 100,
          y0: ((contentRect.top - fieldRect.top) / fieldRect.height) * 100,
          y1: ((contentRect.bottom - fieldRect.top) / fieldRect.height) * 100,
        }
      } else if (contentRect) {
        exBox = {
          x0: ((contentRect.left - fieldRect.left) / fieldRect.width) * 100,
          x1: ((contentRect.right - fieldRect.left) / fieldRect.width) * 100,
          y0: ((contentRect.top - fieldRect.top) / fieldRect.height) * 100,
          y1: ((contentRect.bottom - fieldRect.top) / fieldRect.height) * 100,
        }
      } else {
        exBox = FALLBACK_EXCLUSION_BOX
      }

      const zones = buildZones(fieldRect, exBox)
      const pool = zones.length
        ? zones
        : [{ name: 'fallback', x: { min: 40, max: 60 }, y: { min: 6, max: 12 } }]

      let zone
      do {
        zone = pool[Math.floor(Math.random() * pool.length)]
      } while (zone.name === lastZoneRef.current && pool.length > 1)
      lastZoneRef.current = zone.name

      let type
      do {
        type = DETECTION_TYPES[Math.floor(Math.random() * DETECTION_TYPES.length)]
      } while (type === lastTypeRef.current && DETECTION_TYPES.length > 1)
      lastTypeRef.current = type

      const id = idRef.current++
      setEvent({
        id,
        x: `${randomIn(zone.x)}%`,
        y: `${randomIn(zone.y)}%`,
        kind: type.kind,
        label: type.label,
        icon: type.icon,
        confidence: randomConfidence(),
      })

      const holdMs = MIN_HOLD_MS + Math.random() * (MAX_HOLD_MS - MIN_HOLD_MS)
      timerRef.current = setTimeout(() => {
        setEvent((cur) => (cur && cur.id === id ? null : cur))
        scheduleNext()
      }, holdMs)
    }

    const scheduleNext = () => {
      const delay = MIN_INTERVAL_MS + Math.random() * (MAX_INTERVAL_MS - MIN_INTERVAL_MS)
      timerRef.current = setTimeout(spawnEvent, delay)
    }

    scheduleNext()
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <div ref={fieldRef} className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="bg-scanlines absolute inset-0 opacity-60" />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <svg width="900" height="900" viewBox="0 0 900 900" className="max-w-none opacity-[0.35]">
          <g fill="none" stroke="var(--color-signal-500)" strokeWidth="1">
            <circle cx="450" cy="450" r="120" opacity="0.35" />
            <circle cx="450" cy="450" r="220" opacity="0.25" />
            <circle cx="450" cy="450" r="320" opacity="0.18" />
            <circle cx="450" cy="450" r="420" opacity="0.1" />
          </g>
        </svg>
      </div>

      <div
        className="animate-radar-spin absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            'conic-gradient(from 0deg, rgba(31,191,163,0.22) 0deg, rgba(31,191,163,0) 55deg, rgba(31,191,163,0) 360deg)',
          borderRadius: '9999px',
        }}
      />

      {NODES.map((n, i) => (
        <span
          key={i}
          className="animate-pulse-slow absolute h-1.5 w-1.5 rounded-full bg-signal-400"
          style={{ left: n.x, top: n.y, animationDelay: `${n.delay}s`, boxShadow: '0 0 12px 2px rgba(31,191,163,0.55)' }}
        />
      ))}

      <AnimatePresence>{event && <DetectionEvent key={event.id} event={event} />}</AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-forest-950/10 via-forest-950/40 to-forest-950" />
    </div>
  )
}
