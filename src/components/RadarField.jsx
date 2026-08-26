const NODES = [
  { x: '18%', y: '30%', delay: 0 },
  { x: '78%', y: '22%', delay: 0.6 },
  { x: '65%', y: '68%', delay: 1.2 },
  { x: '28%', y: '72%', delay: 1.8 },
  { x: '50%', y: '46%', delay: 0.3 },
]

// Subtle, looping radar-sweep + pulsing sensor nodes. Pure CSS/SVG — no canvas/rAF, so it stays cheap.
export default function RadarField({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
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

      <div className="absolute inset-0 bg-gradient-to-b from-forest-950/10 via-forest-950/40 to-forest-950" />
    </div>
  )
}
